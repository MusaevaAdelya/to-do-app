import { useTodo } from "../context/ToDoContext";

function Progress() {
  const { todos } = useTodo();

  return (
    <p className="text-base text-gray-300 md:text-xl">
      {todos.reduce((acc, todo) => {
        return !todo.isDone && !todo.isDeleted ? acc + 1 : acc;
      }, 0)}{" "}
      more,{" "}
      {todos.reduce((acc, todo) => {
        return todo.isDone && !todo.isDeleted ? acc + 1 : acc;
      }, 0)}{" "}
      done
    </p>
  );
}

export default Progress;
