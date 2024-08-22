import * as React from "react";
import { useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import GatherLogo from "../../components/gather-logo";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

import { InboxOutlined, MailOutline } from "@mui/icons-material";
import { Drawer, DrawerHeader } from "./styles";

const options = [
  {
    label: "Shift Planner",
    icon: <EditCalendarOutlinedIcon />,
  },
  {
    label: "Shift Records",
    icon: <ReceiptLongOutlinedIcon />,
  },
  {
    label: "Reports",
    icon: <AssessmentOutlinedIcon />,
  },
  {
    label: "Documents",
    icon: <AttachFileOutlinedIcon />,
  },
  {
    label: "Siteview",
    icon: <MapOutlinedIcon />,
  },
];

export default function SideBar() {
  const theme = useTheme();

  return (
    <Drawer component={"aside"}>
      <DrawerHeader>
        <GatherLogo scale={0.4} />
      </DrawerHeader>
      <List sx={{ mt: 14 }}>
        {options.map((item, index) => (
          <ListItem key={item.label} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                color="inherit"
                sx={{
                  minWidth: 0,
                  color: "inherit",
                  mr: "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              {/* <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} /> */}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
