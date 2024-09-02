import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Template = ({ page, children }) => {
  useEffect(() => {
    document.title = page + " | Rafael Bayer";
  }, [page]);
  return (
    <div className="overflow-x-hidden antialiased absolute top-0 z-[-2] h-screen  w-screen bg-gray-900">
      <div className="container mx-auto">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
    // <div className="container mx-auto bg-gray-900">
    // </div>
  );
};

export default Template;
