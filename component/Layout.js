import React from "react";
import ExtraService from "./ExtraService";
import Footer from "./footer";
import NavBar from "./navbar";
import NewsLetter from "./NewsLetter";
const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <ExtraService />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Layout;
