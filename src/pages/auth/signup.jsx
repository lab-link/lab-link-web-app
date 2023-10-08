import { useAuth } from "../../context/auth.jsx";
import React, { FormEvent, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { Button, Stack } from "@chakra-ui/react";
export default function Signup() {
  const emailRef = React.createRef();
  const passwordRef = React.createRef();
  const passwordConfirmRef = React.createRef();
  const auth = useAuth();
//   const theme = useTheme();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  //e=: FormEvent<HTMLFormElement>
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current?.value !== passwordConfirmRef.current?.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      console.log("------");
      console.log(emailRef.current?.value);
      console.log(passwordRef.current?.value);

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
    <div>
      signup to create account.
      <form action="" onSubmit={() => {}}>
        {/* //TODO finish the login page. */}
        <form action="" onSubmit={handleSubmit}>
            {/* email input */}
            <div className="mb-6">
              <input
                type="text"
                name="email"
                id="email"
                className={""}
                placeholder="Email address"
                ref={emailRef}
                required
              />
            </div>
            {/* password input */}
            <div className="mb-6">
              <input
                type="password"
                name="password"
                id="password"
                //inputstyle
                className={""}
                placeholder="Password"
                ref={passwordRef}
                required
              />
            </div>
            {/* password confirmation */}
            <div className="mb-6">
              <input
                type="password"
                name="password-confirm"
                id="password-confirm"
                className={"inputStyle"}
                placeholder="Password"
                ref={passwordConfirmRef}
                required
              />
            </div>
            <Button
              value="SIGN UP"
              disabled={loading}
              onClick={() => null}
              isExpanded={true}
              type="submit"
            />
            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-300 after:mt-0.5 after:flex-1 after:border-t after:border-gray-300">
              <p className="text-primaryDark mx-4 mb-0 text-center font-semibold">
                ALREADY SIGNED UP ?
              </p>
            </div>
            {/* <NavLink to="/login">
              <Button value="LOGIN" onClick={() => null} isExpanded={true} />
            </NavLink> */}
          </form>
      </form>
    </div>
  );
}
