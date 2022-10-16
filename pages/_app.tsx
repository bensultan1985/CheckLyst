import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { AppShell, Container, MantineProvider } from "@mantine/core";
import { SessionProvider, useSession } from "next-auth/react";
import { AppHeader } from "../components/AppHeader";
import { AppFooter } from "../components/AppFooter";
import { theme } from "../styles/mantineGlobalTheme";
import type { Session } from "next-auth";

// export default function App(props: AppProps) {
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <>
      <Head>
        <title>CheckOff</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
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
    </>
  );
}
