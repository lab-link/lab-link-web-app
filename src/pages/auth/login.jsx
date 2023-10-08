import { useAuth } from "../../context/auth.jsx";
import React, { FormEvent, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { Button, Stack } from "@chakra-ui/react";

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
      navigate("/");
    } catch {
      setError("Failed to log in");
      console.log("log in error");
    }

    setLoading(false);
  };

  return (
    <div>
      Hi this is a login page.
      <form action="" onSubmit={handleSubmit}>
        {/* //TODO finish the login page. */}
      </form>
    </div>
  );
}
