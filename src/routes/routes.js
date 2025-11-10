import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error404 from "../components/Error404";
import AllModels from "../pages/AllModels";
import ModelDetails from "../pages/ModelDetails";
import AddModel from "../pages/AddModel";
import EditeModel from "../pages/EditeModel";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login
      },
      {
        path: "/register",
        Component: Register
      },
      {
        path: "/models",
        Component: AllModels
      },
      {
        path: "add-model",
        Component: AddModel
      },
      {
        path: "/models/:id",
        Component: ModelDetails
      },
      {
        path: "/models/:id/edit",
        Component: EditeModel
      },
      {
        path: "*",
        Component: Error404
      }
    ],
  },
]);

export default router;