import Pagination from "@/app/components/dashboard/pagination/Pagination";
import Search from "@/app/components/dashboard/search/Search";
import { deleteUser } from "@/app/lib/actions";
import { fetchUsers } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const UsersPage = async ({ searchParams }) => {
  const q = searchParams?.q || ""
  const page = searchParams?.page || 1
  const {count, users} = await fetchUsers(q, page)
  // console.log('users= ', users);
  
    
  return (
    <div className="bg-bgSoft p-5 rounded-md mt-5">
      <div className="flex items-center justify-between">
        <Search placeholder={"Search for a User..."} />
        <Link href={"/dashboard/users/add"}>
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
        {users && users.map((user)=>(
            <tr className="hover:bg-[#2e374a] rounded-md" key={user._id}>
            <td className="py-5 px-2">
              <div className="flex gap-2.5 items-center">
                <Image
                //   src={"/user.png"}
                  // src={`/${user.image}`}
                  src={user.img || "/user.png"}
                  width={40}
                  height={40}
                  alt="user image"
                  
                  className="object-cover rounded-full"
                />
                {user.username}
              </div>
            </td>
            <td className="py-5 px-2">{user.email}</td>
            <td className="py-5 px-2">{user.createdAt?.toString().slice(4,16)}</td>
            <td className="py-5 px-2">{user.isAdmin ? "Admin" : "Client"}</td>
            <td className="py-5 px-2">{user.isActive ? "Active" : "Passive"}</td>
            <td className="py-5 px-2 flex gap-5">
              <div className=""></div>
              <div className="flex gap-5">
                <Link href={`/dashboard/users/${user.id}`}>
                  <button className="py-1.5 px-2.5 rounded-md bg-teal-500 text-textPrimary border-none ">View</button>
                </Link>      
                <form action={deleteUser} className="">
                      <input type="hidden" name="id" value={user.id} />          
                <button className="py-1.5 px-2.5 rounded-md bg-red-700 text-textPrimary border-none ">Delete</button>
              </form>
                </div>
            </td>
          </tr>
        ))}
         
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default UsersPage;
// const userData=[
//         {
//             name:'John Doe',
//             email : 'john@gmail.com',
//             createdAt: "30-08-2024",
//             role : 'Admin',
//             status : 'Active',
//             image:"user.png",
//     },
//     {
//         name:'Ashraf Taha',
//         email : 'ashraf@gmail.com',
//         createdAt: "25-08-2024",
//         role : 'Admin',
//         status : 'Active',
//         image:"user.png",
// },
// {
//     name:'Rehab Taha',
//     email : 'rehab@gmail.com',
//     createdAt: "19-08-2024",
//     role : 'User',
//     status : 'Active',
//     image:"user.png",
// },

// ]