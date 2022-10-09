import { Button } from "@mantine/core";
import { useSession, signIn, signOut } from "next-auth/react";
export default function LoginSection() {
  const { data: session } = useSession();
  if (session) {
    return (
      <span style={{ textAlign: "right" }}>
        Signed in as {session?.user?.email}
        <Button variant="filled" onClick={() => signOut()}>
          Sign out{" "}
        </Button>
      </span>
    );
  }
  return (
    <span
      style={{ width: "100%", textAlign: "right", display: "inline-block" }}
    >
      Not signed in{" "}
      <Button variant="filled" onClick={() => signIn()}>
        Sign in{" "}
      </Button>
    </span>
  );
}
