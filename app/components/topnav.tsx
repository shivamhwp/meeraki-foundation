"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TopNav = () => {
  const path = usePathname();

  return (
    <div className="text-black py-8 font-bold xl:text-2xl lg:text-xl text-lg flex h-24 justify-between items-center ">
      <div>
        <Link href={"/"}>Meeraki Foundation</Link>
      </div>
      <div className="flex justify-center  items-center gap-4">
        <div className="flex gap-4 h-full w-full justify-center items-center ">
          {navItems.map((item) => (
            <div key={item.id} className="hover:text-[#EE7223] cursor-pointer">
              <Link
                href={item.url}
                className={path === `${item.url}` ? "text-[#EE7223]" : ""}
              >
                {" "}
                {item.name}
              </Link>
            </div>
          ))}
          <div className="rounded-full  border-[#524c42] border   bg-black text-[#E2DFD0] px-4 py-2.5 hover:text-black hover:bg-[#FFF4ED] hover:cursor-pointer ">
            <Link
              href="https://buy.stripe.com/test_cN25m912d1W5eje8ww"
              target="_blank"
            >
              Donate
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;

const navItems = [
  {
    id: 1,
    name: "About us",
    url: "/about",
    isActive: false,
  },
  {
    id: 2,
    name: "Our Impact",
    url: "/impact",
    isActive: false,
  },
  {
    id: 3,
    name: "Volunteer with us",
    url: "/volunteer",
    isActive: false,
  },
  {
    id: 4,
    name: "Blog",
    url: "/blog",
    isActive: false,
  },
];
