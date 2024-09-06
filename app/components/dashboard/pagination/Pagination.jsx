'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from 'react'

const Pagination = ({count}) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type)=>{
    type === 'prev'
      ? params.set('page', parseInt(page) - 1)
      : params.set('page', parseInt(page) + 1)
      replace(`${pathname}?${params}`)
  }

  return (
    <div className='p-2.5 flex justify-between'>
        <button className="py-1.5 px-2.5 rounded-md disabled:cursor-not-allowed text-bgPrimary bg-textPrimary disabled:bg-textSoft" 
        disabled={!hasPrev} 
        onClick={()=> handleChangePage('prev')}
        >Previous</button>
        <button className="py-1.5 px-2.5 rounded-md disabled:cursor-not-allowed text-bgPrimary bg-textPrimary disabled:bg-textSoft"
        disabled={!hasNext}
        onClick={()=> handleChangePage('next')}
        >Next</button>
    </div>
  )
}

export default Pagination