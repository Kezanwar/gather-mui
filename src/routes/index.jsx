import React from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Test from "../views/test";

const Router = () => {
  const elements = useRoutes([{ path: "*", element: <Test /> }]);

  const location = useLocation();
  if (!elements) return null;
  return (
    <AnimatePresence mode="wait">
      {React.cloneElement(elements, { key: location.pathname })}
    </AnimatePresence>
  );
};

export default Router;
