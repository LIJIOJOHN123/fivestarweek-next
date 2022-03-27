import "../styles/globals.css";
import { wrapper } from "../store/store";
import * as React from "react";
import Head from "next/head";
import { CacheProvider } from "@emotion/react";
import { useDispatch } from "react-redux";
import Footer from "../containers/layout/footer";
import dynamic from "next/dynamic";
import { getCookie } from "../utils/auth";
import { authUserLoaded } from "../store/actions/user/auth";
import { notificationList } from "../store/actions/user/notificaiton";
import { languageList } from "../store/actions/user/langauge";
import { localeList } from "../store/actions/user/locale";
import * as gtag from "../utils/gtag";
import { useRouter } from "next/router";
import { CssBaseline, Paper } from "@mui/material";
import createEmotionCache from "../theme/createEmotionCache";
import useWindowDimensions from "../utils/hook";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/styles";
export const Layout = dynamic(() => import("../containers/layout"), {
  ssr: false,
});
const clientSideEmotionCache = createEmotionCache();
export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const dispatch = useDispatch();

  //width and height
  const { height, width } = useWindowDimensions();
  let heightNumber = parseInt(height);
  const [heights, setHights] = React.useState(300);

  React.useEffect(() => {
    setHights(heightNumber);
  }, [height]);
  //token and langauge
  const token = getCookie("token");
  const result = getCookie("languageName");
  React.useEffect(() => {
    dispatch(localeList(result));
  }, [dispatch, result]);
  React.useEffect(() => {
    if (token) {
      let promise1 = dispatch(authUserLoaded(token));
      let promise2 = dispatch(notificationList(5, token));
      Promise.all([promise1, promise2]);
    }
  }, [token, dispatch]);

  //dark mode
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
            <Layout themeValue={ColorModeContext} />
            <div style={{ minHeight: heights }}>
              <Component {...pageProps} />
            </div>
            <Footer />
          </Paper>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </CacheProvider>
  );
};

MyApp.getInitialProps = wrapper.getInitialPageProps(
  ({ dispatch }) =>
    async () => {
      await dispatch(languageList());
    }
);

export default wrapper.withRedux(MyApp);
