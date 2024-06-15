import Link from "next/link";

function Footer() {
  return (
    <footer className="h-64 max-sm:h-48 max-sm:48 mb-8 bg-transprent w-full text-black  rounded-lg flex  justify-between max-sm:flex-col py-4 max:sm=px-8 px-16 items-center gsp-4 shadow-xl">
      <div className=" text-4xl items-center justify-center flex font-bold max-sm:text-center">
        Spread the word 🧡
      </div>
      <div className=" flex text-2xl gap-6 items-center justify-center font-medium max-md:text-xl">
        <Link
          href="https://instagram.com/meerakifoundation"
          target="_blank"
          className="hover:text-[#EE7223] hover:cursor-pointer"
        >
          Instagram
        </Link>
        <div className="hover:text-[#EE7223] hover:cursor-pointer">Twitter</div>
        <Link
          href="https://www.linkedin.com/in/meeraki-foundation-135187313/"
          className="hover:text-[#EE7223] hover:cursor-pointer"
        >
          Linkedin
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
