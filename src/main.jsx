import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Login from "./login/Login";
import Registro from "./registro/Registro";
import Clientes from "./cliente/Clientes";
import Perfil from "./perfil/Perfil";
import Home from "./home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>, //pagina inicial
  },
  {
    path: "/Login",
    element: <Login/> //pagina de login (possivel mudança)
  },
  {
    path: "/Registro",
    element: <Registro/> //pagina de registro (possivel mudança)
  },
  {
    path: "/Page-Clientes", 
    element: <Clientes/> //pagina das publicações
  },
  {
    path: "/Perfil",
    element: <Perfil/> //pagina do perfil
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
