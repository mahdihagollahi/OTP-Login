import React, { Fragment } from "react";
import LandingLogo from "@/assent/Img/Landing/LandingLogo.svg";
import Image from "next/image";
import Link from "next/link";
const Landing = () => {
  return (
    <Fragment>
      <div className="flex  flex-col mt-20 justify-center items-center">
        <Image src={LandingLogo} width={315} height={273} alt="" className="" />
        <h1 className=" whitespace-nowrap font-bold mt-20 text-3xl text-[#000000] leading-10">
          Explore the app
        </h1>
        <p className="font-light px-3 text-lg leading-8 text-[#000000B2] whitespace-normal text-center xl:leading-5 xl:whitespace-nowrap mt-10">
          Now your finances are in one place and always under control
        </p>

        <Link href="/login" className="mt-20 whitespace-nowrap text-white font-semibold text-base leading-5 text-center bg-[#000000] py-4 px-36 xl:px-[13%] rounded-xl hover:opacity-85 ">
          <button >
         Log in
          </button>
          </Link>
 
        <button className="mt-5 whitespace-nowrap text-black font-semibold text-base leading-5 text-center bg-[#ffff] border border-[#747474] py-4 px-[24.5%]  xl:px-[10%] rounded-xl hover:opacity-85 ">
          Create account
        </button>
      </div>
    </Fragment>
  );
};

export default Landing;
