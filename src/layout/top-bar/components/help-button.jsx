import { IconButton } from "@mui/material";
import React from "react";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";

const HelpButton = () => {
  return (
    <IconButton
      onClick={() => {
        alert("support clicked");
      }}
      size="small"
    >
      <ContactSupportOutlinedIcon color="secondary" />
    </IconButton>
  );
};

export default HelpButton;
