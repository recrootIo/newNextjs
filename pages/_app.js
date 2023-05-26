import "./globals.css";
import {
  // CssBaseline
  //,
  ThemeProvider,
} from "@mui/material";
import { darkTheme } from "../redux/slices/theme";
import { Provider } from "react-redux";
import { Rstore } from "@/redux/store/store";
import Alerts from "@/ui-components/Alerts/Alerts";
import createEmotionCache from "@/theme/createEmotionCache";
import { CacheProvider } from "@emotion/react";

export default function App({
  Component,
  pageProps,
  emotionCache = createEmotionCache,
}) {
  return (
    <CacheProvider value={emotionCache}>
      <Provider store={Rstore}>
        <ThemeProvider theme={darkTheme}>
          {/* <CssBaseline> */}
          <Component {...pageProps} />
          <Alerts />
          {/* </CssBaseline> */}
        </ThemeProvider>
      </Provider>
    </CacheProvider>
  );
}
