import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="w-screen h-screen bg-red-300">
          <div className="w-full h-full grid grid-cols-10">
            <div className="w-full h-full col-span-2 bg-black">
                SideBar
            </div>
            <div className="w-full h-full col-span-8 bg-yellow-50">
                <Outlet/>
            </div>
          </div>
        </div>
    )
}

export default Layout;