import { Box, styled } from "@mui/material";

const drawerWidth = 70;

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  height: 50,
  [theme.breakpoints.down("sm")]: {
    height: 56,
  },
  position: "relative",
  svg: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-10%, -40%)",
  },
}));

export const Drawer = styled(Box)(({ theme }) => ({
  width: drawerWidth,
  height: "100%",
  whiteSpace: "nowrap",
  backgroundColor: theme.palette.secondary.dark,
  color: theme.palette.secondary.contrastText,
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
}));
