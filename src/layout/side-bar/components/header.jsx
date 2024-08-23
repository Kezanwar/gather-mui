import React from "react";
import GatherLogo from "../../../components/gather-logo";
import { styled } from "@mui/material";

const DrawerHeader = styled("div")(({ theme }) => ({
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

const SidebarHeader = () => {
  return (
    <DrawerHeader>
      <GatherLogo scale={0.4} />
    </DrawerHeader>
  );
};

export default SidebarHeader;
