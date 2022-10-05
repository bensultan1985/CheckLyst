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

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

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
            </Header>
          }
          footer={<Footer height="auto" fixed children={"test"}></Footer>}
        >
          <Container>
            <Component {...pageProps} />
          </Container>
        </AppShell>
      </MantineProvider>
    </>
  );
}
