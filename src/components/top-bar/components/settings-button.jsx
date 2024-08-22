import {
  IconButton,
  MenuItem,
  Popover,
  styled,
  Typography,
} from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const options = [
  { label: "Workspace", to: "/workspace-settings" },
  { label: "Users", to: "/users" },
];

const StyledMenuSubtitle = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(2, 2, 1, 2),
  color: theme.palette.text.secondary,
}));

const SettingsButton = ({ currentRoute }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const nav = useNavigate();

  const closeMenu = () => setAnchorEl(null);

  const dev_options = [
    {
      label: "Empty LocalStorage",
      onClick: () => {
        alert("empty local storage click");
        closeMenu();
      },
    },
    {
      label: "Enable Calculated Debugger",
      onClick: () => {
        alert("enable calc debug click");
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
        size="small"
      >
        <SettingsOutlinedIcon color="secondary" />
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
        <StyledMenuSubtitle variant="subtitle2">Settings</StyledMenuSubtitle>
        {options.map((opt) => {
          return (
            <MenuItem
              onClick={() => {
                nav(opt.to);
                closeMenu();
              }}
              divider={true}
              selected={opt.to === currentRoute}
            >
              {opt.label}
            </MenuItem>
          );
        })}
        <StyledMenuSubtitle variant="subtitle2">Dev</StyledMenuSubtitle>
        {dev_options.map((opt) => {
          return (
            <MenuItem onClick={opt.onClick} divider={true}>
              {opt.label}
            </MenuItem>
          );
        })}
      </Popover>
    </>
  );
};

export default SettingsButton;
