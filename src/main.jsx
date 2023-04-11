import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import Statistics from "./components/Statistics/Statistics";
import AppliedJob from "./components/AppliedJob/AppliedJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("jobCategory.json"),
      },
      {
        path: "stats",
        element: <Statistics />,
      },
      {
        path: "job",
        element: <AppliedJob />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
