import {
  styled,
  Avatar as MuiAvatar,
  IconButton,
  Popover,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { StyledMenuSubtitle } from "./styles";

const StyledAvatar = styled(MuiAvatar)(({ theme }) => ({
  backgroundColor: theme.palette.success.light,
  color: theme.palette.info.contrastText,
  height: 28,
  fontWeight: 500,
  width: 28,
  fontSize: 12,
}));

const Avatar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const nav = useNavigate();

  const closeMenu = () => setAnchorEl(null);

  const location = useLocation();

  const options = [
    {
      label: "My Profile",
      path: "/profile",
      onClick: () => {
        nav("/profile");
        closeMenu();
      },
    },
    {
      label: "Gather Academy",
      path: "/gather-academy",
      onClick: () => {
        nav("/gather-academy");
        closeMenu();
      },
    },
    {
      label: "Sign Out",
      onClick: () => {
        alert("sign out clicked");
        closeMenu();
      },
    },
  ];
  return (
    <>
      <IconButton
        onClick={(e) => {
          setAnchorEl(e.target);
        }}
      >
        <StyledAvatar>DM</StyledAvatar>
      </IconButton>
      <Popover
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={closeMenu}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <StyledMenuSubtitle variant="subtitle2">
          Dev Team Member
        </StyledMenuSubtitle>
        {options.map((opt) => {
          return (
            <MenuItem
              selected={opt.path && opt.path === location.pathname}
              key={opt.label}
              onClick={opt.onClick}
            >
              {opt.label}
            </MenuItem>
          );
        })}
      </Popover>
    </>
  );
};

export default Avatar;
