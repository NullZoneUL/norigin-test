import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import browserRouter from "./routes";
import "./_style.scss";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<RouterProvider router={browserRouter} />);
