import "../globals.css";
import { Inter } from "next/font/google";
import TopNav from "../components/topnav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#FFF4ED]">
      <body className={inter.className}>
        <div className="bg-[#FFF4ED] xl:px-24 lg:px-20 p-4 md:px-12 w-screen flex flex-col h-screen">
          <TopNav />
          {children}
        </div>
      </body>
    </html>
  );
}
