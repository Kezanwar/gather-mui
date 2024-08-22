import { styled, Typography } from "@mui/material";

export const StyledMenuSubtitle = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(2, 2, 1, 2),
  color: theme.palette.text.secondary,
}));
