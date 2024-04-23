import { Outlet } from "react-router-dom";

function TodoContainer() {

  return (
    <ul className="my-5 space-y-2 grow">
      <Outlet/>
    </ul>
  );
}

export default TodoContainer;
