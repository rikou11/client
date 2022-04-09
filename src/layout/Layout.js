import React from "react";
import Footer from "../components/NavigationLayout/Footer";
import NavBar from "../components/NavigationLayout/NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="bg-pane font-oxygen ">{children}</div>

      <Footer />
    </>
  );
};

export default Layout;
