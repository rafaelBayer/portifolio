import React from "react";
import { Helmet } from "react-helmet";

import Header from "./Header";
import Footer from "./Footer";

const Template = ({ page, children }) => {
  return (
    <div className="overflow-x-hidden antialiased absolute top-0 z-[-2] h-screen  w-screen bg-background">
      {/* bg-gray-900 */}
      <Helmet>
        <title>{page} | Rafael Bayer</title>
        <meta
          name="description"
          content={"Portfólio de Rafael Bayer, desenvolvedor Full Stack."}
        />
        <meta
          name="keywords"
          content={
            "React.js, PHP, MySQL, APIs RESTful, Desenvolvimento Web, Full Stack"
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <div className="mx-auto">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Template;
