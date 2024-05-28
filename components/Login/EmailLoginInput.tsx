"use client";
import React, { useEffect, useRef } from "react";

function EmailLoginInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <label htmlFor="email" className="font-bold">
        Email address
      </label>
      <input
        id="email"
        name="email"
        type="email"
        required
        className="rounded-xl text-lg p-3 w-full"
        ref={inputRef}
      />
    </div>
  );
}

export default EmailLoginInput;
