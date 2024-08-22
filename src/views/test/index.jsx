import React from "react";
import { useLocation } from "react-router-dom";
import { Container, styled, Typography } from "@mui/material";
import PageContainer from "../../components/page-container";

const ContentContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  minHeight: "80vh",
  gap: theme.spacing(4),
}));

const Test = () => {
  const location = useLocation();
  return (
    <PageContainer>
      <ContentContainer maxWidth={"xl"}>
        <Typography variant="h3">Gather MUI</Typography>
        <Typography variant="h5">{location.pathname}</Typography>
      </ContentContainer>
    </PageContainer>
  );
};

export default Test;
