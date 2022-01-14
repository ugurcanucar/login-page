import React, { lazy, Suspense } from "react";
import { Routes, Route, Redirect, Navigate } from "react-router-dom";
import { AUTH_PREFIX_PATH } from "configs/AppConfig";

const Login = React.lazy(() => import("./login"));
export const AppViews = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path={`${AUTH_PREFIX_PATH}/login`} element={<Login />} />
        <Route
          path="/auth*"
          element={<Navigate to={`${AUTH_PREFIX_PATH}/login`} replace />}
        />
      </Routes>
    </Suspense>
  );
};

export default AppViews;
