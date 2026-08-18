import React from "react";
import AuthCard from "./components/auth/AuthCard";
import AuthLayout from "./components/auth/AuthLayout";
import Register from "./components/pages/Register";

const App = () => {
  return (
    <AuthLayout>
      <AuthCard>
        <Register />
      </AuthCard>
    </AuthLayout>
  );
};

export default App;
