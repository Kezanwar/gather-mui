import * as React from "react";
import { Box, styled } from "@mui/material";

import SidebarHeader from "./components/header";
import ButtonList from "./components/button-list";
import CurrentProject from "./components/current-project";

const drawerWidth = 70;

const Drawer = styled(Box)(({ theme }) => ({
  width: drawerWidth,
  height: "100%",
  whiteSpace: "nowrap",
  backgroundColor: theme.palette.secondary.dark,
  color: theme.palette.secondary.contrastText,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  paddingBottom: theme.spacing(2),
}));

export default function SideBar() {
  return (
    <Drawer component={"aside"}>
      <SidebarHeader />
      <ButtonList />
      <CurrentProject />
    </Drawer>
  );
}
