import { addProduct } from '@/app/lib/actions'
import React from 'react'

const AddProductPage = () => {
  return (
    <div className='bg-bgSoft p-5 rounded-md mt-5'>
      <form action={addProduct} className="flex flex-wrap justify-between bg-bgSoft text-textPrimary rounded-md">
        <input type="text" placeholder='title' name='title' required className='p-7 w-[45%] bg-bgPrimary mb-7 border-2 border-gray-700 rounded-md' />
        <select name="cat" id="cat" className="p-7 w-[45%] bg-bgPrimary mb-7 border-2 border-gray-700">
          <option value="general" className="bg-bgPrimary">Chosee a Category</option>
          <option value="kitchen" className="bg-bgPrimary">Kitchen</option>
          <option value="phone" className="bg-bgPrimary">Phone</option>
          <option value="computer" className="bg-bgPrimary">Computer</option>
        </select>
        <input type="number" placeholder='price' name='price' className='p-7 w-[45%] bg-bgPrimary mb-7 border-2 border-gray-700'/>
        <input type="number" placeholder='stock' name='stock' className='p-7 w-[45%] bg-bgPrimary mb-7 border-2 border-gray-700'/>
        <input type="text" placeholder='color' name='color' className='p-7 w-[45%] bg-bgPrimary mb-7 border-2 border-gray-700'/>
        <input type="text" placeholder='size' name='size' className='p-7 w-[45%] bg-bgPrimary mb-7' border-2 border-gray-700/>
        <textarea name="desc" id="desc" rows="8" placeholder='description' className='p-7 bg-bgPrimary mb-7 border-2 border-gray-700 w-full'></textarea>
        <button className="w-full bg-teal-500 p-8 rounded-xl text-textPrimary border-none hover:bg-teal-400 hover:text-bgPrimary" type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddProductPage