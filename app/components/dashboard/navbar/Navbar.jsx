"use client";
import { usePathname } from "next/navigation";
import React from "react";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-between items-center bg-bgSoft p-[20px] rounded-md">
      <div className="text-textSoft font-bold capitalize">{pathname.split("/").pop()}</div>
      <div className="flex gap-[20px] items-center">
        <div className="flex items-center gap-2 bg-[#2e374a] p-[10px] text-textSoft rounded-md">
          <MdSearch />
          <input type="text" placeholder="Search..." className="rounded-sm bg-[#2e374a] text-textPrimary outline-none " />
        </div>
        <div className="flex gap-2 text-textprimary">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
