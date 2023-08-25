import React from "react";
import AppHeader from "./components/common/AppHeader";
import AppFooter from "./components/common/AppFooter";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Detail from "./pages/Detail";

function Router() {
  return (
    <>
      <AppHeader />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<Add />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </main>

      <AppFooter />
    </>
  );
}

export default Router;
