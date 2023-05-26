import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    h1: {
      fontFamily: ["Inter-Bold !important"],
    },
    h2: {
      fontSize: 50,
      fontFamily: ["Inter-Bold !important"],
    },
    h3: {
      fontSize: 50,
      fontFamily: ["Inter-Bold !important"],
    },
    subtitle1: { fontFamily: ["Inter"] },
    subtitle2: { fontFamily: ["Inter"] },
    body1: { fontFamily: ["Inter"] },
    body2: {
      fontFamily: ["Inter"],
    },
  },
});
