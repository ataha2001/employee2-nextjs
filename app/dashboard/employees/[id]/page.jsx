import Image from "next/image";
import React from "react";

const SingleEmployeePage = () => {
  return (
    <div className="flex gap-12 mt-5">
      <div className="flex basis-1/4 flex-col gap-5 max-h-[400px] bg-bgSoft p-5 rounded-md font-bold text-textSoft">
        <div className="relative w-full h-[300px] rounded-md overflow-hidden">
          <Image src={"/user.png"} fill className="object-fill" />
        </div>
        John Doe
      </div>
      <div className="flex basis-3/4 flex-col gap-5 bg-bgSoft p-5 rounded-md">
        <form action="" method="" className=" flex flex-col">
          <label className="font-light">Username</label>
          <input
            type="text"
            name="username"
            placeholder="John Doe"
            className="p-5 mt-2.5 border-2 border-gray-500 rounded-md bg-bgPrimary text-textPrimary"
          />
          <label className="font-light mt-2.5">Email</label>
          <input
            type="email"
            name="email"
            placeholder="john@gmail.com"
            className="p-5 mt-2.5 border-2 border-gray-500 rounded-md bg-bgPrimary text-textPrimary"
          />
          <label className="font-light mt-2.5">Password</label>
          <input
            type="password"
            name="username"
            placeholder=""
            className="p-5 mt-2.5 border-2 border-gray-500 rounded-md bg-bgPrimary text-textPrimary"
          />
          <label className="font-light mt-2.5">Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="01032633371"
            className="p-5 mt-2.5 border-2 border-gray-500 rounded-md bg-bgPrimary text-textPrimary"
          />
          <label className="font-light mt-2.5">Address</label>
          <textarea
            name="address"
            placeholder="Egypt"
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
                <option value={true} className="">
                  Yes
                </option>
                <option value={false} className="">
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
                <option value={true} className="">
                  Yes
                </option>
                <option value={false} className="">
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

export default SingleEmployeePage;
