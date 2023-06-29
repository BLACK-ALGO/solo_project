import React, {useState} from "react";
import { Link, Route, Routes} from "react-router-dom";
import { BsDistributeVertical } from "react-icons/bs";
import {HiMenuAlt3} from 'react-icons/hi';
import {MdSpaceDashboard, MdSettingsSuggest} from 'react-icons/md';
import {FcDepartment} from 'react-icons/fc';
import {IoIosPeople} from 'react-icons/io';
import {GiTeacher} from 'react-icons/gi';
import {BiLogOut} from 'react-icons/bi';
import {FaSchool} from 'react-icons/fa';
import {FaDiscourse} from 'react-icons/fa';
import {FcStatistics, FcInspection} from 'react-icons/fc';
import { Dashboard } from "./pages/Dashboard";
import { Student } from "./pages/Student";
import { Department } from "./pages/Department";
import { Lecture } from "./pages/Lecture";
import { Results } from "./pages/Results";
import { FieldStudy } from "./pages/FieldStudy";
import { Speciality } from "./pages/Speciality";
import { School } from "./pages/School";
import { Course } from "./pages/Course";
// import {profile} from "./"

// import { Department } from "./pages/Student";
// import {FaSchool} from 'react-icons/fa';

const Home = ({onRouteChange}) =>{
    const menus = [
        {name:"DashBoard", Link: '/DashBoard', icon: MdSpaceDashboard },
        {name:"Course", Link: '/Course', icon: FaDiscourse },
        {name:"Student", Link: '/Student', icon: IoIosPeople },
        {name:"Lecture", Link: '/Lecture', icon: GiTeacher },
        {name:"Results", Link: '/Results', icon: FcStatistics },
        {name:"Field Of Study", Link: '/Field Of Study', icon: BsDistributeVertical },
        {name:"Speciality", Link: '/Speciality', icon: FcInspection },
        {name:"School", Link: '/School', icon: FaSchool },
        {name:"Level Of Study", Link: '/Level Of Study', icon: FcDepartment },
        {name:"Setting", Link: '/', icon: MdSettingsSuggest },
        // {name:"Log Out", Link: '/', icon: BiLogOut },
    ];
    const [open, setOpen] = useState(true);
    return(
        <section className="flex gap-6 ">
            <div className={`bg-[#0e0e0e] min-h-screen ${open ? 'w-72': 'w-16'} duration-500000 text-gray-100 px-4`}>
                <div className="py-3 flex justify-end">
                <HiMenuAlt3  size={26} className="cursor-pointer" onClick={() => setOpen(!open)}/>
                </div>
                <div className="mt-4 flex flex-col gap-4 relative">
                    {
                menus?.map((menu,i) => (
                    <Link to={menu?.Link} key={i} className="group flex 
                    items-center text-sm gap-3.5 font-meduim p-2  
                    hover:bg-gray-800 rounded-md active:bg-amber-500">
                        <div > {React.createElement(menu?.icon , {size: "20"})} </div>
                        <h2 
                        style={{
                            transitionDelay: `${i + 3}00ms`
                        }}
                        className={`whitespace-pre duration-500 ${
                            !open && 'opacity-0 translate-x-28 overflow-hidden'}`}>{menu?.name}
                            </h2>
                            <h2 className={`${open && 'hidden'} absolute left-48 bg-white 
                            font-semibold whitespace-pre 
                            text-gray-900 rounded-md 
                            drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1
                            group-hover:left-14 group-hover:duration-300 group-hover: w-fit`}>
                                {menu?.name}
                            </h2>
                    </Link>
                ))
                    
                    
                    }
                    {/* Log Out Button */}
                <div className="flex log_out cursor-pointer">
                <BiLogOut size={20}/><p className="font-meduim ml-5  " 
                onClick={()=>onRouteChange('home')}> Log Out </p>
                </div>
                </div>

            </div>
            {/* m-3 text-xl text-gray-900 font-semibol w-95 */}

            <div className="m-3 text-xl text-gray-900 font-semibol ">
                <div className="top-bar ">
                    <div className="top-head">
                        Welcome Admin Name
                    </div>
                    <div className="top-head">
                        Welcome To Agenla Management System
                    </div>

                    <div className="top-head">
                    <img src={require('./photos/profile.jpg')} alt="no profile" className="imgs"/>
                    </div>
                </div>
              <div className="">
                <Routes>
                    <Route path="/" element={<Dashboard />}/>
                    <Route path="/DashBoard" element={<Dashboard />}/>
                    <Route path="/Course" element={<Course />}/>
                    <Route path="/Student" element={<Student />}/>
                    <Route path="/Lecture" element={<Lecture/>}/>
                    <Route path="/Results" element={<Results/>}/>
                    <Route path="/Field Of Study" element={<FieldStudy/>}/>
                    <Route path="/Speciality" element={<Speciality/>}/>
                    <Route path="/School" element={<School/>}/>
                    <Route path="/Level Of Study" element={ < Department/> }/>
                    
                </Routes>
                </div>
              

            </div>

        </section>
    );
}
export default Home;