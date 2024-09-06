import { updateUser } from "@/app/lib/actions";
import { fetchUser } from "@/app/lib/data";
import Image from "next/image";
import React from "react";

const SingleUSerPage = async ({params}) => {
  const {id} = params
  const user = await fetchUser(id)
  return (
    <div className="flex gap-12 mt-5">
      <div className="flex basis-1/4 flex-col gap-5 max-h-[400px] bg-bgSoft p-5 rounded-md font-bold text-textSoft">
        <div className="relative w-full h-[300px] rounded-md overflow-hidden">
          <Image src={user.img || "/user.png"} fill className="object-fill" />
        </div>
        {user.username}
      </div>
      <div className="flex basis-3/4 flex-col gap-5 bg-bgSoft p-5 rounded-md">
        <form action={updateUser} method="" className=" flex flex-col">
        <input type="hidden" name="id" value={user.id} />
          <label className="font-light">Username</label>
          <input
            type="text"
            name="username"
            placeholder={user.username}
            // value={user.username}
            // autoComplete="new-username"
            className="p-5 mt-2.5 border-2 border-gray-500 rounded-md bg-bgPrimary text-textPrimary"
          />
          <label className="font-light mt-2.5">Email</label>
          <input
            type="email"
            name="email"
            placeholder={user.email}
            className="p-5 mt-2.5 border-2 border-gray-500 rounded-md bg-bgPrimary text-textPrimary"
          />
          <label className="font-light mt-2.5">Password</label>
          <input
            type="password"
            name="password"
            autocomplete = "new-password"
            placeholder={user.password}
            className="p-5 mt-2.5 border-2 border-gray-500 rounded-md bg-bgPrimary text-textPrimary"
          />
          <label className="font-light mt-2.5">Phone</label>
          <input
            type="text"
            name="phone"
            placeholder={user.phone}
            className="p-5 mt-2.5 border-2 border-gray-500 rounded-md bg-bgPrimary text-textPrimary"
          />
          <label className="font-light mt-2.5">Address</label>
          <textarea
            name="address"
            placeholder={user.address}
            className="p-5 mt-2.5 border-2 border-gray-500 rounded-md bg-bgPrimary text-textPrimary"
          />
          <div className="flex gap-5 items-center mt-2.5">
            <div className="flex flex-col w-1/2">
              <label className="font-light mt-2.5">Is Admin</label>
              <select
                name="isAdmin"
                id="isAdmin"
                className="p-5 mt-2.5 border-2 border-gray-500 rounded-md bg-bgPrimary text-textPrimary"
              >
                <option value={true} selected={user.isAdmin} className="">
                  Yes
                </option>
                <option value={false} selected={!user.isAdmin} className="">
                  No
                </option>
              </select>
            </div>

            <div className="flex flex-col w-1/2">
              <label>Is Active</label>
              <select
                name="isActive"
                id="isActive"
                className="p-5 mt-2.5 border-2 border-gray-500 rounded-md bg-bgPrimary text-textPrimary"
              >
                <option value={true} selected={user.isActive} className="">
                  Yes
                </option>
                <option value={false} selected={!user.isActive} className="">
                  No
                </option>
              </select>
            </div>
          </div>
          <button className="mt-5 p-5 w-full bg-teal-500 text-textPrimary border-nonr rounded-md hover:bg-teal-300 hover:text-bgPrimary ">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUSerPage;
