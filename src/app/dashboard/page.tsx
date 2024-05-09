function Dashboard() {
  return (
    <div className="flex justify-center h-screen items-center flex-col gap-6">
        <div className="w-3/4 bg-white rounded-2xl border p-10 text-4xl">
        Welcome to <span className="font-bold underline underline-offset-8">USERS</span> dashboard!
        </div>
        <div className="w-5/6 bg-white text-center rounded-full drop-shadow-2xl font-bold">
          What would you like to view?
        </div>
    </div>
  )
}

export default Dashboard