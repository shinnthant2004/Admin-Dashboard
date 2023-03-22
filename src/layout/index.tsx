import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = () => {
    return (
        <div className="w-screen h-screen bg-red-300">
          <div className="w-full h-full flex items-center">
            <Sidebar/>
            <div className="w-full p-3 h-full bg-neutral-100">
                <Outlet/>
            </div>
            <div className="w-[300px]">
                Right Bar
            </div>
          </div>
        </div>
    )
}

export default Layout;