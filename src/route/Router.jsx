import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import HomePage from "../pages/admin/home/HomePage";

createBrowserRouter;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },

      {
        path: "/users",
        element: <div>users</div>,
      },
      {
        path: "/categories",
        element: <div>categories</div>,
      },
      {
        path: "/audios",
        element: <div>audios</div>,
      },
      {
        path: "/pricing",
        element: <div>pricing</div>,
      },
    ],
  },
]);
