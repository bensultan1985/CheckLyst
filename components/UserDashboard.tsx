import { Container, Text } from "@mantine/core";
import { CreateToDo } from "./CreateToDo";
import { ToDoList } from "./ToDoList";

export function UserDashboard(props: any) {
  const { user } = props;
  return (
    <Container size="lg">
      <Text>{user}'s Lyst</Text>
      <CreateToDo></CreateToDo>
      <ToDoList
        //placeholder data
        toDos={[
          {
            header: "File Taxes",
            complete: false,
          },
          {
            header: "Call Eddie About Desk",
            complete: true,
          },
        ]}
      ></ToDoList>
    </Container>
  );
}
