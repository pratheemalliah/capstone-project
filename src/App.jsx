import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/SignUpPage";
import * as userService from "services/user";
import SessionContext from "context/SessionContext";
import { jwtDecode } from "jwt-decode";
import PlantListPage from "pages/auth/PlantListPage";
import PlantShowPage from "pages/auth/PlantShowPage";
import ScrollToTop from "shared-components/ScrollToTop";

const App = () => {
  const [sessionToken, setSessionToken] = useState(() =>
    userService.getSessionTokenStorage()
  );

  return (
    <SessionContext.Provider
      value={{
        username: sessionToken ? jwtDecode(sessionToken).username : null,
        signIn: (token) => {
          setSessionToken(token);
          userService.setSessionTokenStorage(token);
        },
        signOut: () => {
          setSessionToken(null);
          userService.removeSessionTokenStorage();
        },
      }}
    >
      <Router>
        <ScrollToTop/>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/plants" element={<PlantListPage />} />
            <Route path="/plants/:plantId" element={<PlantShowPage />} />
          </Routes>
      </Router>
    </SessionContext.Provider>
  );
};

export default App;
