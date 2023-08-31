import React from "react";
import AppHeader from "./components/common/AppHeader";
import AppFooter from "./components/common/AppFooter";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Detail from "./pages/Detail";
import PageNotFound from "./pages/PageNotFound";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<Add />} />
        <Route path="/:id" element={<Detail />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default Router;
