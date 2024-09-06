"use server";
// import React, { useEffect, useState } from "react";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
  MdKeyboardArrowRight,
  MdKeyboardArrowDown,
  MdPeopleOutline,
  MdPeopleAlt,
  MdOutlinePayments,
  MdOutlineSettingsSuggest,
} from "react-icons/md";
import Menulink from "./menulink/menulink";
import Image from "next/image";
// import { useRouter } from "next/navigation";
import { auth, signOut } from "@/auth";
import SidebarLi from "./SidebarLi";

const menuItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <MdDashboard />,
  },
  {
    title: "Products",
    path: "/products",
    icon: <MdPeopleAlt />,
    // list:[]
  },
  {
    title: "Employees",
    path: "/employees",
    icon: <MdPeopleAlt />,
    // list:[]
  },
  {
    title: "Users",
    path: "/users",
    icon: <MdPeopleOutline />,
    // list:[]
  },
  {
    title: "Payroll",
    path: "/dashboard",
    icon: <MdOutlinePayments />,
    // list:[]
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <MdOutlineSettings />,
    list: [
      {
        title: "Departments",
        path: "/departments",
        icon: <MdOutlineSettingsSuggest />,
        list: [],
      },
      {
        title: "Sections",
        path: "/sections",
        icon: <MdOutlineSettingsSuggest />,

        list: [],
      },
      {
        title: "Jobs",
        path: "/jobs",
        icon: <MdOutlineSettingsSuggest />,
        list: [],
      },
      {
        title: "Levels",
        path: "/levels",
        icon: <MdOutlineSettingsSuggest />,
        list: [],
      },
      {
        title: "Locations",
        path: "/locations",
        icon: <MdOutlineSettingsSuggest />,
        list: [],
      },
      {
        title: "Benefits",
        path: "/benefits",
        icon: <MdOutlineSettingsSuggest />,
        list: [],
      },
      {
        title: "Deduction",
        path: "/deduction",
        icon: <MdOutlineSettingsSuggest />,
        list: [],
      },
    ],
  },
];
const Sidebar = async () => {
  const {user} = await auth();

  // const handleClick = () => {
  //   setOpenSub(!openSub);
  // };
  return (
    <div className="h-auto overflow-auto ">
      <div className="flex items-center gap-5 mb-5">
        <Image
          src={user.img || "/user.png"}
          alt="user image"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="flex flex-col">
        <span className="font-semibold">{user.username}</span>
        <span className="text-md text-textSoft">Administrator</span>
        </div>
      </div>
      <ul className="px-0">
        {menuItems.map((cat, index) => (
          <>
          {/* below sidebarli i made it to change this to server component */ }
           <SidebarLi cat={cat} />
            
          </>
        ))}
      </ul>
      <form action={async ()=>{
        'use server'
        // console.log('test click');
        
        await signOut()
      }}>
      <button
        // type="button"
        className="text-textprimary w-full flex mt-8 gap-4 items-center text-[20px] cursor-pointer hover:bg-bgHover hover:text-bgPrimary p-2 rounded-md"
      >
        <MdLogout size={25} />
        Logout
      </button>
      </form>
    </div>
  );
};

export default Sidebar;
// <li
//               onClick={() =>
//                 !cat.list
//                   ? router.push(`/dashboard/${cat.title.toLowerCase()}`)
//                   : null
//               }
//               className="text-textprimary flex mt-8 gap-4 items-center text-[20px] cursor-pointer hover:bg-bgHover hover:text-bgPrimary p-2 rounded-md"
//               key={index}
//             >
//               <span className="text-[25px] ">{cat.icon}</span>
//               <span className="flex text-[20px] justify-between items-center gap-0 w-full">
//                 {cat.title}
//                 {cat.list ? (
//                   openSub ? (
//                     <MdKeyboardArrowDown onClick={() => setOpenSub(!openSub)} />
//                   ) : (
//                     <MdKeyboardArrowRight
//                       onClick={() => setOpenSub(!openSub)}
//                     />
//                   )
//                 ) : null}
//               </span>
//             </li>

// {cat.list &&
//   openSub &&
//   cat.list.map((item) => <Menulink item={item} key={item.title} />)}