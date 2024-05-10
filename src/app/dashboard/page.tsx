import { logout } from "../(auth)/actions/actions"
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

async function Dashboard() {

  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/')
  }

  return (
    <div className="flex justify-center h-screen items-center flex-col gap-6">
        <div className="w-3/4 bg-white rounded-2xl border p-10 text-4xl">
        Welcome to <span className="font-bold underline underline-offset-8">{data.user.email}</span> dashboard!
        </div>
        <div className="w-5/6 bg-white text-center rounded-full drop-shadow-2xl font-bold">
          What would you like to view?
        </div>
        <form action={logout}>
        <button type="submit">
          Logout
        </button>
        </form>
    </div>
  )
}

export default Dashboard