import { Box, styled } from "@mui/material";
import React from "react";

const StyledBox = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  overflowY: "auto",
}));

const Main = ({ children }) => {
  return <StyledBox component={"main"}>{children}</StyledBox>;
};

export default Main;
