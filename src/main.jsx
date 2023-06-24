import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main.jsx";
import AddBlog from "./Pages/AddBlog/AddBlog.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "add-blog",
        element: <AddBlog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />,
  </React.StrictMode>
);
