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
            <Image src={Star} width={46} height={44} alt="Star Logo" />
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
          <Timer/>
          <div
            className={`${
              error
                ? "xl:mt-56 mt-64 duration-300 mr-20 xl:ml-[28%]"
                : "xl:mt-[259px] mt-[350px] duration-300 mr-20 xl:ml-[28%]"
            }`}
          >

            
            <button
              onClick={handleSubmit}
              
              className="whitespace-nowrap flex justify-center text-white font-semibold text-base leading-5 text-center bg-[#000000] py-4 px-36 xl:px-[33%] rounded-xl hover:opacity-85"
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
