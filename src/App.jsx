import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import AllTodos from "./pages/AllTodos";
import ActiveTodos from "./pages/ActiveTodos";
import DoneTodos from "./pages/DoneTodos";
import DeletedTodos from "./pages/DeletedTodos";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="all" />} />
          <Route path="all" element={<AllTodos/>} />
          <Route path="active" element={<ActiveTodos />} />
          <Route path="done" element={<DoneTodos />} />
          <Route path="deleted" element={<DeletedTodos />} />
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
