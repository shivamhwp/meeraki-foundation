"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { HamIcon } from "./ham-icon";

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  return (
    <div className="text-black py-8 font-bold xl:text-2xl lg:text-xl text-lg  flex h-24 justify-between items-center ">
      <div className="flex gap-4 items-center justify-center">
        <div
          className="min-md:hidden cursor-pointer"
          onClick={() => {
            console.log("clicked");
            setIsOpen(!isOpen);
          }}
        >
          <HamIcon />
        </div>
        <Link href={"/"}>Meeraki Foundation</Link>
      </div>
      <div className="flex justify-center  items-center gap-4">
        <div className="flex gap-4 h-full w-full justify-center items-center ">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="hover:text-[#EE7223] cursor-pointer max-sm:hidden max-md:hidden"
            >
              <Link
                href={item.url}
                className={path === `${item.url}` ? "text-[#EE7223]" : ""}
              >
                {item.name}
              </Link>
            </div>
          ))}
          <div className="rounded-full  border-[#524c42] border   bg-black text-[#E2DFD0] px-4 py-2.5 hover:text-black hover:bg-[#FFF4ED] hover:cursor-pointer ">
            <Link href="" target="_blank">
              Donate
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const navItems = [
  {
    id: 1,
    name: "About us",
    url: "/about",
  },
  {
    id: 2,
    name: "Our Impact",
    url: "/impact",
  },
  {
    id: 3,
    name: "Volunteer",
    url: "https://docs.google.com/forms/d/1CZv6ZwbXq3UdLvGXXFi5f3SI9wNTd2jqCtdsWIGW0Zw/viewform?edit_requested=true",
  },
  {
    id: 4,
    name: "Blog",
    url: "/blog",
  },
];
export default TopNav;
