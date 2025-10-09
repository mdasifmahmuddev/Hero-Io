import React from 'react'

import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Apps from '../pages/Apps/Apps';



export  const router = createBrowserRouter([
   {
     path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,

    children :[
      {
        index:true,
        loader :() => fetch('productData.json'),
        path:"/",
        Component:Home
      },
      {
        path:"/apps",
        loader:() => fetch ('productData.json'),
        Component:Apps, 
      }
    ]



   },
 ]);
 