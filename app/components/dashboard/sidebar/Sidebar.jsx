'use client'
import React, { useState } from 'react'
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
import Menulink from './menulink/menulink';
import Image from 'next/image';


const menuItems = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <MdDashboard  />,
      
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
      icon: <MdOutlineSettings  />,
      list:[
        {
          title: "Departments",
          path: "/departments",
          icon: <MdOutlineSettingsSuggest />,
          list:[]
        },
        {
          title: "Sections",
          path: "/sections",
          icon: <MdOutlineSettingsSuggest />,
  
          list:[]
        },
        {
          title: "Jobs",
          path: "/jobs",
          icon: <MdOutlineSettingsSuggest />,
          list:[]
        },
        {
          title: "Levels",
          path: "/levels",
          icon: <MdOutlineSettingsSuggest />,
          list:[]
        },
        {
          title: "Locations",
          path: "/locations",
          icon: <MdOutlineSettingsSuggest />,
          list:[]
        },
        {
          title: "Benefits",
          path: "/benefits",
          icon: <MdOutlineSettingsSuggest />,
          list:[]
        },
        {
          title: "Deduction",
          path: "/deduction",
          icon: <MdOutlineSettingsSuggest />,
          list:[]
        },
        {
          title: "Deduction",
          path: "/deduction",
          icon: <MdOutlineSettingsSuggest />,
          list:[]
        },
        // {
        //   title: "Deduction",
        //   path: "/deduction",
        //   icon: <MdOutlineSettingsSuggest />,
        //   list:[]
        // },
        
      ]
    },
  
    // {
    //   title: "Pages",
    //   list: [
    //     {
    //       title: "Dashboard",
    //       path: "/dashboard",
    //       icon: <MdDashboard />,
    //     },
    //     {
    //       title: "Users",
    //       path: "/dashboard/users",
    //       icon: <MdSupervisedUserCircle />,
    //     },
    //     {
    //       title: "Products",
    //       path: "/dashboard/products",
    //       icon: <MdShoppingBag />,
    //     },
    //     {
    //       title: "Transactions",
    //       path: "/dashboard/transactions",
    //       icon: <MdAttachMoney />,
    //     },
    //   ],
    // },
    // {
    //   title: "Analytics",
    //   list: [
    //     {
    //       title: "Revenue",
    //       path: "/dashboard/revenue",
    //       icon: <MdWork />,
    //     },
    //     {
    //       title: "Reports",
    //       path: "/dashboard/reports",
    //       icon: <MdAnalytics />,
    //     },
    //     {
    //       title: "Teams",
    //       path: "/dashboard/teams",
    //       icon: <MdPeople />,
    //     },
    //   ],
    // },
    // {
    //   title: "User",
    //   list: [
    //     {
    //       title: "Settings",
    //       path: "/dashboard/settings",
    //       icon: <MdOutlineSettings />,
    //     },
    //     {
    //       title: "Help",
    //       path: "/dashboard/help",
    //       icon: <MdHelpCenter />,
    //     },
    //   ],
    // },
  ];
const Sidebar = () => {
    const [openSub, setOpenSub] = useState(true);
  
  const handleClick = () => {
    setOpenSub(!openSub);
  };
  return (
    <div className='h-auto overflow-auto '>
    <div className="">
      <Image src={'/user.png'} alt='user image' width={50} height={50} className='rounded-full' />
    </div>
    <ul className="px-0">
    {menuItems.map((cat)=>(
      <>
      <li className="text-textprimary flex mt-8 gap-4 items-center text-[20px] cursor-pointer hover:bg-bgHover hover:text-bgPrimary p-2 rounded-md" key={cat.title}>
      <span className="text-[25px] ">
      {cat.icon}
      </span>  
      <span className="flex text-[20px] justify-between items-center gap-0 w-full">
        {cat.title}
        {cat.list ? ( openSub ?  <MdKeyboardArrowDown onClick={()=> setOpenSub(!openSub)} /> :<MdKeyboardArrowRight onClick={()=> setOpenSub(!openSub)}/> ) : null}
        </span>
      </li>
      {cat.list && openSub && cat.list.map((item)=>(
        <Menulink item={item} key={item.title} />
      ))}
      </>
    ))}
    </ul>
    <button type="button" className="text-textprimary w-full flex mt-8 gap-4 items-center text-[20px] cursor-pointer hover:bg-bgHover hover:text-bgPrimary p-2 rounded-md">
      <MdLogout  size={25}/>
      Logout
    </button>
  </div>
  )
}

export default Sidebar