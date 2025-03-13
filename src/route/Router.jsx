import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";

createBrowserRouter;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <div>home</div>,
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
