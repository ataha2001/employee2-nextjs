import Image from "next/image";
import React from "react";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className="fixed">
      <div className="relative bg-gradient-to-t from-[#182237] to-[#253352] px-2 pt-5 pb-0 rounded-md mb-5">
        <div className="absolute w-[50%] h-[50%] right-0 bottom-0">
          <Image src={"/astronaut.png"} fill alt="card image" className="object-contain opacity-20" />
        </div>
        <div className="flex gap-5 flex-col w-full">
          <span className="font-bold">🔥 Available Now</span>
          <h3 className="font-medium size-3 text-textSoft w-full">
            How to use the new version of the admin dashboard?
          </h3>
          <span className="mt-7">Takes 4 minutes to learn</span>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className="p-3 flex items-center gap-3 bg-[#5d57c9] text-textPrimary border-none rounded-md max-w-max">
            <MdPlayCircleFilled size={25} />
            Watch
          </button>
        </div>
      </div>
      <div className="relative bg-gradient-to-t from-[#182237] to-[#253352] px-2 pt-5 pb-0 rounded-md mb-5">
        
        <div className="flex gap-5 flex-col w-full">
          <span className="font-bold">🚀 Coming Soon</span>
          <h3 className="font-medium size-3 text-textSoft w-full">
          New server actions are available, partial pre-rendering is coming
          up!
          </h3>
          <span className="mt-7">Boost your productivity</span>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className="p-3 flex items-center gap-3 bg-[#5d57c9] text-textPrimary border-none rounded-md max-w-max">
            <MdReadMore size={25} />
            Learn
          </button>
        </div>
      </div>
      
      
    </div>
  );
};

export default Rightbar;
