import "../styles/globals.css";
import * as React from "react";
import Head from "next/head";
import { CacheProvider } from "@emotion/react";
import { useDispatch } from "react-redux";
import Footer from "../containers/layout/footer";
import dynamic from "next/dynamic";
import * as gtag from "../utils/gtag";
import { useRouter } from "next/router";
import { CssBaseline, Paper } from "@mui/material";
import createEmotionCache from "../theme/createEmotionCache";
import useWindowDimensions from "../utils/hook";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { useStore } from "../store/store";

export const Layout = dynamic(() => import("../containers/layout"), {
  ssr: false,
});
const clientSideEmotionCache = createEmotionCache();
export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const store = useStore(pageProps.initialReduxState);

  //width and height
  const { height, width } = useWindowDimensions();
  let heightNumber = parseInt(height);
  const [heights, setHights] = React.useState(300);

  React.useEffect(() => {
    setHights(heightNumber);
  }, [height]);
  //token and langauge

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
    <ColorModeContext.Provider value={colorMode}>
      <Provider store={store}>
        <CacheProvider value={emotionCache}>
          <Head>
            <title>{process.env.APP_NAME} </title>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </Head>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />

            <Paper>
              <Layout />
              <div style={{ minHeight: heights }}>
                <Component {...pageProps} />
              </div>
              <Footer />
            </Paper>
          </ThemeProvider>
        </CacheProvider>
      </Provider>
    </ColorModeContext.Provider>
  );
};

export default MyApp;
