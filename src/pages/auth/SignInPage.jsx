import React, { useState, useContext } from "react";
import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as userService from "services/user";
import SessionContext from "context/SessionContext";
import RedirectToPlantsIfSignedIn from "shared-components/RedirectToPlantsIfSignedIn";

const SignInPage = () => {
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const sessionContext = useContext(SessionContext);
  const fields = [
    { label: "username", type: "text" },
    { label: "password", type: "password" },
  ];

  const handleSubmit = async ({ username, password }) => {
    const response = await userService.createSession({ username, password });

    const data = await response.json();
    if (response.status === 201) {
      console.log("Sign in successful");
      sessionContext.signIn(data.capstone_session_token);
      navigate("/plants");
      setError("");
    } else {
      setError(data.error);
      console.log("Sign in not successful");
    }
  };

  return (
    <RedirectToPlantsIfSignedIn>
      <FormContainer>
        <div className="text-red-700 font-lato">{error}</div>
        {location.state?.accountCreated && (
          <div className="p-4 mb-8 mt-2 bg-green-200 border rounded-lg border-emerald-500 text-emerald-700">
            Account Created Successfully. Please sign in.
          </div>
        )}
        <AuthForm
          fields={fields}
          submitButtonLabel="sign-in"
          onSubmit={handleSubmit}
        />
        <Link to="/sign-up" className="text-green-600 text-sm underline">
          create an account
        </Link>
      </FormContainer>
    </RedirectToPlantsIfSignedIn>
  );
};

export default SignInPage;
