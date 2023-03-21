import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Layout from "../layout";
import Dashboard from "../pages";

const Routes = () => {
    return useRoutes([
        {
            path:"/",
            element: <Navigate to="/dashboard" replace/>
        },
        {
            path:"dashboard",
            element: <Layout/>,
            children:[
                {
                    path:"",
                    element:<Dashboard/>
                }
            ]
    
        }
    ])
}

export default Routes;