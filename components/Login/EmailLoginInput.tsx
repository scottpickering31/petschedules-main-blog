// components/Login/EmailLoginInput.tsx
"use client";
import { useAppContext } from "@/lib/context/inputcontext";
import React, { useState } from "react";

function EmailLoginInput() {
  const { input, setInput, setStep } = useAppContext();
  const [email, setEmail] = useState(input);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleNext = () => {
    if (validateEmail(email)) {
      setInput(email);
      setStep(2);
    } else {
      setError("Please enter a valid email address.");
    }
  };

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
        autoFocus
        className="rounded-xl text-lg p-3 w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {error && <p className="text-red-500">{error}</p>}
      <button
        onClick={handleNext}
        className="bg-gray-300 py-1 px-8 rounded-lg border-gray-400 border text-gray-500 mt-2"
      >
        Next
      </button>
    </div>
  );
}

export default EmailLoginInput;
