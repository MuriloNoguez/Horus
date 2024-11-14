import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Home";
import Login from "./login";
import Registro from "./Registro";
import Clientes from "./Clientes";
import Perfil from "./Perfil";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Login",
    element: <Login/>
  },
  {
    path: "/Registro",
    element: <Registro/>
  },
  {
    path: "/Page-Clientes",
    element: <Clientes/>
  },
  {
    path: "/Perfil",
    element: <Perfil/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
