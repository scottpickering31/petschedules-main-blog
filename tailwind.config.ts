import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        sandy: "#F5AC72",
        sandyBrown: "#F2AA7E",
        space: "#3E4E50",
        apricot: "#F2B600",
        fawn: "#F8817F",
      },
      textColor: {
        sandy: "#F5AC72",
        sandyBrown: "#F2AA7E",
        space: "#3E4E50",
        apricot: "#F2B600",
        fawn: "#F8817F",
      },
      borderColor: {
        sandy: "#F5AC72",
        sandyBrown: "#F2AA7E",
        space: "#3E4E50",
        apricot: "#F2B600",
        fawn: "#F8817F",
      },
      height: {
        tiny: "30vh",
        little: "50vh",
        small: "70vh",
        medium: "90vh",
        large: "110vh",
        extral: "125vh",
        tariff: "6.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
