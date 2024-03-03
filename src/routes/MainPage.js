import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components/Layouts";

const MainPage = () => {
  return (
    <div>
      <Header />
      <div style={{ minHeight: "80vh", textAlign: "center" }}>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainPage;
