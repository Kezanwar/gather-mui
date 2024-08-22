const MenuItemOverrides = {
  styleOverrides: {
    root: ({ theme }) => ({
      fontSize: theme.typography.body2.fontSize,
      fontWeight: 500,
      ["&.Mui-selected"]: {
        color: theme.palette.primary.main,
      },
    }),
  },
};

export default MenuItemOverrides;
