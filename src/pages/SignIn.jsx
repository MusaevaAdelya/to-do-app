import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

function SignIn() {
  const { auth, authDispatch } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSignIn(e) {
    e.preventDefault();
    authDispatch({ type: "loginUser", payload: { username, password } });
    if (auth.isLoggedIn) {
      navigate("/app");
    }
  }

  return (
    <>
      <div className="flex flex-col justify-center lg:px-8">
        <div className="text-center sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-white">
            <span className="text-3xl ">🌸</span>Sign in to your account
          </h2>
          
        </div>
        

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {auth.isWrongLogin && (
            <p className="mb-3 text-red-400 ">Wrong username and password</p>
          )}
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSignIn}
          >
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-white"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="username"
                  autoComplete="username"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                  className="px-3 block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-primary placeholder:text-base-100 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6 bg-transparent"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-primary placeholder:text-base-100 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6 bg-transparent"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-sm text-center text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/sign-up"
              className="font-semibold leading-6 text-primary hover:text-secondary"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignIn;
