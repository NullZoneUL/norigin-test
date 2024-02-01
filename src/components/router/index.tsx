import React from "react";
import { useParams } from "react-router-dom";
import App from "../root";
import getComponentFromRoute from "./components/getComponentsFromRoute";
import { Routes } from "src/routes/routes";

type RoutesType = Routes;

/**
 * Maintains the App component loaded in every moment
 * as well as loading the indicated section
 */
const RouterManager = ({ route }: { route: RoutesType }) => {
  const Page = getComponentFromRoute(route);
  const props: any = useParams();

  return (
    <App>
      <Page {...props}></Page>
    </App>
  );
};

export default RouterManager;
