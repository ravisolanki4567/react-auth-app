import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isUserLogin = false;
  if (!isUserLogin) {
    return <Navigate to="/signin" />;
  }
  return children;
};

export default ProtectedRoute;
