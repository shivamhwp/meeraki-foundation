import "../globals.css";
import { Inter } from "next/font/google";
import TopNav from "../components/topnav";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
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
        {draftMode().isEnabled && <VisualEditing />}
        <div className="bg-[#FFF4ED] xl:px-24 lg:px-20 px-4 md:px-12 w-screen flex flex-col h-screen">
          <TopNav />
          {children}
        </div>
        {draftMode().isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}
