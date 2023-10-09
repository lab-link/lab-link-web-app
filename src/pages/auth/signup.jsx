import { useAuth } from "../../context/auth.jsx";
import React, { useState } from "react";
import { Button, Stack, Input } from "@chakra-ui/react";
import "./../../styles/signup.css"

export default function Signup() {
  const emailRef = React.createRef();
  const passwordRef = React.createRef();
  const passwordConfirmRef = React.createRef();
  const auth = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current?.value !== passwordConfirmRef.current?.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);

      await auth.signup({
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      });
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  };

  return (
    <div class="signup">
      <div className="signup-header">
        <p className="font-semibold">Signup to enter website</p>
        <p className="signed-authenticated">Authenticated with Firebase</p>
      </div>
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
        <div className="mb-6">
          <Input
            type="password"
            name="password-confirm"
            id="password-confirm"
            className={"inputStyle"}
            disabled={loading}
            placeholder="Retype Password"
            ref={passwordConfirmRef}
            required
          />
        </div>
        <Button
          colorScheme="blue"
          value="SIGN UP"
          isLoading={loading}
          onClick={() => {
            setLoading(!isLoading);
          }}
          type="submit"
        >
          Sign Up
        </Button>
        {/* <Link to="/login"> */}
        <div
          onClick={() => {
            auth.toggleSignIn();
          }}
          className="my-4 hover:underline hover:cursor-pointer flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-300 after:mt-0.5 after:flex-1 after:border-t after:border-gray-300"
        >
          <p className="text-primaryDark mx-4 mb-0 text-center font-semibold">
            ALREADY SIGNED UP? Click here to sign in.
          </p>
        </div>

        {/* <Button value="LOGIN" onClick={() => null}  /> */}
      </form>
    </div>
  );
}
