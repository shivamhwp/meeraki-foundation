import Link from "next/link";
import CloudinaryVideoPlayer from "../components/cloudinary-video";
import Footer from "../components/footer";
import HomeCarousel from "../components/carousel";
function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto z-0 gap-16  bg-fixed">
      <HeroSection />
      <OurStory />
      <HomeCarousel />
      <CelebrateComponent />
      <Footer />
    </div>
  );
}

export default Home;

function HeroSection() {
  return (
    <div className="w-full xl:h-full pt-8 flex max-sm:flex-col-reverse z-0">
      <div className="xl:w-1/3 lg:w-1/3 w-full flex flex-col h-auto gap-8 xl:pt-8">
        <div className="xl:text-6xl md:text-3xl text-2xl max-sm:pt-4 font-bold max-sm:flex max-sm:w-full max-sm:items-center max-sm:justify-center max-sm:text-center">
          For <br />
          tomorrow&apos;s future.
        </div>
        <Link
          className="rounded-full xl:text-lg border-[#524c42] border  font-medium  flex items-center justify-center max-sm:w-full w-64 h-16 bg-black text-[#E2DFD0] px-6 py-4 hover:text-black hover:bg-[#FFF4ED] hover:cursor-pointer"
          href="https://docs.google.com/forms/d/1CZv6ZwbXq3UdLvGXXFi5f3SI9wNTd2jqCtdsWIGW0Zw/viewform"
          target="_blank"
        >
          ♥︎ Yes, I want to help.
        </Link>
      </div>
      <div className="xl:w-2/3 lg:w-2/3 w-full  flex ">
        <CloudinaryVideoPlayer
          autoPlay={true}
          loop={true}
          muted={true}
          controlBar={false}
          className=" rounded-lg z-0"
          src="Independence-day-celebration/5_puv7s4"
          width="1920"
          height="1080"
        />
      </div>
    </div>
  );
}

function OurStory() {
  return (
    <div className=" h-auto p-8 max-sm:p-2  bg-black w-full rounded-xl flex gap-4 max-sm:flex-col">
      <div className="text-6xl  text-[#EE7223] font-bold w-1/3 max-sm:w-full flex items-center max-sm:pt-4 justify-center">
        Our Story
      </div>
      <div className="w-2/3 max-sm:w-full text-[#FFF4ED] px-2 max-sm:text-center max-sm:text-ellipsis ">
        Meeraki was born ten years ago, during one of those afternoons when you
        feel like you can achieve anything you set your mind to. The world. We
        all went along with our lives, stuck in an endless rat-race. Ten years
        passed by. Why come back to it now, you ask? Because Meeraki brings us
        solace. Because we knew no matter where we ended up, Meeraki was always
        there for us to come back to. It was here to stay. We bonded over our
        resolve to give back to our society, to contribute to its betterment.
        Against all odds, we manifested our dream into reality today. Getting it
        registered was a feat in itself, but running Meeraki is another ballgame
        altogether. It isn&apos;t going to be easy. But here we are anyway. Our
        purpose is not solely defined by the magnitude of the impact but by the
        intention and commitment we bring to our endeavors. We believe even the
        smallest gestures can spark inspiration, spread kindness, or offer
        support, ultimately making a difference in someone&apos;s life or in the
        world at large. If our efforts have made even the smallest positive
        impact, our purpose is fulfilled.
      </div>
    </div>
  );
}

function CelebrateComponent() {
  return (
    <div className="h-64 max-sm:h-24 max-sm:48   w-full text-[black] hover:text-[#EE7223] hover:cursor-pointer  rounded-lg flex max-sm:flex-col py-4 max:sm=px-8 px-16 items-center justify-center">
      <Link
        href="https://docs.google.com/forms/d/e/1FAIpQLSd_9segvv9NbVgFqAE4KzKNpCzEK380qoCIVNVgn_VjzcJjyg/viewform?embedded=true"
        target="_blank"
        className=" xl:text-5xl max-sm:text-2xl text-4xl lg:text-4xl items-center justify-center flex font-bold max-sm:text-center"
      >
        Celebrate your birthday with us 🎉 ↗
      </Link>
    </div>
  );
}
