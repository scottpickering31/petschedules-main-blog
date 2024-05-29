import type { Metadata } from "next";
import Footer from "@/components/Shared/Footer/Footer";
import "../globals.css";
import SignUpDialog from "@/components/Modals/signupdialog";
import { AppWrapper } from "@/lib/context/inputcontext";

export const metadata: Metadata = {
  title: "PetSchedules - Where Pets and Plans Purrfectly Align",
  description: "The Pet Scheduling Application",
};

export default function RootLayout({
  auth,
  children,
}: Readonly<{
  children: React.ReactNode;
  auth: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppWrapper>
        {children}
        {auth}
        </AppWrapper>
        <SignUpDialog />
        <Footer />
      </body>
    </html>
  );
}
