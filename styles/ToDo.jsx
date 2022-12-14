export function getStyles(theme) {
  return {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    //   textAlign: "center",
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    cursor: "pointer",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
    },
  };
}
