import {
  alpha,
  AppBar,
  Box,
  Button,
  Divider,
  styled,
  Toolbar,
} from "@mui/material";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.background.default,
  //   boxShadow: theme.shadows[1],
  boxShadow: theme.customShadows.light /* taken from our platform, 
  in reality we would setup theme.shadows with our current platform variants of shadows */,
}));

export const LinksContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: theme.spacing(1),
}));

export const StyledLink = styled(Button, {
  shouldForwardProp: (prop) => prop !== "isSelected",
})(({ theme, isSelected }) => ({
  textDecoration: "none",
  fontWeight: 500,
  padding: theme.spacing(1),
  fontSize: theme.typography.body1.fontSize,
  height: 32,
  backgroundColor: isSelected
    ? alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
    : "",
  color: isSelected ? theme.palette.primary.main : theme.palette.text.primary,
  ["&:hover"]: {
    color: theme.palette.primary.main,
  },
  "&:last-of-type": {
    marginRight: theme.spacing(1),
  },
}));

export const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    minHeight: 50,
  },
}));

export const StyledDivider = styled(Divider)(() => ({
  height: 20,
  marginTop: "auto",
  marginBottom: "auto",
}));
