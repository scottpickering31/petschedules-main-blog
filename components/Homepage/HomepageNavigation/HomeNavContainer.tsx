"use client";

import HomeSearch from "./HomeSearch";
import HomeSearchDisplay from "./HomeSearchDisplay";
import React, { useState } from "react";
import Link from "next/link";
import HomeSearchDefault from "./HomeSearchDefault";
import BlackButton from "@/components/Shared/Buttons/LinkButtons/BlackButton";

function HomeNavContainer() {
  const [search, setSearch] = useState(false);

  const setOpacity = search ? "hover:opacity-100" : "opacity-90";

  return (
    <div className="flex justify-center items-center mb-48">
    <nav
      className={`w-11/12 drop-shadow-2xl mt-10 rounded-2xl top-0 flex items-center bg-slate-100 fixed z-50 hover:opacity-100 ${setOpacity}`}
    >
      <div className="px-5 w-1/3 items-center flex">
        <Link href="/" className="text-2xl font-bold h-full">
          BLA BLA BLA
        </Link>
      </div>
      <div className="w-full">
        {search ? <HomeSearchDisplay search={search} /> : <HomeSearchDefault />}
      </div>
      <div className="flex flex-row w-2/3 h-full items-center justify-end gap-6 p-5">
        <HomeSearch setSearch={setSearch} search={search} />
        <Link href="/support" className="hover:text-fawn">
          Support
        </Link>
        <Link href="/login" className="hover:text-fawn">
          Sign In
        </Link>
        <div className="px-3 hover:scale-110">
          <BlackButton href="/register" text="Sign Up"/>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default HomeNavContainer;
