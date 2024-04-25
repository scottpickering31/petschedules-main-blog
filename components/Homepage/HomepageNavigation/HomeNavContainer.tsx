"use client";

import HomeSearch from "./HomeSearch";
import HomeSearchDisplay from "./HomeSearchDisplay";
import React, { useState } from "react";
import Link from "next/link";
import HomeSearchDefault from "./HomeSearchDefault";

function HomeNavContainer() {
  const [search, setSearch] = useState(false);

  const setOpacity = search ? "hover:opacity-100" : "opacity-90";

  return (
    <nav
      className={`w-full border-b border-black flex h-15 items-center bg-slate-100 fixed z-20 hover:opacity-100 ${setOpacity}`}
    >
      <div className="px-5 w-1/3 items-center flex">
        <Link href="/" className="text-2xl font-bold h-full">
          PET SCHEDULES
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
        <div className="px-5 hover:text-white hover:scale-110">
          <Link
            href="/register"
            className="border-4 border-gray-500 border-spacing-3 p-4 rounded-full bg-fawn font-bold"
          >
            TRY FREE
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default HomeNavContainer;
