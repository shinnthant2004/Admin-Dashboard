import { HambergerMenu, Home2, Maximize3, Maximize4, Menu } from "iconsax-react";
import React, { useState } from "react";
import {AnimatePresence, motion, spring} from "framer-motion";
import NavLinks from "../layout/config";

const Sidebar = () => {
    const [openSlider,setIsOpenSlider] = useState(true);

    const animation = {
        hidden: { 
            opacity: 0, 
            width:0,
            transition: {
              duration: 0.5,
            }, 
        },
        show: { 
            opacity: 1, 
            width:"auto",
            transition: {
                duration: 0.5,
            },
         },
    }

    const textAnimation = {
        hidden: { 
            opacity: 0, 
            display: "none",
            width:0,
            transition: {
              duration: 0.5,
            }, 
        },
        show: { 
            opacity: 1, 
            display: "block",
            width:"auto",
            transition: {
                duration: 0.5,
            },
         },
    }

    return (
        <motion.div
         className="bg-neutral-50 w-full h-full"
         animate={{
            width: openSlider ? "300px" : "45px",
         }}
         transition={{
            duration: 0.4,
            type:spring,
            damping:10,
         }}
        >
           <div className="relative p-3">
                <AnimatePresence>
                {
                    openSlider && 
                    (
                        <motion.div
                         variants={animation}
                         initial="hidden"
                         animate="show"
                         exit="hidden"
                         className="absolute top-4 left-16">
                            <img width={70} height={70} src="/logo.jpg"/>
                        </motion.div>
                    )
                }
                </AnimatePresence>

                <div className="absolute top-3 right-[6px] w-[32px] h-[32px] rounded-full hover:bg-gray-100 flex justify-center items-center">
                  <HambergerMenu size={23} color="#4338ca" onClick={()=>{setIsOpenSlider(!openSlider)}}/>
                </div>
           </div>
           
           {/* Nav Links */}
           <div className="mt-10 px-3 py-7">
               {
               NavLinks.map((link,index)=>{
                    return (
                        <div className={`bg-transparent hover:bg-[#eff6ff] ${openSlider ? "px-3" : ""} py-2 my-2 rounded-md flex items-center hover:font-[400] text-gray-500`} key={index}>
                            <div

                            >
                                {
                                    link.Icon
                                }
                            </div>
                           <AnimatePresence>
                             {
                                openSlider && (
                                <motion.p
                                    variants={textAnimation}
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                    className="ml-3 text-[13px] mt-1"
                                >
                                {link.name}
                                </motion.p>
                                )
                             }
                           </AnimatePresence>
                        </div>
                    )
                })
               }
           </div>
        </motion.div>
    )
}

export default Sidebar;