import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Cross from "../../public/svg/NavIcons/Cross.svg";

function SignupModalForm() {
  const pathname = usePathname();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  const inputClasses =
    "text-center border-2 border-gray-300 rounded-2xl text-2xl";

  return (
    <>
      <Link href={pathname} scroll={false}>
        <Image
          src={Cross}
          alt="Cross"
          width={25}
          height={25}
          className="float-right"
        />
      </Link>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col h-small justify-around px-10"
      >
        <h1 className="text-3xl">Sign Up</h1>
        <p className="text-center">Google Sign Up</p>
        <input
          type="text"
          placeholder="First name*"
          {...register("First name", { required: true, maxLength: 80 })}
          className={inputClasses}
        />
        <input
          type="text"
          placeholder="Last name*"
          {...register("Last name", { required: true, maxLength: 100 })}
          className={inputClasses}
        />

        <input
          type="text"
          placeholder="Company"
          {...register}
          className={inputClasses}
        />
        <input
          type="text"
          placeholder="Email*"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          className={inputClasses}
        />
        <input
          type="password"
          placeholder="Password*"
          {...register("Password", {
            required: true,
            min: 8,
            maxLength: 20,
            pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
          })}
          className={inputClasses}
        />

        <input
          type="submit"
          className={`bg-red-500 text-white p-2 cursor-pointer ${inputClasses}`}
        />
      </form>
      <div className="flex items-center flex-col p-2">
        <p className="my-2">Already have an account?</p>
        <Link href="/login" scroll={false} className="text-lg">
          Sign In
        </Link>
      </div>
    </>
  );
}

export default SignupModalForm;
