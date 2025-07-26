import React from "react";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Home from "../pages/Home";
import Pokemon from "../pages/Pokemon";
import NotFound from "../pages/NotFound";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const Location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={Location} key={Location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex_webapp/" element={<Home />} />
        <Route path="/pokedex_webapp/pokemon/:id" element={<Pokemon />} />
        <Route path="/pokedex_webapp/*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
