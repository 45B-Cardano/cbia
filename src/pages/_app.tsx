import type { AppProps } from "next/app";
import Script from "next/script";
import { useEffect, useState } from "react";
import withReduxSaga from "next-redux-saga";
import { ToastContainer } from "react-toastify";
import { createTheme, PaletteMode, ThemeProvider } from "@mui/material";
import { ParallaxProvider } from "react-scroll-parallax";

import "../styles/globals.css";
import "../styles/animations.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";

import wrapper from "../redux/store";
import { getTheme } from "../lib/theme/theme";
import { mutateFontSizeResponsiveness } from "../lib/theme/responsiveTypography";

function App({ Component, pageProps }: AppProps) {
  const [activeMode, setActiveMode] = useState("light");

  let theme = createTheme(getTheme(activeMode as PaletteMode));
  theme = mutateFontSizeResponsiveness(theme);

  useEffect(() => {
    setActiveMode("light");
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Script src="https://platform.illow.io/banner.js?siteId=8395cb23-ac6f-4926-8a5b-e058d5a0b657" />
      <ParallaxProvider>
        <Component {...pageProps} setActiveMode={setActiveMode} />
      </ParallaxProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        style={{
          width: "380px",
        }}
      />
    </ThemeProvider>
  );
}
export default wrapper.withRedux(withReduxSaga(App));
