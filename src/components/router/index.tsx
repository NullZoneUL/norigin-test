import React from "react";
import { useParams } from "react-router-dom";
import App from "../root";
import getComponentFromRoute from "./components/getComponentsFromRoute";
import { Routes } from "src/routes/routes";

type RoutesType = Routes;

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
