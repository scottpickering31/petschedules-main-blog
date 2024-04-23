import Link from "next/link";
import React from "react";

const SignIn = () => {
  return (
    <div>
      Sign In
      <p>
        Not registered?<Link href="/register">Sign Up</Link>
      </p>
    </div>
  );
};

export default SignIn;
