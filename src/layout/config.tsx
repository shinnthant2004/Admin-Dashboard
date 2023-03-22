import React from "react";
import { Diagram, Home2, Setting2, User, UserAdd, UserSquare } from "iconsax-react";

const NavLinks = [
    {
       name:'Home',
       route:"/dashboard/home",
       Icon: <Home2 size={20}/>
    },
    {
        name:'Profile',
        route:"/dashboard/profile",
        Icon: <User size={20}/>
    },
    {
        name:'Statisctics',
        route:"/dashboard/statistics",
        Icon: <Diagram size={20}/>
    },
    {
        name:'Add Account',
        route:"/dashboard/add_account",
        Icon: <UserAdd size={20}/>
    },
    {
        name:"Manage Account",
        route:"/dashboard/manage_account",
        Icon: <Setting2 size={20}/>
    }
];

export default NavLinks;