import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="Hero bg-local lg:flex lg:flex-col  items-center w-full pt-5 md:pt-3">
      <div className="lg:flex lg:flex-col mx-auto w-10/12  lg:my-20 lg:pb-0 md:py-20 pb-3">
        <div className="self-center">
          <h1 className="Title-1 font-semibold lg:text-6xl md:text-4xl sm:text-3xl text-sm text-center text-balance leading-40">
            Stand aware of
          </h1>
          <h1 className="Title-2 font-semibold lg:text-6xl md:text-4xl sm:text-3xl text-sm text-center text-balance leading-40 lg:my-3">
            accomplishments, <span>stay awake</span>
          </h1>
          <h1 className="Title-3 font-semibold lg:text-6xl md:text-4xl sm:text-3xl text-sm text-center text-balance leading-40">
            to achieve more.
          </h1>
        </div>
        <div className="lg:w-11/12 self-center lg:mt-5 mt-3">
          <p className="hero-text  lg:text-sm sm:text-xs font-medium text-center lg:w-4/6 mx-auto opacity-80">
            Our clients are companies, brands, and startups that keep the world
            going They treat diseases, move parcels, insure cars, process
            payments, create jobs, rent homes and publish news.{" "}
          </p>
        </div>
        <div className="w-40 lg:w-52 self-center bg-blue-600 rounded-full mt-5 lg:mt-10 mx-auto  py-3 lg:py-5 sm:py-4">
          <Link href="#">
            <p className="text-white text-center font-bold lg:text-base sm:text-xs text-xs ">
              Start a Project
            </p>
          </Link>
        </div>
      </div>
      <div className="flex justify-center flex-row py-5 ">
        <div className="basis-1/4">
          <p className="hero-text sm:text-xs w-14 sm:w-16 mx-auto">
            Trusted by Best Client{" "}
          </p>
        </div>
        <div className="basis-3/4 flex flex-row gap-3 justify-center">
          <div className="w-10 h-3 sm:w-20 sm:h-5   relative my-auto">
            <Image
              src="/brand1.png"
              alt="Yatech Logo"
              layout="fill"
              className=""
              priority
            />
          </div>
          <div className="w-12 h-3 sm:w-24 sm:h-5   relative my-auto">
            <Image
              src="/brand2.png"
              alt="Yatech Logo"
              layout="fill"
              className=""
              priority
            />
          </div>
          <div className="w-10 h-3 sm:w-20 sm:h-5   relative my-auto">
            <Image
              src="/brand3.png"
              alt="Yatech Logo"
              layout="fill"
              className=""
              priority
            />
          </div>
          <div className="w-10 h-3 sm:w-20 sm:h-5   relative my-auto">
            <Image
              src="/brand4.png"
              alt="Yatech Logo"
              layout="fill"
              className=""
              priority
            />
          </div>
          <div className="w-10 h-3 sm:w-20 sm:h-5   relative my-auto">
            <Image
              src="/brand5.png"
              alt="Yatech Logo"
              layout="fill"
              className=""
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
