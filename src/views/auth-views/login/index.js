import React from "react";
import AuthForm from "./components/Auth-Form";
import Summary from "./components/Summary";

const Login = () => {
  return (
    <div className="table-out    ">
      <div className="wrapper ">
        <AuthForm />
        <Summary />
      </div>
    </div>
  );
};

export default Login;
