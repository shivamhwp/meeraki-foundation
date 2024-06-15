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
      <NarrativeComponent />
      <CelebrateComponent />
      <Footer />
    </div>
  );
}

export default Home;

function HeroSection() {
  return (
    <div className="w-full xl:h-full pt-8 flex max-sm:flex-col-reverse z-0">
      <div className="xl:w-1/3 lg:w-1/3 w-full flex flex-col h-auto gap-16 xl:pt-8">
        <div className="xl:text-7xl md:text-3xl text-2xl max-sm:pt-4 font-bold max-sm:flex max-sm:w-full max-sm:items-center max-sm:justify-center max-sm:text-center">
          Passion in Action...
        </div>
        <Link
          className="rounded-full xl:text-lg border-[#524c42] hover:border  font-medium  flex items-center justify-center max-sm:w-full w-64 h-16 bg-[#EE7223] text-white px-6 py-4 hover:text-black hover:bg-[#FFF4ED] hover:cursor-pointer"
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
    <div className=" h-auto p-10 max-sm:p-2  bg-transparent  shadow-xl hover:shadow-2xl w-full rounded-xl flex gap-4 max-sm:flex-col border-l-4 border-[#FF8A43] lg:hover:border-l-8 xl:hover:border-l-8 ">
      <div className="text-6xl  text-black font-bold w-1/3 max-sm:w-full flex items-center max-sm:pt-4 justify-center">
        Our Story
      </div>
      <div className="w-2/3 max-sm:w-full text-black px-2 max-sm:text-center max-sm:text-ellipsis text-justify">
        <span>
          Ten years ago, in a classroom tucked away in the corner of our high
          school, we found ourselves deeply engrossed in a discussion. We talked
          about the disparities around the globe, the urgent problems of
          poverty, ignorance, and environmental destruction. Each of us felt a
          sense of responsibility, a desire to make a difference beyond our own
          lives. As we delved deeper into our conversation, an idea began to
          take shape—an idea that would later blossom into something far greater
          than we could have ever imagined. We dreamed of creating an
          organization that would address these issues head-on, an NGO that
          would bring hope and change to communities in need. Treaties were
          drawn, promises made. We eventually graduated high school and went
          down our own separate paths, but idea of Meeraki always brought us
          back together. With time, we grew sceptical, but we were unwilling to
          let go of our ‘childish dream’.
        </span>{" "}
        <br />
        <span className=" flex pt-2">
          The previous ten years were marked by cynicism as we battled our own
          anxieties and concerns, questioning whether we actually had it in us
          to make a difference in the world. Slowly but surely, our vision began
          to take shape. We organized fundraisers, volunteered in our
          communities, and sought out like-minded individuals. We were small,
          but we were determined. And then, after a decade of perseverence, our
          dream finally became a reality. We formally estb. our non-governmental
          organization, introducing initiatives to combat poverty, advance
          education, and safeguard the environment. Although our path had been
          difficult and drawn out, it had also been immensely fulfilling. As we
          stand together now, we know that our journey has only just begun.
          There are still many challenges ahead, still many lives to impact. But
          armed with our passion, our resilience, and our unwavering belief in
          the power of collective action, we are ready to face whatever the
          future holds.
        </span>
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

function NarrativeComponent() {
  return (
    <div className="flex max-sm:flex-col items-center gap-8 w-full shadow-xl hover:shadow-2xl xl:border-l-4 lg:border-l-4 max-sm:py-4 border-[#FF8A43] lg:hover:border-l-8 xl:hover:border-l-8 rounded-lg">
      <div className="w-1/2 max-sm:h-auto max-sm:w-full xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-bold text-center">
        The Meeraki <br /> Narrative !
      </div>
      <div className="w-1/2 max-sm:h-auto max-sm:w-full">
        <img src="https://utfs.io/f/bca3a270-821c-409c-9e41-4b35f6f0622a-8ur9b.23.41.jpeg" />
      </div>
    </div>
  );
}
