import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CloudinaryImage from "./cloudinary-image";
import { CarouselItems } from "../utils/data";

function HomeCarousel() {
  return (
    <div className="flex max-lg:flex-col  items-center justify-center w-full">
      <div className="text-6xl w-1/3 items-center flex justify-center font-bold max-md:pb-6">
        Events
      </div>
      <Carousel className="w-2/3 flex max-lg:w-full  max-lg:p-4  hover:shadow-2xl shadow-xl border-black rounded-lg ">
        <CarouselContent>
          {CarouselItems.map((item) => {
            return (
              <CarouselItem
                key={item.id}
                className=" justify-center items-center flex xl:border-r-4 lg:border-r-4 border-[#FF8A43] xl:hover:broder-r-8 lg:hover:border-r-8"
              >
                <Link
                  href={item.eventLink}
                  className=" flex hover:cursor-pointer max-md:flex-col-reverse w-full items-center justify-center max-md:py-6  max-md:gap-6"
                >
                  <CloudinaryImage
                    src={item.imagePublicId}
                    height="400"
                    width="400"
                    sizes="100vw"
                    alt="lovely people"
                    className="rounded-lg object-contain w-1/2 max-md:w-full h-full min-md:pl-4"
                  />
                  <div className="w-1/2 flex flex-col items-center justify-center gap-8 text-[#fff4ed] p-8 ">
                    <div className="text-4xl lg:text-3xl font-bold text-center text-black max-sm:line-clamp-3  ">
                      {item.name}
                    </div>
                    <div className="text-2xl lg:text-xl px-4 text-black text-center max-md:hidden ">
                      {item.descripton}
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className=" max-md:hidden" />
        <CarouselNext className="max-md:hidden" />
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
