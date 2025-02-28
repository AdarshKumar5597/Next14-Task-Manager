import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Task Manager",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container w-[1536px] mx-auto pl-[50px] pr-[50px] min-h-[100vh] flex flex-col justify-between">
          <Navbar/>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
