import EastIcon from "@mui/icons-material/East";

const BreadcrumbOverride = {
  defaultProps: {
    separator: <EastIcon fontSize="12" />,
  },
  styleOverrides: {
    separator: ({ theme }) => ({
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      transform: "scale(0.8)",
    }),
  },
};

export default BreadcrumbOverride;
