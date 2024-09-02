import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../screens/Home"));
const Erro = lazy(() => import("../screens/Erro"));

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="*" Component={Erro} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
