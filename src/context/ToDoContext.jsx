import { isVisible } from "@testing-library/user-event/dist/utils";
import React, { createContext, useContext, useReducer, useEffect } from "react";

// Define initial state
const initialState = {
  todos: [],
};

// Create context
const TodoContext = createContext();

// Define reducer function
function todoReducer(state, action) {
  switch (action.type) {
    case "todosReceived":
      return {
        ...state,
        todos: action.payload,
      };
    case "addTask":
      if (action.payload.length > 0) {
        return {
          ...state,
          todos: [
            ...state.todos,
            {
              id: state.todos.at(-1) ? state.todos.at(-1).id + 1 : 1,
              task: action.payload,
              isDone: false,
              isDeleted: false,
              isVisible: true,
            },
          ],
        };
      } else {
        return state;
      }

    case "finishTask":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, isDone: true } : todo
        ),
      };
    case "unfinishTask":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, isDone: false } : todo
        ),
      };
    case "softDeleteTask":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, isDeleted: true } : todo
        ),
      };
    case "restoreTask":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, isDeleted: false } : todo
        ),
      };
    case "hardDeleteTask":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "searchTask":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          !todo.task.includes(action.payload)
            ? { ...todo, isVisible: false }
            : { ...todo, isVisible: true }
        ),
      };
    default:
      throw new Error("Action unknown");
  }
}

// TodoProvider component
function TodoProvider({ children }) {
  const [{ todos }, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      try {
        const parsedTodos = JSON.parse(storedTodos);
        dispatch({ type: "todosReceived", payload: parsedTodos });
      } catch (error) {
        console.error("Error parsing todos from localStorage:", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

// Custom hook to use TodoContext
function useTodo() {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
}

export { TodoProvider, useTodo };
