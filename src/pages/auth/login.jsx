import { useAuth } from "../../context/auth.jsx";
import React, { FormEvent, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { Button, Stack, Input } from "@chakra-ui/react";
import "./../../styles/login.css"

export default function Login() {
  /**.createRef<HTMLInputElement> */
  const emailRef = React.createRef();
  const passwordRef = React.createRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const auth = useAuth();

  const handleSubmit = async (e) => {
    //e is FormEvent<HTMLFormElement>
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await auth.login({
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      });
      console.log("log in success");
      navigate("/landing");
    } catch {
      setError("Failed to log in");
      console.log("log in error");
    }

    setLoading(false);
  };

  return (
    <div className="login">
      <div>
        <h3 className="font-semibold">Login</h3>
        <p className="login-authenticated">Authenticated through Firebase</p>
      </div>
      {/* <form action="" onSubmit={() => {}}> */}
      {/* //TODO finish the login page. */}
      <form action="" onSubmit={handleSubmit}>
        {/* email input */}
        <div className="mb-6">
          <Input
            type="text"
            name="email"
            id="email"
            className={""}
            disabled={loading}
            placeholder="Email address"
            ref={emailRef}
            required
          />
        </div>
        {/* password input */}
        <div className="mb-6">
          <Input
            type="password"
            name="password"
            id="password"
            //inputstyle
            className={""}
            disabled={loading}
            placeholder="Password"
            ref={passwordRef}
            required
          />
        </div>
        {/* password confirmation */}
        <Button
          colorScheme="blue"
          value="SIGN UP"
          isLoading={loading}
          onClick={() => {
            setLoading(!isLoading);
          }}
          type="submit"
        >
          Login
        </Button>
        <div onClick={()=>{auth.toggleSignIn()}} className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-300 after:mt-0.5 after:flex-1 after:border-t after:border-gray-300">
          <p className="text-primaryDark mx-4 mb-0 text-center font-semibold hover:underline hover:cursor-pointer">
            New User? Sign Up.
          </p>
        </div>
        {/* <NavLink to="/signup">
          <Button value="SIGNUP" onClick={() => null} />
        </NavLink> */}
      </form>
      {/* </form> */}
    </div>
  );
}
