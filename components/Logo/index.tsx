/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const CollegeLogo = () => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <div id="containe">
        <div id="navBar"></div>
      </div>
      <div className="z-40">
        <img
          src="/images/SNUC-white.png"
          alt="SNUC"
          className="w-[100px] top-5 lg:w-[180px] absolute md:top-20 left-2"
        />
        <img
            src="/images/SSN-white.png"
            alt="SSN"
            className="mr-14 inline-block w-[70px] lg:w-[120px] absolute top-[1rem] md:top-[4.25rem] right-2 md:mr-0"
          />
        <Link href="/">
          <img
            src="/images/instinctsLogo1.png"
            alt="SNUC"
            className="w-16 h-16 mt-[-10px] md:w-20 md:h-20 md:mt-[-20px] z-50 relative md:top-[4.5rem]"
          />
        </Link>
        <div className="absolute text-white top-3 right-10 sm:text-xl md:text-2xl">
          <div className="relative right-30 top-2">
            <Link
<<<<<<< Updated upstream
              href="/events"
              className="sm:hidden lg:inline-block mx-2 md:mx-6 hover:font-black hover:shadow-2xl hover:scale-110 font-medium font-title text-2xl shimmer1"
=======
              href="/"
              className="hidden lg:inline-block mx-2 md:mx-6 hover:font-black hover:shadow-2xl hover:scale-110 font-medium text-2xl glow"
>>>>>>> Stashed changes
            >
              Events
            </Link>
            <Link
              href="/about"
<<<<<<< Updated upstream
              className="sm:hidden lg:inline-block mx-2 md:mx-6 hover:font-black hover:shadow-2xl hover:scale-110 font-medium font-title text-2xl shimmer1"
=======
              className="hidden lg:inline-block mx-2 md:mx-6 hover:font-black hover:shadow-2xl hover:scale-110 font-medium text-2xl glow"
>>>>>>> Stashed changes
            >
              About
            </Link>
            <Link
              href="/schedule"
<<<<<<< Updated upstream
              className="sm:hidden lg:inline-block mx-2 md:mx-6 hover:font-black hover:shadow-2xl hover:scale-110 font-medium font-title text-2xl shimmer1"
=======
              className="hidden lg:inline-block mx-2 md:mx-6 hover:font-black hover:shadow-2xl hover:scale-110 font-medium text-2xl glow"
>>>>>>> Stashed changes
            >
              Schedule
            </Link>
            <Link
<<<<<<< Updated upstream
              href="/contact"
              className="sm:hidden lg:inline-block mx-2 md:mx-6 hover:font-black hover:shadow-2xl hover:scale-110 font-medium font-title text-2xl shimmer1"
=======
              href="/events"
              className="hidden lg:inline-block mx-2 md:mx-6 hover:font-black hover:shadow-2xl hover:scale-110 font-medium text-2xl glow"
>>>>>>> Stashed changes
            >
              Contact
            </Link>
            <Link
              href="/sponsors"
<<<<<<< Updated upstream
              className="sm:hidden lg:inline-block mx-2 md:mx-6 hover:font-black hover:shadow-2xl hover:scale-110 font-medium font-title text-2xl shimmer1"
=======
              className="hidden lg:inline-block mx-2 md:mx-6 hover:font-black hover:shadow-2xl hover:scale-110 font-medium text-2xl glow"
>>>>>>> Stashed changes
            >
              Sponsors
            </Link>
            <Link
              href="/gallery"
<<<<<<< Updated upstream
              className="sm:hidden lg:inline-block mx-2 md:mx-6 hover:font-black hover:shadow-2xl hover:scale-110 font-medium font-title text-2xl shimmer1"
            >
              Gallery
            </Link>
=======
              className="hidden lg:inline-block mx-2 md:mx-6 hover:font-black hover:shadow-2xl hover:scale-110 font-medium text-2xl glow"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="hidden lg:inline-block mx-2 md:mx-6 hover:font-black hover:shadow-2xl hover:scale-110 font-medium text-2xl glow"
            >
              Contact Us
            </Link>
>>>>>>> Stashed changes
          </div>
        </div>
      </div>
      <div
        className="absolute cursor-pointer md:hidden lg:hidden top-3 right-5 z-50"
        onClick={() => {
          setNav(!nav);
          document.querySelector(".animm")?.classList.add("anim");
          document.querySelectorAll(".animm_li").forEach((li, idx) => {
            console.log(idx);
            setTimeout(() => {
              li.classList.add("anim_li");
            }, 900 + idx * 200);
          });
        }}
      >
        <AiOutlineMenu size={30} color="white" />
      </div>
      <div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gradient-to-b from-[#ae8141] to-gray-800 bg-blend-color-dodge p-10 ease-in duration-500 z-50"
              : "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gradient-to-b from-[#ae8141] to-gray-800 bg-blend-color-dodge p-10 ease-in duration-500 z-50"
          }
        >
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center justify-between">
              <img
                src="/images/SNUC-white.png"
                alt="SNUC"
                className="w-[100px] mb-10"
              />
              <img src="/images/SSN-white.png" alt="SSN" className="w-[70px]" />
            </div>
            <div
              onClick={() => {
                setNav(!nav);
                document.querySelector(".animm")?.classList.remove("anim");
                document.querySelectorAll(".animm_li").forEach((li) => {
                  li.classList.remove("anim_li");
                });
              }}
              className="p-3 bg-white rounded-full shadow-lg cursor-pointer shadow-gray-800 "
            >
              <AiOutlineClose color="black" />
            </div>
          </div>
          <div className="my-4 border-b border-gray-300"></div>
          <div className="flex-col py-4  animm">
            <ul className="uppercase ">
              <Link href="/events">
                <li
                  className="py-4 font-medium text-white animm_li opacity-0"
                  onClick={() => setNav(false)}
                >
                  Events
                </li>
              </Link>
              <Link href="/about">
                <li
                  className="py-4 font-medium text-white  animm_li opacity-0"
                  onClick={() => setNav(false)}
                >
                  About
                </li>
              </Link>
              <Link href="/schedule">
                <li
                  className="py-4 font-medium text-white  animm_li opacity-0"
                  onClick={() => setNav(false)}
                >
                  Schedule
                </li>
              </Link>
              <Link href="/contact">
                <li
                  className="py-4 font-medium text-white  animm_li opacity-0"
                  onClick={() => setNav(false)}
                >
                  Contact
                </li>
              </Link>
              <Link href="/sponsors">
                <li
                  className="py-4 font-medium text-white  animm_li opacity-0"
                  onClick={() => setNav(false)}
                >
                  Sponsors
                </li>
              </Link>
              <Link href="/gallery">
                <li
                  className="py-4 font-medium text-white  animm_li opacity-0"
                  onClick={() => setNav(false)}
                >
                  Gallery
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
