import Link from "next/link";
import React from "react";

function HomeSearchDefault() {
  const NavStyles = "hover:text-fawn";
  return (
    <div className="w-full flex items-center justify-around gap-5 p-5">
      <Link href="/products" className={NavStyles}>
        Products
      </Link>
      <Link href="/pricing" className={NavStyles}>
        Pricing
      </Link>
      <Link href="/blog" className={NavStyles}>
        Blog
      </Link>
      <Link href="/about" className={NavStyles}>
        About
      </Link>
      <Link href="/frequently-asked-questions" className={NavStyles}>
        FAQ
      </Link>
    </div>
  );
}

export default HomeSearchDefault;
