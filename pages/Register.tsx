import React, { useState } from "react";
import {
  Title,
  TextInput,
  Button,
  Text,
  Container,
  Anchor,
} from "@mantine/core";
import styles from "../styles/Home.module.css";
import { signIn } from "next-auth/react";
import { createUser } from "../services/services";
import { getLocationOrigin } from "next/dist/shared/lib/utils";
import { GoogleIcon } from "../svg/SocialNetworksIcons/GoogleIcon";
import { SVGIcon } from "../components/SVGIcon";
import Auth from "../components/Auth";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <main className={styles.main}>
        <Title>Register</Title>

        <Auth labelText="register"></Auth>

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
