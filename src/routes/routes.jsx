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
import MyModels from "../pages/MyModels";
import ModelPurchase from "../pages/ModelPurchase";
import PrivateRoutes from './PrivateRoutes';

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
        element: <PrivateRoutes><AddModel /></PrivateRoutes>
      },
      {
        path: "/models/:id",
        element: <PrivateRoutes><ModelDetails /></PrivateRoutes>
      },
      {
        path: "/models/:id/edit",
        element: <PrivateRoutes><EditeModel /></PrivateRoutes>
      },
      {
        path: 'my-models',
        element: <PrivateRoutes><MyModels /></PrivateRoutes>
      },
      {
        path: "my-purchase",
        element: <PrivateRoutes><ModelPurchase /></PrivateRoutes>
      },
      {
        path: "*",
        element: <Error404 />
      }
    ],
  },
]);

export default router;