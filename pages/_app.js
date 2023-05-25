import "./globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "../redux/slices/theme";
import { Provider } from "react-redux";
import { Rstore } from "@/redux/store/store";
import Alerts from "@/ui-components/Alerts/Alerts";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={Rstore}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline>
          <Component {...pageProps} />
          <Alerts />
        </CssBaseline>
      </ThemeProvider>
    </Provider>
  );
}
