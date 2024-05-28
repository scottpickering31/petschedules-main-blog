"use client";
import React from "react";

function PasswordLoginInput() {
  return (
    <div>
      <label htmlFor="password" className="font-bold">
        Password:
      </label>
      <input
        id="password"
        name="password"
        type="password"
        required
        className="rounded-xl text-lg p-3 w-full"
      />
    </div>
  );
}

export default PasswordLoginInput;
