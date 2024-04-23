import type { Metadata } from "next";
import Navbar from "@/components/Shared/Navbar/Navbar";
import "../../globals.css";

export const metadata: Metadata = {
  title: "PetSchedules - Blog",
  description: "Blog",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="pt-5">
      <Navbar />
      {children}
    </div>
  );
}
