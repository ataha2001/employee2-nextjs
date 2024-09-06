'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { MdSearch } from "react-icons/md";
import {useDebouncedCallback } from 'use-debounce'

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams()
  const {replace} = useRouter()
  const pathname = usePathname()

  const handleSearch = useDebouncedCallback( (e)=>{
    const params = new URLSearchParams(searchParams)
    if(e.target.value){
      e.target.value.length > 2 && params.set('q',e.target.value)
    }else {
      params.delete('q')
    }
    replace(`${pathname}?${params}`)
    

  },100)

  return (
    <div className="flex items-center gap-2 max-w-max bg-[#2e374a] p-[10px] text-textSoft rounded-md">
      <MdSearch size={20} />
      <input
        type="text"
        placeholder={placeholder}
        className="rounded-sm bg-[#2e374a] text-textPrimary outline-none"
        onChange={handleSearch}
      />
    </div>
    
  );
};

export default Search;
