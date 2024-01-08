import React from "react"
import Init from "../components/Init"
import { useState } from 'react';
import { FaBeer } from 'react-icons/fa';
import { FaArrowLeft } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { RiDashboardFill  } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";
const HomePage = () => {
    const [open, setOpen] = useState(true);
    return (
        <div className="flex">
            <div className={`bg-sky-800 h-screen w-10 p-5 pt-8 ${open ? "w-72": "w-20"}
            duration-300 relative`}>
                <FaArrowLeft className={`bg-fuchsia-100 text-bg-cyan-600 text-3xl rounded-full
                absolute -right-3 top-9 border border-bg-cyan-600 cursor-pointer ${!open && "rotate-180"}`} 
                onClick={() => setOpen(!open)}/>
                <div className='inline-flex'>
                    <img
                        className="h-9 w-10 object-cover block float-left bg-sky-800 mr-2"
                        src="../assets/logo3.png"
                    />
                    <h1 className={`text-black origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>Home</h1>
                </div>
                <div>
                    <ul className='pt-2'>
                        <li className={`text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 
                        hover:bg-light-white rounded-md mt-2`}>
                            <Link to="/TelemetriaProyect" className='text-2xl block float-left' >
                                <CiHome />
                            </Link>
                            <Link to="/TelemetriaProyect" className={`text-base font-medium flex-1 ${!open && "hidden"} `}>
                                <h1>Home</h1>
                            </Link>
                        </li>
                        <li className={`text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 
                        hover:bg-light-white rounded-md mt-2`}>
                            <Link to="/TelemetriaProyect/dashboard" className='text-2xl block float-left' >
                                <RiDashboardFill />
                            </Link>
                            <Link to="/TelemetriaProyect/dashboard" className={`text-base font-medium flex-1 ${!open && "hidden"} `}>
                                <h1>Dashboard</h1>
                            </Link>
                        </li>
                        <li className={`text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 
                        hover:bg-light-white rounded-md mt-2`}>
                            <Link target="_blank" to="https://twitter.com/espol" className='text-2xl block float-left' >
                                <CiTwitter />
                            </Link>
                            <Link target="_blank" to="https://twitter.com/espol" className={`text-base font-medium flex-1 ${!open && "hidden"} `}>
                                <h1>Twitter</h1>
                            </Link>
                        </li>
                        <li className={`text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 
                        hover:bg-light-white rounded-md mt-2`}>
                            <Link target="_blank" to="https://www.facebook.com/espol/" className='text-2xl block float-left' >
                                <CiFacebook />
                            </Link>
                            <Link target="_blank" to="https://www.facebook.com/espol/" className={`text-base font-medium flex-1 ${!open && "hidden"} `}>
                                <h1>Facebook</h1>
                            </Link>
                        </li>
                        <li className={`text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 
                        hover:bg-light-white rounded-md mt-2`}>
                            <Link target="_blank" to="https://github.com/alperalt1/TelemetriaProyect.git" className='text-2xl block float-left' >
                                <FiGithub />
                            </Link>
                            <Link target="_blank" to="https://github.com/alperalt1/TelemetriaProyect.git" className={`text-base font-medium flex-1 ${!open && "hidden"} `}>
                                <h1>Github</h1>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Init/>  
        </div>
    )
}

export default HomePage