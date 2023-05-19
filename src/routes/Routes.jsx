import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/shared/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import AddToy from "../pages/AddToy/AddToy";
import AllToys from "../pages/AllToys/AllToys";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import MyToys from "../pages/MyToys/MyToys";
import ToyUpdate from "../pages/ToyUpdate/ToyUpdate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/addToy",
        element: <AddToy></AddToy>,
      },
      {
        path: "/toys",
        element: <AllToys></AllToys>,
        loader: () => fetch("http://localhost:5000/toys"),
      },
      {
        path: "/myToys/:id",
        element: <MyToys></MyToys>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/myToys/${params.id}`),
      },
      {
        path: "/toyDetails/",
        element: <ToyDetails></ToyDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/toyDetails/${params.id}`),
      },
      {
        path: "/toyUpdate/:id",
        element: <ToyUpdate></ToyUpdate>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/toyDetails/${params.id}`),
      },
    ],
  },
]);

export default router;
