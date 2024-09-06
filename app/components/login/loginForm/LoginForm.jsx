'use client'
import { authenticate } from "@/app/lib/actions"
// import { useState } from "react"
import { useFormState } from "react-dom";

const LoginForm = () => {
    // const [err, setErr] = useState()
    // const handleLogin = async (formData)=>{
    //     const data = await authenticate(formData)
    //     data.error && setErr(data.error)
    // }
    // other way how to use form state hook
    const [state, formAction, loading] = useFormState(authenticate, undefined);
    console.log('loading', loading );
    
  return (
    <form
        // action={authenticate}
        // action={handleLogin}
        action={formAction}
        className="bg-bgSoft p-12 rounded-lg w-[500px] h-[500px] flex flex-col gap-8 justify-center"
      >
        <h1 className="text-center text-6xl font-semibold">Login</h1>
        <input
          type="text"
          name="username"
          placeholder="username"
          autoComplete="off"
          className="p-7 border-2 rounded-md bg-bgPrimary border-gray-500 text-textPrimary"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          autocomplete="new-password"
          className="p-7 border-2 rounded-md bg-bgPrimary border-gray-500 text-textPrimary"
        />
        <button className="p-7 border-none rounded-md bg-teal-500 text-textPrimary font-semibold text-4xl hover:bg-teal-300 hover:text-bgPrimary">
          Login
        </button>
        <span className="text-red-400 text-center">
        {/*  {err && err} */}
        {state && state}
        </span>
        
      </form>
  )
}

export default LoginForm