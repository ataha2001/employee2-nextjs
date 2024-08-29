import Link from "next/link";
import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  const positive = true;
  const item={
    title:'User',
    count: '50',
    path:"/",
    iconColor :'text-red-300',
    icon: <MdSupervisedUserCircle size={30} />,
  }
  return (
    <div className="bg-bgSoft hover:bg-[#2e374a] w-full p-4 shadow-xl   rounded-md flex flex-col gap-[20px] ">
      <div className="">
        <h2 className={`font-light ${item.iconColor}`}>{item.title}</h2>
      </div>
      <div className="">
        <h1 className={`text-center text-6xl ${item.iconColor}`}>50</h1>
      </div>
      <div className={`flex justify-between ${item.iconColor}`}>
        <Link href={'/'}  className={'text-blue-300'}>Show All</Link>
        <span className={`${item.iconColor}`}>
        {item.icon}
        </span>
      </div>
    </div>
  );
};

export default Card;
// {`${positive ? 'bg-green-500' : 'text-red-500'}`}

// <div className="bg-bgPrimary w-full p-[20px] rounded-md flex gap-[20px] cursor-pointer hover:bg-[#2e374a]">
//       <div className="">
//         <MdSupervisedUserCircle size={24} />
//       </div>
//       <div className="flex flex-col gap-[20px]">
//         <span className="font-bold">Total Users</span>
//         <span className="size-[24px] font-medium">10.72</span>
//         <span className="size-[4px] font-light text-textSoft flex-nowrap ">
//           <span className="text-yellow-500"> 12% </span> <span> more than previous week</span>
//         </span>
//       </div>
//     </div  >
