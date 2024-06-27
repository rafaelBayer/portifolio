import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Template = ({ page, children }) => {
  useEffect(() => {
    document.title = page + " | Rafael Bayer";
  }, [page]);
  return (
    <>
      <Header />
      {children}
      <Footer/>
    </>
  );
};

export default Template;
