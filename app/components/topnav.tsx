"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { HamIcon } from "./ham-icon";

const TopNav = () => {
  const [nav, setNav] = useState(false);
  const path = usePathname();
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-black py-8 font-bold xl:text-2xl lg:text-xl text-lg flex h-24 justify-between z-50 items-center ">
      <div className="flex gap-4 items-center justify-center">
        <div
          className="xl:hidden lg:hidden md:hidden flex cursor-pointer"
          onClick={() => {
            handleNav();
          }}
        >
          {nav ? "" : <HamIcon />}
          <ul
            className={
              nav
                ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-black bg-[#FFF4ED] ease-in-out duration-500"
                : "ease-in-out w-[60%] duration-200 fixed top-0 bottom-0 left-[-100%]"
            }
          >
            <h1 className="w-full text-2xl font-bold text-black m-4">← back</h1>
            {navItems.map((item) => (
              <Link href={item.url} key={item.id}>
                <li className="p-4 border-b  hover:bg-[#EE7223] duration-300 hover:text-black cursor-pointer border-gray-600">
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <Link href={"/"}>
          <img
            className="cursor-pointer flex w-96  "
            src="https://utfs.io/f/76b53499-75f6-4c55-8afc-47f3a51f5dd1-h44821.jpeg"
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex justify-center  items-center gap-4 ">
        <div className="flex gap-4 h-full w-full justify-center items-center ">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="hover:text-[#EE7223] cursor-pointer max-sm:hidden max-md:hidden "
            >
              <Link
                href={item.url}
                className={path === `${item.url}` ? "text-[#EE7223]" : ""}
              >
                {item.name}
              </Link>
            </div>
          ))}
          <div className="rounded-full  border-[#524c42] hover:border   bg-[#EE7223] text-white px-4 py-2.5 hover:text-black hover:bg-[#FFF4ED] hover:cursor-pointer ">
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
    url: "https://docs.google.com/forms/d/1CZv6ZwbXq3UdLvGXXFi5f3SI9wNTd2jqCtdsWIGW0Zw",
  },
  {
    id: 4,
    name: "Blog",
    url: "/blog",
  },
  {
    id: 5,
    name: "Upcoming Events",
    url: "/upcoming-events",
  },
];
export default TopNav;
