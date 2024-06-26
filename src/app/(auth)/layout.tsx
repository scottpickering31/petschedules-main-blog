import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "PetSchedules - The Pet Scheduling Application",
  description: "Scheduling Application for All of your Pets Needs",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
