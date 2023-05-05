import "./globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./theme";
import { Provider } from "react-redux";
import { Rstore } from "@/redux/store/store";
export default function App({ Component, pageProps }) {
  return (
    <Provider store={Rstore}>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <Component {...pageProps} />
      </CssBaseline>
    </ThemeProvider>
    </Provider>
  );
}
