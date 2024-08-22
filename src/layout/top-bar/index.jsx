import { useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import GatherLogo from "../../components/gather-logo";
import { NavLink, useLocation } from "react-router-dom";

import {
  ActionsContainer,
  LinksContainer,
  StyledAppBar,
  StyledDivider,
  StyledLink,
  StyledToolBar,
} from "./styles";
import SettingsButton from "./components/settings-button";
import HelpButton from "./components/help-button";
import AvatarButton from "./components/avatar-button";

const textLinks = [
  { label: "Projects", to: "/projects" },
  { label: "Workspace Reports", to: "/workspace-reports" },
  { label: "People", to: "/people" },
];

const TopBar = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <StyledAppBar position="sticky">
      <StyledToolBar>
        <LinksContainer>
          {/* {!isMobile &&
            textLinks.map((link) => {
              return (
                <StyledLink
                  component={NavLink}
                  isSelected={location.pathname === link.to}
                  key={link.to}
                  to={link.to}
                >
                  {link.label}
                </StyledLink>
              );
            })} */}
          {/* {!isMobile && <StyledDivider orientation="vertical" flexItem />} */}
          <ActionsContainer>
            <HelpButton />
            <SettingsButton currentRoute={location.pathname} />
            <AvatarButton />
          </ActionsContainer>
        </LinksContainer>
      </StyledToolBar>
    </StyledAppBar>
  );
};

export default TopBar;
