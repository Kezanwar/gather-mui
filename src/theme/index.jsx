import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { PRIMARY, SECONDARY } from "./palette";
import ButtonOverride from "./overrides/button";
import BreadcrumbOverride from "./overrides/breadcrumbs";

const theme = createTheme({
  palette: {
    primary: PRIMARY,
    secondary: SECONDARY,
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
  components: {
    MuiButton: ButtonOverride,
    MuiBreadcrumbs: BreadcrumbOverride,
  },
});

export default function MUIThemeProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <CssBaseline />
    </ThemeProvider>
  );
}
