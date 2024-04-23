import { useTodo } from "../context/ToDoContext";
import Todo from "../components/Todo";

function DeletedTodos() {
  const { todos } = useTodo();

  return (
    <>
      {todos
        .filter((todo) => todo.isVisible && todo.isDeleted)
        .map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
    </>
  );
}

export default DeletedTodos;
