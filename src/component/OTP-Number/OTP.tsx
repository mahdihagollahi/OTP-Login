"use client";
import React, { Fragment, useState } from "react";
import BackImage from "@/assent/Img/Login/BackImage.svg";
import Star from "@/assent/Img/Login/StarLogo.svg";
import Image from "next/image";
import Link from "next/link";
import OTPInput from "./OTPInput";
import Timer from "./Timer";
const OTP = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState<boolean>(false);
  const handleSubmit = () => {
    if (otp !== "25017") {
      setError(true);
    }
  };
  return (
    <Fragment>
      <div className="px-8 duration-300 xl:px-20 mt-8">
        <div className="flex justify-between items-center">
          <div className="cursor-pointer">
            <Link href="/login">
              <Image src={BackImage} width={39} height={39} alt="Back" />
            </Link>
          </div>
          <div>
          <Link href="/">
            <Image src={Star} width={46} height={44} alt="Star Logo" />
            </Link>
          </div>
        </div>
        <div className="mt-16">
          <h1 className="font-bold text-3xl text-[#000000]">Enter code</h1>
          <p className="font-normal text-base text-[#000000B2] mt-5 xl:mt-10 whitespace-normal xl:leading-5 xl:whitespace-nowrap">
            We’ve sent an SMS with an activation code to your phone +98 912 658
            9842
          </p>
          <div className="flex justify-center items-center mt-40">
            <OTPInput
              error={error}
              setError={setError}
              otp={otp}
              setOtp={setOtp}
            />
          </div>

          <div
            className={`${
              error
                ? "xl:mt-[174px] mt-56 duration-300 mr-20 xl:ml-[28%] md:ml-[26.5%] sm:ml-[26.5%] xs:ml-[36.5%]"
                : "xl:mt-[209px] mt-[250px] duration-300 mr-20 xl:ml-[28%] md:ml-[26.5%] sm:ml-[26.5%] xs:ml-[36.5%]"
            }`}
          >
            <div className="  xl:mr-[30%] ml-20 sm:-ml-5  md:-ml-40 xl:ml-0 ">
            <Timer />
            </div>
          

            <button
              onClick={handleSubmit}
              className="whitespace-nowrap flex justify-center md:justify-center sm:justify-center  text-white font-semibold text-base leading-5 text-center bg-[#000000] py-4 px-36 xl:px-[33%] md:px-60 rounded-xl hover:opacity-85"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default OTP;
