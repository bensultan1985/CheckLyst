import { Footer, Text, Anchor } from "@mantine/core";

export function AppFooter() {
  return (
    <Footer
      sx={(theme) => ({
        backgroundColor: theme?.colors?.violet[5],
        color: "white",
      })}
      height="auto"
      fixed
      children={
        <Text m={4} mx={20} align="center">
          Copyright 2022
          <Anchor mx={30}>About Us</Anchor>
          <Anchor>Privacy Policy</Anchor>
        </Text>
      }
    ></Footer>
  );
}
