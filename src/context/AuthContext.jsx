import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { ...state, user: action.payload };
    case "logout":
      localStorage.removeItem("user");
      return { ...state, user: null };
    case "register":
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { ...state, user: action.payload };
    default:
      throw new Error("Unknown action");
  }
}

function getUserFromLocalStorage() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const user = getUserFromLocalStorage();

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
