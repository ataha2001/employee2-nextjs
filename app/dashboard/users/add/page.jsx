import { addUser } from '@/app/lib/actions'
import React from 'react'

const AddUserPage = () => {
  return (
    <div className='bg-bgSoft p-5 rounded-md mt-5'>
      <form action={addUser} className="flex flex-wrap justify-between bg-bgSoft text-textPrimary rounded-md">
        <input type="text" placeholder='username' name='username' required className='p-7 w-[45%] bg-bgPrimary mb-7 border-2 border-gray-700 rounded-md focus:bg-bgPrimary' />
        <input type="email" placeholder='email' name='email' required className='p-7 w-[45%] bg-bgPrimary mb-7 border-2 border-gray-700 rounded-md' />
        <input type="password" placeholder='password' name='password' required className='p-7 w-[45%] bg-bgPrimary mb-7 border-2 border-gray-700 rounded-md' />
        <input type="text" placeholder='phone' name='phone'  className='p-7 w-[45%] bg-bgPrimary mb-7 border-2 border-gray-700 rounded-md' />
        <select name="isAdmin" id="isAdmin" className="p-7 w-[45%] bg-bgPrimary mb-7 border-2 border-gray-700">
          <option value={false}  className="bg-bgPrimary">Is Admin</option>
          <option value={true} className="bg-bgPrimary">Yes</option>
          <option value={false} className="bg-bgPrimary">No</option>
        </select>
        <select name="isActive" id="isActive" className="p-7 w-[45%] bg-bgPrimary mb-7 border-2 border-gray-700">
          <option value={true} className="bg-bgPrimary">Is Active</option>
          <option value={true} className="bg-bgPrimary">Yes</option>
          <option value={false} className="bg-bgPrimary">No</option>
        </select>
        <textarea name="address" id="address" rows="8" placeholder='Address' className='p-7 bg-bgPrimary mb-7 border-2 border-gray-700 w-full'></textarea>
        <button className="w-full bg-teal-500 p-8 rounded-xl text-textPrimary border-none hover:bg-teal-400 hover:text-bgPrimary" type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddUserPage