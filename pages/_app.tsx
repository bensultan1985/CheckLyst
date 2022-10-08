import { AppProps } from "next/app";
import Head from "next/head";
import {
  AppShell,
  Container,
  Footer,
  Header,
  MantineProvider,
  Title,
} from "@mantine/core";
import { SessionProvider } from "next-auth/react";
import LoginSection from "../components/LoginSection";

export default function App(props: AppProps) {
  const {
    Component,
    pageProps: { session, ...pageProps },
  } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <SessionProvider session={session}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme: "light",
          }}
        >
          <AppShell
            fixed={false}
            padding="lg"
            header={
              <Header height="auto" fixed px="xl">
                <Title>Cross Off</Title>
                <LoginSection></LoginSection>
              </Header>
            }
            footer={<Footer height="auto" fixed children={"test"}></Footer>}
          >
            <Container>
              <Component {...pageProps} />
            </Container>
          </AppShell>
        </MantineProvider>
      </SessionProvider>
    </>
  );
}
