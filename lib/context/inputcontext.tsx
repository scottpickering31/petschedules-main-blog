"use client";
import { createContext, useState, useContext } from "react";

const AppContext = createContext<any>(0);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [input, setInput] = useState("");
  const [step, setStep] = useState(1);

  return (
    <AppContext.Provider value={{ input, setInput, step, setStep }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
