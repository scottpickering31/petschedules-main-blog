import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "PetSchedules - The Pet Scheduling Application",
  description: "Scheduling Application for All of your Pets Needs",
};

export default function PricingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-sandy">{children}</body>
    </html>
  );
}
