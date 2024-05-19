import { login } from "../actions/actions";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    console.log(error);
  } else {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col h-screen">
      <form className="bg-slate-200 h-full w-1/4 p-5">
        <div className="flex items-center justify-center mb-10">
          <Image
            src="/PetSchedulesTeam/PetSchedulesTeam.png"
            alt="awdawd"
            width={250}
            height={250}
          />
        </div>
        <h1 className="text-4xl"> Log in to your account</h1>
        <div className="my-5 flex flex-nowrap gap-2">
          <p>Don't have an account?</p>
          <Link href="/register" className="underline font-bold">
            Sign up here
          </Link>
        </div>
        <div className="gap-5 flex flex-col">
          <p>Login with Google</p>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="rounded-xl"
          />
          {/* <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="rounded-xl"
          /> */}
          <button formAction={login}>Log in</button>
        </div>
      </form>
    </div>
  );
}
