import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RouterManager from "src/components/router";
import { Routes } from "./routes";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <RouterManager route={Routes.index} />,
    errorElement: <RouterManager route={Routes.index} />,
  },
  {
    path: Routes.index,
    element: <RouterManager route={Routes.index} />,
  },
  {
    path: "*",
    element: <RouterManager route={Routes.error} />,
  },
]);

export default browserRouter;
