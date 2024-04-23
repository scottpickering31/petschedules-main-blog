"use client";

import HomeSearch from "./HomeSearch";
import HomeSearchDisplay from "./HomeSearchDisplay";
import React, { useState } from "react";
import Link from "next/link";

function HomeNavContainer() {
  const [search, setSearch] = useState(false);

  const setOpacity = search ? "hover:opacity-100" : "opacity-80";

  return (
    <nav
      className={`w-full border-b border-black flex h-15 items-center bg-slate-100 fixed z-20 hover:opacity-100 ${setOpacity}`}
    >
      <div className="p-5 w-1/3 items-center flex">
        <Link href="/" className="text-2xl font-bold h-full">
          PET SCHEDULES
        </Link>
      </div>
      <div className="w-full">
        {search ? <HomeSearchDisplay search={search} /> : null}
      </div>
      <div className="flex flex-row w-1/2 h-full items-center justify-end gap-5 p-5">
        <HomeSearch setSearch={setSearch} search={search} />
        <Link href="/" className="hover:text-fawn">
          Support
        </Link>
        <Link href="/signin" className="hover:text-fawn">
          Sign In
        </Link>
        <div className="px-5">
          <Link
            href="/register"
            className="border border-black p-5 rounded-full bg-fawn "
          >
            Try Free
          </Link>
        </div>
      </div>
    </nav>
  );
}

/*  //        sandy: "#F5AC72",
        sandyBrown: "#F2AA7E",
        space: "#3E4E50",
        apricot: "#F2B600",
        fawn: "#F8817F", */

export default HomeNavContainer;
