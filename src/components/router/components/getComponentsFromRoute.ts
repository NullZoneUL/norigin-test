import { components } from "./components";

const getComponentFromRoute = (route: string) => components[route];

export default getComponentFromRoute;
