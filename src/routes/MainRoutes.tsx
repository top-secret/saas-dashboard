import { lazy } from "react";

// project imports
import MainLayout from "layout/MainLayout";
import Loadable from "ui-component/Loadable";
import { routeContants } from "./constants";
import { Navigate } from "react-router";

// dashboard routing
const DashboardDefault = Loadable(
  lazy(() => import("views/dashboard/Default"))
);

// sample page routing
const SamplePage = Loadable(lazy(() => import("views/sample-page")));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <Navigate to={`${routeContants.login}`} />,
    },
    {
      path: `${routeContants.dashboard}`,
      element: <DashboardDefault />,
    },
    {
      path: "leads",
      element: <SamplePage />,
    },
  ],
};

export default MainRoutes;
