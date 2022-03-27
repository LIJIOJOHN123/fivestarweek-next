import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, Paper } from "@mui/material";
import createCache from "@emotion/cache";
import { Provider } from "react-redux";
import { useStore } from "../store/store";
import Footer from "../containers/layout/footer";
import dynamic from "next/dynamic";
import { getCookie } from "../utils/auth";
import { authUserLoaded } from "../store/actions/user/auth";
import { notificationList } from "../store/actions/user/notificaiton";
import { languageList } from "../store/actions/user/langauge";
import { localeList } from "../store/actions/user/locale";
import * as gtag from "../utils/gtag";
import { useRouter } from "next/router";
import useWindowDimensions from "../utils/hook";
import createEmotionCache from "../theme/createEmotionCache";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const clientSideEmotionCache = createEmotionCache();

export const cache = createCache({ key: "css", prepend: true });
export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});
export const Layout = dynamic(() => import("../containers/layout"), {
  ssr: false,
});

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  //width and height
  const { height, width } = useWindowDimensions();
  let heightNumber = parseInt(height);
  const [heights, setHights] = React.useState(300);

  React.useEffect(() => {
    setHights(heightNumber);
  }, [height]);

  const store = useStore(pageProps.initialReduxState);

  const token = getCookie("token");
  const result = getCookie("languageName");
  React.useEffect(() => {
    store.dispatch(languageList());
    store.dispatch(localeList(result));
  }, [result, store]);

  React.useEffect(() => {
    if (token) {
      let promise1 = store.dispatch(authUserLoaded(token));
      let promise2 = store.dispatch(notificationList(5, token));
      Promise.all([promise1, promise2]);
    }
  }, [token, store]);

  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  const router = useRouter();
  React.useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{process.env.APP_NAME} </title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />

          <Paper>
            <Provider store={store}>
              <Layout themeValue={ColorModeContext} />
              <div style={{ minHeight: heights }}>
                <Component {...pageProps} />
              </div>
              <Footer />
            </Provider>
          </Paper>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
