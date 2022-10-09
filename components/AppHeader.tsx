import { Anchor, Header, SimpleGrid, Title } from "@mantine/core";
import LoginSection from "./LoginSection";

export function AppHeader() {
  return (
    <Anchor>
      <Header
        height="auto"
        fixed
        px="xl"
        sx={(theme) => ({
          backgroundColor: theme?.colors?.violet[5],
          color: "white",
        })}
      >
        <SimpleGrid cols={2}>
          <div>
            <Title style={{ display: "inline-block" }}>CheckLyst</Title>
          </div>
          <LoginSection></LoginSection>
        </SimpleGrid>
      </Header>
    </Anchor>
  );
}
