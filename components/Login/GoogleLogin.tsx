import { supabase } from '@/src/lib/client'
import {redirect } from "next/navigation"
import { headers } from "next/headers";

function GoogleLogin() {

    const origin = headers().get('origin')

    const googleLogin = async () => {
        const {data, error} = await supabase.auth.signInWithOAuth({
           provider:'google',
           options: {
             redirectTo: `${origin}`
           }
         })
     
         if (error) {
           console.log(error)
         } else {
           return redirect(data.url)
         }
       }

  return (
    <div>
        <button className="bg-white rounded-2xl" onClick={googleLogin}>Sign in with Google</button>
    </div>
  )
}

export default GoogleLogin