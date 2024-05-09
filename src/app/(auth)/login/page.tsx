"use client"
import { supabase } from "@/src/lib/supabase";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Login() {
  const [data, setData] = useState<{
    email: string,
    password: string,
  }>({
    email: "",
    password: ""
  })

  const router = useRouter()

  const login = async () => {
    try {
      let {data: dataUser, error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password
      })
      if (dataUser.user !== null) {
        router.push("/dashboard")
        console.log(dataUser)
      } else {
        router.refresh()
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
      <button onClick={login}>Login</button>
    </div>
  </div>;
}

export default Login;
