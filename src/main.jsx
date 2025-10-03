import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Clientes from "./pages/Clientes";
import Perfil from "./pages/Perfil";
import Home from "./pages/Home";

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
