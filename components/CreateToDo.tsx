import {
  Box,
  Collapse,
  Container,
  TextInput,
  Text,
  Button,
} from "@mantine/core";
import { useState } from "react";
import { getStyles } from "../styles/ToDo";

export function CreateToDo() {
  const [isCreateToDoExpanded, setIsCreateToDoExpanded] = useState(false);
  function toggleCreateToDo() {
    console.log("test");
    setIsCreateToDoExpanded(!isCreateToDoExpanded);
  }
  return (
    <>
      <Container
        // size={200}
        // sx={(theme) => getStyles(theme)}
        m={2}
        p={2}
        mt={20}
      >
        <Container
          sx={(theme) => getStyles(theme)}
          m={2}
          p={2}
          size={100}
          onClick={toggleCreateToDo}
        >
          + add item
        </Container>
        <Collapse in={isCreateToDoExpanded}>
          <Container>
            <TextInput label="Description"></TextInput>
            <Container mt={20}>
              <Button variant="outline">Create Item</Button>
            </Container>
          </Container>
        </Collapse>
      </Container>
    </>
  );
}
