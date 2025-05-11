import React, { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import routes from "@/utils/route";

const SignUp = lazy(() => import("@/pages/SignUp"))
const SignIn = lazy(() => import("@/pages/SignIn"))
const Home = lazy(() => import("@/pages/Home"))
const NotFound = lazy(() => import("@/pages/NotFound"))
const Tasks = lazy(() => import("@/pages/Tasks"))

const routesForAuthenicatedOnly = [
  {
    // element: <Route />,
    children: [
      {
        path: routes.signUp,
        element: <SignUp />,
      },
      {
        path: routes.signIn,
        element: <SignIn />,
      },
      {
        path: routes.home,
        element: <Home />,
      },
      {
        path: routes.tasks,
        element: <Tasks />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

const router = createBrowserRouter([...routesForAuthenicatedOnly]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
