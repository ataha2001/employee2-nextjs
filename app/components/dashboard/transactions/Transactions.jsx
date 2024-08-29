import Image from "next/image";

const Transactions = async () => {
  // done color = #afd6ee75
  // cancell  color = #f7737375

  return (
    <div className="bg-bgSoft p-[20px] rounded-md">
      <h2 className="mb-[20px] font-extralight text-xl text-textSoft">
        Last Transactions
      </h2>
      <table className="w-full ">
        <thead className="">
          <tr className="">
            <td className="p-[10px]">Name</td>
            <td className="p-[10px]">Status</td>
            <td className="p-[10px]">Date</td>
            <td className="p-[10px]">Amount</td>
          </tr>
        </thead>
        <tbody className="">
          <tr className=" hover:bg-[#2e374a] ">
            <td className="">
              <div className="flex items-center gap-[10px] p-2">
                <Image
                  src={"/user.png"}
                  width={40}
                  height={40}
                  alt="user image"
                  className="object-cover rounded-full"
                />
                Ashraf Taha
              </div>
            </td>
            <td className="">
              <span className="rounded-md p-[5px] text-white bg-[#f7cb7375]">
                Pending
              </span>
            </td>
            <td className="">24.08.2024</td>
            <td className="">$ 500</td>
          </tr>

          <tr className="hover:bg-[#2e374a]">
            <td className="">
              <div className="flex items-center gap-[10px] p-2">
                <Image
                  src={"/user.png"}
                  width={40}
                  height={40}
                  alt="user image"
                  className="object-cover rounded-full"
                />
                Rehab Ashraf
              </div>
            </td>
            <td className="">
              <span className="rounded-md p-[5px] text-white bg-[#afd6ee75]">
                Done
              </span>
            </td>
            <td className="">20.08.2024</td>
            <td className="">$ 100</td>
          </tr>

          <tr className="hover:bg-[#2e374a]">
            <td className="">
              <div className="flex items-center gap-[10px] p-2">
                <Image
                  src={"/user.png"}
                  width={40}
                  height={40}
                  alt="user image"
                  className="object-cover rounded-full"
                />
                Ashraf Taha
              </div>
            </td>
            <td className="">
              <span className="rounded-md p-[5px] text-white bg-[#f7cb7375]">
                Pending
              </span>
            </td>
            <td className="">24.08.2024</td>
            <td className="">$ 500</td>
          </tr>

          <tr className="hover:bg-[#2e374a]">
            <td className="">
              <div className="flex items-center gap-[10px] p-2">
                <Image
                  src={"/user.png"}
                  width={40}
                  height={40}
                  alt="user image"
                  className="object-cover rounded-full"
                />
                Aya Ashraf
              </div>
            </td>
            <td className="">
              <span className="rounded-md p-[5px] text-white bg-[#f7737375]">
                Cancell
              </span>
            </td>
            <td className="">01.08.2024</td>
            <td className="">$ 50</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
// <table className="w-full table-auto">
// <thead className="">
//   <tr className="">
//     <td className="p-[10px]">Name</td>
//     <td className="p-[10px]">Status</td>
//     <td className="p-[10px]">Date</td>
//     <td className="p-[10px]">Amount</td>
//   </tr>
// </thead>
// <tbody className="">
//   <tr className=" hover:bg-[#2e374a]">
//     <td className="">
//       <div className="flex items-center gap-[10px]">
//         <Image
//           src={"/user.png"}
//           width={40}
//           height={40}
//           alt="user image"
//           className="object-cover rounded-full"
//         />
//         Ashraf Taha
//       </div>
//     </td>
//     <td className="">
//       <span className="rounded-md p-[5px] text-white bg-[#f7cb7375]">Pending</span>
//     </td>
//     <td className="">24.08.2024</td>
//     <td className="">$ 500</td>
//   </tr>

//   <tr className="hover:bg-[#2e374a]">
//     <td className="">
//       <div className="flex items-center gap-[10px]">
//         <Image
//           src={"/user.png"}
//           width={30}
//           height={30}
//           alt="user image"
//           className="object-cover rounded-full"
//         />
//         Rehab Ashraf
//       </div>
//     </td>
//     <td className="">
//       <span className="rounded-md p-[5px] text-white bg-[#afd6ee75]">Done</span>
//     </td>
//     <td className="">20.08.2024</td>
//     <td className="">$ 100</td>
//   </tr>

//   <tr className="hover:bg-[#2e374a]">
//     <td className="">
//       <div className="flex items-center gap-[10px]">
//         <Image
//           src={"/user.png"}
//           width={30}
//           height={30}
//           alt="user image"
//           className="object-cover rounded-full"
//         />
//         Ashraf Taha
//       </div>
//     </td>
//     <td className="">
//       <span className="rounded-md p-[5px] text-white bg-[#f7cb7375]">Pending</span>
//     </td>
//     <td className="">24.08.2024</td>
//     <td className="">$ 500</td>
//   </tr>

//   <tr className="hover:bg-[#2e374a]">
//     <td className="">
//       <div className="flex items-center gap-[10px]">
//         <Image
//           src={"/user.png"}
//           width={30}
//           height={30}
//           alt="user image"
//           className="object-cover rounded-full"
//         />
//         Aya Ashraf
//       </div>
//     </td>
//     <td className="">
//       <span className="rounded-md p-[5px] text-white bg-[#f7737375]">Cancell</span>
//     </td>
//     <td className="">01.08.2024</td>
//     <td className="">$ 50</td>
//   </tr>
// </tbody>
// </table>
