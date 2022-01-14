import React from "react";
import Brand from "./components/Brand";
import Form from "./components/Form";
const AuthForm = () => {
  return (
    <div className="auth-form">
      <div className="  login-form-general-wrapper   ">
        <Brand />
        <Form />
      </div>
    </div>
  );
};

export default AuthForm;
