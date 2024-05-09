"use client"
import { supabase } from "@/src/lib/supabase";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function SignUp() {
  const [data, setData] = useState<{
    email: string,
    password: string,
  }>({
    email: "",
    password: ""
  })

  const router = useRouter()

  const signup = async () => {
    try {
      let {data: dataUser, error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password
      })
      if (dataUser.user) {
        console.log(dataUser)
      } 
              
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e: any) => {
    const {name, value} = e.target;
    setData((prev: any) => ({
      ...prev,
      [name]: value,
    }))
  }

  return <div>
    <div className="grid">
      <label>Email</label>
      <input type="text" name="email" value={data?.email} onChange={handleChange} />
    </div> 
    <div className="grid">
      <label>Password</label>
      <input type="password" name="password" value={data?.password} onChange={handleChange} />
    </div>
    <div>
      <button onClick={signup}>Sign Up</button>
    </div>
  </div>;
}

export default SignUp;
