import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { PRIMARY, SECONDARY } from "./palette";
import ButtonOverride from "./overrides/button";
import BreadcrumbOverride from "./overrides/breadcrumbs";
import PopoverOverrides from "./overrides/popover";
import MenuItemOverrides from "./overrides/menu-item";

const theme = createTheme({
  palette: {
    primary: PRIMARY,
    secondary: SECONDARY,
    text: {
      primary: SECONDARY.main,
      secondary: SECONDARY.light,
    },
  },
  shape: {
    borderRadius: 6,
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h3: {
      fontWeight: 600,
    },
    body1: {
      fontSize: 15,
    },
    subtitle2: {
      textTransform: "uppercase",
      fontSize: 10,
    },
  },
  customShadows: {
    light: "0 0.05rem 0.1rem rgba(0, 0, 0, 0.1490196078)",
    dropdown: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
  },
  components: {
    MuiButton: ButtonOverride,
    MuiBreadcrumbs: BreadcrumbOverride,
    MuiPopover: PopoverOverrides,
    MuiMenuItem: MenuItemOverrides,
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
