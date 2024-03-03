import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div style={{ textAlign: "center", margin: "auto" }}>
      <h1>PageNotFound</h1>
      <Link to="/dashboard">Back to Home</Link>
    </div>
  );
};

export default PageNotFound;
