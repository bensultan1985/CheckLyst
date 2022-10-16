import React, { useState } from "react";
import { Title, TextInput, Button, Text, Container } from "@mantine/core";
import styles from "../styles/Home.module.css";
import { signIn } from "next-auth/react";
import { createUser } from "../services/services";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

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
        <TextInput
          label="Email"
          placeholder="jhon@doe.com"
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <TextInput
          label="First Name"
          onChange={(e: any) => setFirstName(e.target.value)}
        />
        <TextInput
          label="Last Name"
          onChange={(e: any) => setLastName(e.target.value)}
        />
        <TextInput
          label="Password"
          onChange={(e: any) => setPassword(e.target.value)}
        />
        <TextInput label="Re-Enter Password" />

        <Button
          variant="outline"
          onClick={() => {
            fetch("/api/user", {
              method: "POST",
              body: JSON.stringify({
                name: firstName + " " + lastName,
                email: email,
                type: "auth",
                password: password,
                id: 1,
              }),
            });
          }}
        >
          Register
        </Button>
      </main>
    </>
  );
}
