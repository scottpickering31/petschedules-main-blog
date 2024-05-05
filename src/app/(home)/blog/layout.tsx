import type { Metadata } from "next";
import "../../globals.css";
import HomeNavContainer from "@/components/Homepage/HomepageNavigation/HomeNavContainer";

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
    <div>
      <header>
        <HomeNavContainer />
      </header>
      {children}
    </div>
  );
}
