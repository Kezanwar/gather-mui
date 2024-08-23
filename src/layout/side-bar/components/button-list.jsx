import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import { styled, Tooltip } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const options = [
  {
    label: "Shift Planner",
    icon: <EditCalendarOutlinedIcon />,
    to: "/shift-planner",
  },
  {
    label: "Shift Records",
    icon: <ReceiptLongOutlinedIcon />,
    to: "/shift-records",
  },
  {
    label: "Reports",
    icon: <AssessmentOutlinedIcon />,
    to: "/reports",
  },
  {
    label: "Documents",
    icon: <AttachFileOutlinedIcon />,
    to: "/project-documents",
  },
  {
    label: "Siteview",
    icon: <MapOutlinedIcon />,
    to: "/siteview",
  },
  {
    label: "People",
    icon: <GroupsOutlinedIcon />,
    to: "/people",
  },
];

const StyledListItem = styled(ListItem)(({ destrProps }) => ({
  display: "block",
  padding: 0,
}));

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  minHeight: 48,
  justifyContent: "center",
  padding: theme.spacing(0, 2.5),
}));

const StyledListItemIcon = styled(ListItemIcon, {
  shouldForwardProp: (props) => props !== "active",
})(({ theme, active }) => ({
  minWidth: 0,
  color: active ? theme.palette.primary.light : "inherit",
  marginRight: "auto",
  justifyContent: "center",
}));

const ButtonList = () => {
  const nav = useNavigate();
  const location = useLocation();
  return (
    <List>
      {options.map((item) => (
        <Tooltip key={item.label} arrow placement="right" title={item.label}>
          <StyledListItem>
            <StyledListItemButton onClick={() => nav(item.to)}>
              <StyledListItemIcon active={item.to === location.pathname}>
                {item.icon}
              </StyledListItemIcon>
            </StyledListItemButton>
          </StyledListItem>
        </Tooltip>
      ))}
    </List>
  );
};

export default ButtonList;
