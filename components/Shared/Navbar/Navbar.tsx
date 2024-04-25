import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/svg/logo.svg";

function Navbar() {
  return (
    <nav className="flex flex-row items-center mx-5 px-10">
      <div className="mr-10">
        <Image src={Logo} alt="Logo" className="h-36 w-36" />
      </div>
      <div className="w-5/6 bg-white rounded-2xl p-10">
        <ul className="flex flex-row justify-between p-2">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/signin">Sign In</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
