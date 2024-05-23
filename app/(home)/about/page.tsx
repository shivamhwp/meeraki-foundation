import Image from "next/image";
export default function About() {
  return (
    <div className="flex w-full h-full justify-between gap-16  max-md:flex-col pt-8 ">
      <div className=" xl:w-1/2 lg:w-1/2  min-md:w-full  ">
        <img
          alt="what is meerkai"
          src="https://utfs.io/f/900468c7-245b-4ca6-a3c2-c3b2e34879d8-e1o8t0.jpg"
        />
      </div>
      <div className=" xl:w-1/2 lg:w-1/2  text-lg  md:w-full pb-16 ">
        Meeraki is a non-governmental organization committed to making a
        positive impact on society by addressing various social, environmental,
        or humanitarian issues. Our goal is to provide assistance, support, and
        resources to communities in need, regardless of the specific nature of
        the challenges we face. We aim to be versatile, adaptable, and
        responsive to the ever-changing needs of those we serve, working towards
        creating a better and more equitable world. We have already undertaken
        several initiatives, including providing education to children in slums,
        conducting food drives, distributing masks, clothes, and blankets to the
        homeless, and working towards protecting mongrels. Looking ahead, we
        aspire to take on more substantial projects and extend our efforts to
        reach a broader community, aiming to create lasting change and uplift
        the lives of those in need.
      </div>
    </div>
  );
}
