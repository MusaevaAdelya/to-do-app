import React, { createContext, useContext, useReducer, useEffect } from "react";

const initialState = {
  user: null,
  isLoggedIn: false,
  isRegistered: false,
  isWrongLogin: false,
};

// Create context
const AuthContext = createContext();

// Define reducer function
function authReducer(state, action) {
  switch (action.type) {
    case "userReceived":
      return {
        ...state,
        user: action.payload,
      };
    case "registerUser":
      saveUserToLocalStorage(action.payload);
      return {
        ...state,
        user: action.payload,
        isRegistered: true,
      };

    case "loginUser":
      if (
        state.user &&
        state.user.username === action.payload.username &&
        state.user.password === action.payload.password
      ) {
        return {
          ...state,
          isLoggedIn: true,
          isWrongLogin: false,
        };
      } else {
        return {
          ...state,
          isWrongLogin: true,
        };
      }

    default:
      throw new Error("Action unknown auth");
  }
}

function saveUserToLocalStorage(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

function AuthProvider({ children }) {
  const [auth, authDispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        authDispatch({ type: "userReceived", payload: parsedUser });
      } catch (error) {
        console.error("Error parsing user from localStorage:", error);
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
