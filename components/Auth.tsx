import { Container, Text } from "@mantine/core";
import { signIn } from "next-auth/react";
import { getLocationOrigin } from "next/dist/shared/lib/utils";
import { GoogleIcon } from "../svg/SocialNetworksIcons/GoogleIcon";
import { SVGIcon } from "./SVGIcon";

export default function Auth(props: { labelText: string }) {
  const { labelText } = props;
  return (
    <>
      <Text p="md">
        {labelText} with:{" "}
        <Container style={{ display: "inline-block" }}>
          <SVGIcon>
            <GoogleIcon
              style={{ height: "20px", width: "20px", cursor: "pointer" }}
              onClick={() =>
                signIn("google", {
                  callbackUrl: getLocationOrigin(),
                })
              }
            />
          </SVGIcon>
        </Container>
      </Text>

      <Text p="md">Or {labelText} with your email: </Text>
    </>
  );
}
