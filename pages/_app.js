import "./globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./theme";
import { Provider, useDispatch, useSelector } from "react-redux";
import { Rstore } from "@/redux/store/store";
import Alerts from "@/ui-components/Alerts/Alerts";
import { clearAlert } from "@/redux/slices/alert";

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
