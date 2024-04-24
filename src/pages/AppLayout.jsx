import AppTitle from "../components/AppTitle";
import Header from "../components/Header";
import Input from "../components/Input";
import NavBar from "../components/NavBar";
import Progress from "../components/Progress";
import TodoContainer from "../components/TodoContainer";
import { useTodo } from "../context/ToDoContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function AppLayout() {
  const { dispatch } = useTodo();
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.isLoggedIn) {
      navigate("/sign-in");
    }
  }, [auth.isLoggedIn,navigate]);

  return (
    <>
      <Header>
        <AppTitle title="to-do list" />
        <Progress />
      </Header>
      <NavBar />
      <Input
        icon="bi bi-search-heart"
        placeholder="Search a task..."
        handleInput={(inputValue) =>
          dispatch({ type: "searchTask", payload: inputValue })
        }
      />
      <TodoContainer />
      <Input
        icon="bi bi-plus-lg"
        placeholder="Add a new task..."
        handleInput={(inputValue) =>
          dispatch({ type: "addTask", payload: inputValue })
        }
      />
    </>
  );
}

export default AppLayout;
