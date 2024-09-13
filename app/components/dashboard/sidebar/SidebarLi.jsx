'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Menulink from "./menulink/menulink";
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
const SidebarLi = ({cat}) => {
    
  const [openSub, setOpenSub] = useState(false);
  const router = useRouter();
  return (
    <>
    <li
    // onClick={() =>
    //   !cat.list
    //     ? router.push(`/dashboard/${cat.title.toLowerCase()}`)
    //     : null
    // }

    onClick={() =>
    
      !cat.list
        ? (cat.title.toLowerCase() !== 'dashboard'  ?
          router.push(`/dashboard/${cat.title.toLowerCase()}`)
        : router.push(`/${cat.title.toLowerCase()}`))
        : null
    }
    className="text-textprimary flex mt-8 gap-4 items-center text-[20px] cursor-pointer hover:bg-bgHover hover:text-bgPrimary p-2 rounded-md"
    key={cat.title}
  >
    <span className="text-[25px] ">{cat.icon}</span>
    <span className="flex text-[20px] justify-between items-center gap-0 w-full">
      {cat.title}
      {cat.list ? (
        openSub ? (
          <MdKeyboardArrowDown onClick={() => setOpenSub(!openSub)} />
        ) : (
          <MdKeyboardArrowRight
            onClick={() => setOpenSub(!openSub)}
          />
        )
      ) : null}
    </span>
  </li>
  {cat.list &&
    openSub &&
    cat.list.map((item) => <Menulink item={item} key={item.title} />)}
    </>
  )
}

export default SidebarLi