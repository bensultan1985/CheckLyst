import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { Button, Container, TextInput, Title } from "@mantine/core";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      <Head>
        <title>CheckLyst</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>{" "}
      <main className={styles.main}>
        <Title>Login</Title>
        <Container m={"xl"}>
          <TextInput
            label="email"
            onChange={(e: any) => setEmail(e.target.value)}
          ></TextInput>
          <TextInput
            label="password"
            onChange={(e: any) => setPassword(e.target.value)}
          ></TextInput>
          <Button
            variant="outline"
            onClick={() =>
              signIn("credentials", { username: email, password: password })
            }
          >
            Login
          </Button>
          <Button variant="outline" onClick={() => signIn("google")}>
            Google
          </Button>
        </Container>
      </main>
    </>
  );
}
