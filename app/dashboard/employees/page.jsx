import Pagination from "@/app/components/dashboard/pagination/Pagination";
import Search from "@/app/components/dashboard/search/Search";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const userData=[
  {
      name:'John Doe',
      email : 'john@gmail.com',
      createdAt: "30-08-2024",
      role : 'User',
      status : 'Active',
      image:"user.png",
},
{
  name:'Ashraf Taha',
  email : 'ashraf@gmail.com',
  createdAt: "25-08-2024",
  role : 'Admin',
  status : 'Active',
  image:"user.png",
},
{
name:'Rehab Taha',
email : 'rehab@gmail.com',
createdAt: "19-08-2024",
role : 'User',
status : 'Active',
image:"user.png",
},

]

const EmployeesPage = () => {
  return (
    <div className="bg-bgSoft p-5 rounded-md mt-5">
    <div className="flex items-center justify-between">
      <Search placeholder={"Search for a User..."} />
      <Link href={"/dashboard/employees/add"}>
        <button className="p-2.5 bg-[#5d57c9] text-textPrimary rounded-md border-none">
          Add New
        </button>
      </Link>
    </div>
    <table className="w-full mt-5">
      <thead className="">
        <tr className="">
          <td className="py-5">Name</td>
          <td className="py-5">Email</td>
          <td className="py-5">Created At</td>
          <td className="py-5">Role</td>
          <td className="py-5">Status</td>
          <td className="py-5">Action</td>
        </tr>
      </thead>
      <tbody>
      {userData && userData.map((user)=>(
          <tr className="hover:bg-[#2e374a] rounded-md">
          <td className="py-5 px-2">
            <div className="flex gap-2.5 items-center">
              <Image
              //   src={"/user.png"}
                src={`/${user.image}`}
                width={40}
                height={40}
                alt="user image"
                
                className="object-cover rounded-full"
              />
              {user.name}
            </div>
          </td>
          <td className="py-5 px-2">{user.email}</td>
          <td className="py-5 px-2">{user.createdAt}</td>
          <td className="py-5 px-2">{user.role}</td>
          <td className="py-5 px-2">{user.status}</td>
          <td className="py-5 px-2 flex gap-5">
            <div className=""></div>
            <div className="flex gap-5">
              <Link href={"/dashboard/employees/test"}>
                <button className="py-1.5 px-2.5 rounded-md bg-teal-500 text-textPrimary border-none ">View</button>
              </Link>                
              <button className="py-1.5 px-2.5 rounded-md bg-red-700 text-textPrimary border-none ">Delete</button>
            </div>
          </td>
        </tr>
      ))}
       
      </tbody>
    </table>
    <Pagination />
  </div>
  )
}

export default EmployeesPage