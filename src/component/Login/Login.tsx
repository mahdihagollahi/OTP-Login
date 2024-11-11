"use client";
import React, { Fragment, useState, useEffect } from "react";
import BackImage from "@/assent/Img/Login/BackImage.svg";
import Star from "@/assent/Img/Login/StarLogo.svg";
import Image from "next/image";
import Link from "next/link";
import InputNumber from "./InputNumber";

const Login: React.FC = () => {
  const [phone, setPhone] = useState<string>("");
  const [error, setError] = useState<boolean>(true);

  useEffect(() => {
    if (phone.length < 1) {
      setError(false);
    } else if (phone.length < 12) {
      setError(true);
    } else {
      setError(false);
    }
  }, [phone]);

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!error) {
      window.location.href = "/otp";
    }
  };

  return (
    <Fragment>
      <div className="px-8 duration-300 xl:px-20 mt-8">
        <div className="flex justify-between items-center">
          <div className="cursor-pointer">
            <Link href="/">
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
          <h1 className="font-bold text-3xl text-[#000000]">Login</h1>
          <p className="font-normal text-base text-[#000000B2] mt-5 xl:mt-10 whitespace-normal xl:leading-5 xl:whitespace-nowrap">
            Please confirm your country code and enter your phone number.
          </p>
          <InputNumber
            phone={phone}
            setPhone={setPhone}
            error={error}
            setError={setError}
          />
          <div
            className={`${
              error
                ? "xl:mt-[23%] xl:mb-2 mb-4 mt-[340px] flex justify-between duration-300 items-center"
                : "xl:mt-[27%] xl:mb-2 mb-4 mt-96 flex justify-between duration-300 items-center"
            }`}
          >
            <p className="font-normal text-base text-[#000000]">
              Sync Contacts
            </p>
            <div>
              <input
                type="checkbox"
                className="toggle checked:[--tglbg:black] checked:bg-white checked:hover:bg-white"
                defaultChecked
              />
            </div>
          </div>
          <div
            className={`${
              error
                ? " mr-20 xl:ml-[28%] md:ml-[26.5%] sm:ml-[26.5%] xs:ml-[36.5%]"
                : " mr-20 xl:ml-[28%] md:ml-[26.5%] sm:ml-[26.5%] xs:ml-[36.5%]"
            }`}
          >
            <button
              onClick={handleSubmit}
              className="whitespace-nowrap flex justify-center text-white font-semibold text-base leading-5 text-center bg-[#000000] py-4 px-36 xl:px-[33%] md:px-60  rounded-xl hover:opacity-85"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
