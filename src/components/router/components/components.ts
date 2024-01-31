import { ReactElement } from "react";
import Home from "src/components/home";
import InfoPage from "src/components/info";
import PageNotFound from "src/components/notFound";
import { Routes } from "src/routes/routes";

interface ComponentsInterface {
  [key: string]: (props: any) => ReactElement;
}

const components: ComponentsInterface = {
  [Routes.index]: Home,
  [Routes.info]: InfoPage,
  [Routes.error]: PageNotFound,
};

export { components };
