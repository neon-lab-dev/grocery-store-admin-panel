import type { LazyExoticComponent, ComponentType } from "react";
import { lazy } from "react";
import type { RouteProps } from "react-router-dom";

type IRoute = RouteProps & {
  component: LazyExoticComponent<ComponentType<any>>;
};

const ROUTES: IRoute[] = [
  {
    path: "/",
    component: lazy(async () => await import("../pages/Home")),
  },
  {
    path: "/products",
    component: lazy(async () => await import("../pages/Products")),
  },
  {

    path: "/products/add-a-product",
    component: lazy(async () => await import("../pages/AddProduct")),

    path: "/login",
    component: lazy(async () => await import("../pages/Login/Login")),
  },

  },
];

export default ROUTES;
