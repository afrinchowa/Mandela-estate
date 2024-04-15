import { Root } from "postcss";
import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: '/',
            element:<Home></Home>,
        }
      ]
    },
  ]);
  
  