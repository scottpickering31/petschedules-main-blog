import type { Metadata } from "next";
import Footer from "@/components/Shared/Footer/Footer";
import "../globals.css";

export const metadata: Metadata = {
  title: "PetSchedules - Where Pets and Plans Purrfectly Align",
  description: "The Pet Scheduling Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
