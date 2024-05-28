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
        <h1 className="text-3xl"> Log in to your account</h1>
        <div className="my-5 flex flex-nowrap gap-2">
          <p>Don't have an account?</p>
          <Link href="/register" className="underline font-bold text-blue-500">
            Sign up here
          </Link>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col items-center">
            <p>Login with Google</p>
          </div>
          <p className="text-center p-5 text-xxs text-gray-400">
            Or with email and password
          </p>
          <div className="flex flex-col">
            <label htmlFor="email" className="font-bold">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="rounded-xl text-xl p-2"
            />
          </div>
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
