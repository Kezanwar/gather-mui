import { styled, Avatar as MuiAvatar } from "@mui/material";
import React from "react";

const StyledAvatar = styled(MuiAvatar)(({ theme }) => ({
  backgroundColor: theme.palette.success.light,
  color: theme.palette.info.contrastText,
  height: 28,
  fontWeight: 500,
  width: 28,
  fontSize: 12,
  marginLeft: theme.spacing(0.5),
}));

const Avatar = () => {
  return <StyledAvatar>DM</StyledAvatar>;
};

export default Avatar;
