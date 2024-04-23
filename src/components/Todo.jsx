import React, { memo } from 'react';
import { useTodo } from "../context/ToDoContext";

const Todo = memo(({ todo }) => {

  const { dispatch } = useTodo();

  return (
    <li className="flex p-3 space-x-3 list-none rounded-md bg-base-150" >
      <span
        className={`grow ${todo.isDone ? "line-through" : ""} ${
          todo.isDeleted
            ? "text-red-400"
            : todo.isDone
            ? "text-secondary"
            : "text-primary"
        }`}
      >
        {todo.task}
      </span>

      {todo.isDeleted ? (
        <>
          <button
            className="bi bi-recycle text-primary hover:text-green-400"
            title="restore"
            onClick={()=>dispatch({ type: "restoreTask", payload: todo.id })}
          ></button>
          <button
            className="bi bi-trash3 text-primary hover:text-red-400"
            title="delete forever"
            onClick={()=>dispatch({ type: "hardDeleteTask", payload: todo.id })}
          ></button>
        </>
      ) : (
        <>
          {!todo.isDone ? (
            <button
              className="bi bi-check-lg text-primary hover:text-green-400"
              title="mark as completed"
              onClick={()=>dispatch({ type: "finishTask", payload: todo.id })}
            ></button>
          ) : (
            <button
              className="bi bi-x-lg text-primary hover:text-green-400"
              title="unmark as completed"
              onClick={()=>dispatch({ type: "unfinishTask", payload: todo.id })}
            ></button>
          )}
          <button
            className="bi bi-trash3 text-primary hover:text-red-400"
            title="move to trash"
            onClick={()=>dispatch({ type: "softDeleteTask", payload: todo.id })}
          ></button>
        </>
      )}
    </li>
  );
});

export default Todo;
