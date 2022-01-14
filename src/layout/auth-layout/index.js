import { APP_NAME } from "configs/AppConfig";
import React from "react";
import AuthView from "views/auth-views";
import "./styles.scss";
const AuthLayout = () => {
  return (
    <div className="auth-main   ">
      <AuthView />
      <footer>{APP_NAME} - ©2022, Her hakkı saklıdır.</footer>
    </div>
  );
};

export default AuthLayout;
