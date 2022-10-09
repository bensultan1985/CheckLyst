import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { AppShell, Container, MantineProvider } from "@mantine/core";
import { SessionProvider } from "next-auth/react";
import { AppHeader } from "../components/AppHeader";
import { AppFooter } from "../components/AppFooter";
import { theme } from "../styles/mantineGlobalTheme";
import { userStore } from "../context/userStore";

export default function App(props: AppProps) {
  const {
    Component,
    pageProps: { session, ...pageProps },
  } = props;

  return (
    <>
      <Head>
        <title>CheckOff</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <userStore.Provider value={{ user: { firstName: "Ben" } }}>
        <SessionProvider session={session}>
          <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
            <AppShell
              fixed={false}
              padding="lg"
              header={<AppHeader></AppHeader>}
              footer={<AppFooter></AppFooter>}
            >
              <Container>
                <Component {...pageProps} />
              </Container>
            </AppShell>
          </MantineProvider>
        </SessionProvider>
      </userStore.Provider>
    </>
  );
}
