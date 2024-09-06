// 'use server'
import React from "react";
import { authenticate } from "../lib/actions";
import LoginForm from "../components/login/loginForm/LoginForm";

const LoginPage = (formData) => {

//   const handleForm=async(formData)=>{
//     'use server'
//     console.log(formData);
//     authenticate(formData)
    
// }
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
