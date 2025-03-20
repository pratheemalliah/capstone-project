import React, { useState } from "react";
import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import { Link, useNavigate } from "react-router-dom";
import * as userService from "services/user";
import RedirectToPlantsIfSignedIn from "shared-components/RedirectToPlantsIfSignedIn";

const SignUpPage = () => {
  const navigate = useNavigate();
  const fields = [
    { label: "username", type: "text" },
    { label: "password", type: "password" },
    { label: "confirm password", type: "password" },
  ];

  const handleSubmit = async (values) => {
    setError("");
    if (values.username.length < 4) {
      setError("username is too short");
      return;
    }

    if (values.password.length < 4) {
      setError("password is too short");
      return;
    }

    if (values.password !== values["confirm password"]) {
      setError("passwords do not match");
      return;
    }

    const response = await userService.createUser({
      username: values.username,
      password: values.password,
    });

    if (response.status === 201) {
      console.log("User created");
      setError("");
      navigate("/", { state: { accountCreated: true } });
    } else {
      const data = await response.json();
      setError(data.error);
    }
  };
  const [error, setError] = useState("");
  return (
    <RedirectToPlantsIfSignedIn>
      <FormContainer>
        <div className="text-red-700 font-lato">{error}</div>
        <AuthForm
          fields={fields}
          submitButtonLabel="create account"
          onSubmit={handleSubmit}
        />
        <Link to="/" className="text-green-600 text-sm underline">
          sign in
        </Link>
      </FormContainer>
    </RedirectToPlantsIfSignedIn>
  );
};

export default SignUpPage;
