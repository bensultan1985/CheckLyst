import React, { useState } from "react";
import { Title, TextInput, Button, Text, Container } from "@mantine/core";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function Register() {
  const [nameFirst, setFirstName] = useState("");
  const [nameLast, setLastName] = useState("");

  return (
    <>
      <main className={styles.main}>
        <Title>Register</Title>

        <Text>Use your Google Account:</Text>
        <Button
          onClick={() =>
            signIn("google", {
              callbackUrl: process.env.GOOGLE_CALLBACK_URL,
            })
          }
        >
          Google Login
        </Button>
        <Container></Container>
        <TextInput label="Email" placeholder="jhon@doe.com" />
        <TextInput
          label="First Name"
          onChange={(e: any) => setFirstName(e.target.value)}
        />
        <TextInput
          label="Last Name"
          onChange={(e: any) => setLastName(e.target.value)}
        />
        <TextInput label="Password" />
        <TextInput label="Re-Enter Password" />

        <Button variant="outline">Register</Button>
      </main>
    </>
  );
}
