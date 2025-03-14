import React from "react";

import Template from "./template/Template";
import SobreMim from "../components/SobreMim";
import Introducao from "../components/Introducao";
import Contato from "../components/Contato";
import Experiencia from "../components/Experiencia";

const Home = () => {
  const page = "Home";

  return (
    <Template page={page}>
      <Introducao />
      <SobreMim />
      <Experiencia />
      <Contato />
    </Template>
  );
};

export default Home;
