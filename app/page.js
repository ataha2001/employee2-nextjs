import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
    <Link href={'/dashboard'} className="w-full">
    <span className=" font-semibold text-2xl text-center items-center flex justify-center mt-40">click to Login to the Project</span>
    <span className=" text-textSoft  text-center items-center flex justify-center mt-2">
      usename : ali
    </span>
    <span className="text-textSoft text-center items-center flex justify-center mt-2">
      password: 123456
    </span>
    
    </Link>
    </div>
  );
}
