// pages/login.tsx
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import EmailLoginInput from "@/components/Login/EmailLoginInput";
import PasswordLoginInput from "@/components/Login/PasswordLoginInput";
import { useAppContext } from "@/lib/context/inputcontext";
import { checkUser } from "@/lib/auth/checkUser";

export default function LoginPage() {
  const router = useRouter();
  const { step } = useAppContext();

  useEffect(() => {
    async function fetchUser() {
      const { user, error } = await checkUser();
      if (user) {
        router.push("/dashboard");
      } else if (error) {
        console.error(error);
      }
    }

    fetchUser();
  }, [router]);

  return (
    <div className="flex flex-col h-screen">
      <form className="bg-slate-200 h-full w-1/4 p-5">
        <div className="flex items-center justify-center mb-10">
          <Image
            src="/PetSchedulesTeam/PetSchedulesTeam.png"
            alt="PetSchedules Logo"
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
          <p className="text-center p-5 text-sm text-gray-400">
            Or with email and password
          </p>
          <div className="flex flex-col">
            {step === 1 ? <EmailLoginInput /> : <PasswordLoginInput />}
          </div>
          <div className="mt-10">
            <button className="bg-gray-300 py-1 px-8 rounded-lg border-gray-400 border text-gray-500">
              {step === 1 ? "Next" : "Log In"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
