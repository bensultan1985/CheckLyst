import { Anchor, Header, SimpleGrid, Title } from "@mantine/core";
import Link from "next/link";
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
            <Link href={"/"}>
              <Title style={{ display: "inline-block" }}>CheckLyst</Title>
            </Link>
          </div>
          <LoginSection></LoginSection>
        </SimpleGrid>
      </Header>
    </Anchor>
  );
}
