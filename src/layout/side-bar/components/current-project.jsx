import { Box, styled, Tooltip } from "@mui/material";
import React from "react";

const StyledBox = styled(Box)(({ theme }) => ({
  color: theme.palette.common.white,
  border: `2px solid`,
  padding: theme.spacing(1),
  fontWeight: 500,
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: theme.spacing(0, 2),
}));

const CurrentProject = () => {
  return (
    <Tooltip arrow placement="right" title={"NR Standard"}>
      <div>
        <StyledBox>NR</StyledBox>
      </div>
    </Tooltip>
  );
};

export default CurrentProject;
