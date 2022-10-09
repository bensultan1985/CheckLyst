import { Container } from "@mantine/core";
import ToDo from "./ToDo";
interface ToDoListProps {
  toDos: Array<{ header: string; complete: boolean }>;
}

export function ToDoList(props: ToDoListProps) {
  const { toDos } = props;
  return (
    <>
      <Container>
        {toDos.map((todo) => (
          <ToDo header={todo.header} complete={todo.complete} />
        ))}
      </Container>
    </>
  );
}
