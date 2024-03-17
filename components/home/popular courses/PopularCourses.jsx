"use client"

import { useState } from "react";
import AllCourse from "./AllCourse";
import Web from "./Web";
import Graphics from "./Graphics";
import Animation from "./Animation";

const PopularCourses = () => {

    const [all,setAll] = useState(true);
    const [graphics,setGraphics] = useState(false);
    const [web,setWeb] = useState(false);
    const [animation,setAnimation] = useState(false);

    return (
        <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10">

            <div className=" flex flex-col  gap-5 text-center">
                <h1 className="font-bold text-4xl">Popular Courses</h1>
                <p className="font-normal text-base">We have designed our courses with the most demanding professional skills. The knowledge, experience, and expertise gained through the program will ensure your desired job in the global market. From the list below you can enroll to any online or offline courses at any time.</p>
            </div>

            <div className="flex flex-wrap gap-5 justify-center py-5">
            {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 justify-center py-5"> */}

            <div><button onClick={()=>{
            setAll(true);
            setGraphics(false);
            setWeb(false);
            setAnimation(false);
            }} className={all ? `bg-red-500 text-black font-bold py-2 px-4 rounded h-20 w-36`: `bg-slate-200 text-black font-bold py-2 px-4 rounded h-20 w-36`}>All Courses</button></div>

            <div><button onClick={()=>{
                setGraphics(true);
                setAll(false);
                setWeb(false);
                setAnimation(false);
            }} className={graphics ? `bg-red-500 text-black font-bold py-2 px-4 rounded h-20 w-36`: `bg-slate-200 text-black font-bold py-2 px-4 rounded h-20 w-36`}>Graphics and Multimedia</button></div>

            <div><button onClick={()=>{
                setWeb(true);
                setAll(false);
                setGraphics(false);
                setAnimation(false);
            }} className={web ? `bg-red-500 text-black font-bold py-2 px-4 rounded h-20 w-36`: `bg-slate-200 text-black font-bold py-2 px-4 rounded h-20 w-36`}>Web and Software</button></div>

            <div><button onClick={()=>{
                setWeb(false);
                setAll(false);
                setGraphics(false);
                setAnimation(true);
            }} className={animation ? `bg-red-500 text-black font-bold py-2 px-4 rounded h-20 w-36`: `bg-slate-200 text-black font-bold py-2 px-4 rounded h-20 w-36`}>3d Animation</button></div>

            </div>

            {all && <AllCourse></AllCourse>}
            {graphics && <Graphics></Graphics>}
            {web && <Web></Web>}
            {animation && <Animation></Animation>}
            
        </div>
    );
};

export default PopularCourses;