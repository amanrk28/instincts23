import { CollegeLogo, Footer, PageHead } from "components";
import React from "react";
import Script from "next/script";
import Image from "next/image";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel';

export default function Events() {
  return (
    <>
    <div className="">
      <PageHead />
      <div className="flex flex-col items-center justify-center min-h-screen p-2 md:p-4 m-auto text-white font-main">
        <CollegeLogo />
        <div className="w-[100vw] h-[100vh] flex justify-center">
          <Carousel interval={2500} infiniteLoop showThumbs={false} autoPlay className="slider mt-16 lg:mt-32">
            <div className="image">
              <img
                src={"/images/instincts/instincts0.jpg"}
                alt="ssnsnucinstincts"
                className="img"
              />
            </div>
            <div className="image">
              <img
                src={"/images/instincts/instincts2.jpg"}
                alt="ssnsnucinstincts"
                className="img"
              />
            </div>
            <div className="image">
              <img
                src={"/images/instincts/instincts3.jpg"}
                alt="ssnsnucinstincts"
                className="img"
              />
            </div>
            <div className="image">
              <img
                src={"/images/instincts/instincts4.jpg"}
                alt="ssnsnucinstincts"
                className="img"

              />
            </div>
            <div className="image">
              <img
                src={"/images/instincts/instincts5.jpg"}
                alt="ssnsnucinstincts"
                className="img"

              />
            </div>

            <div className="image">
              <img
                src={"/images/instincts/instincts6.jpg"}
                alt="ssnsnucinstincts"
                className="img"
              />
            </div>
            <div className="image">
              <img
                src={"/images/instincts/instincts7.jpg"}
                alt="ssnsnucinstincts"
                className="img"
              />
            </div>
            <div className="image">
              <img
                src={"/images/instincts/instincts8.jpg"}
                alt="ssnsnucinstincts"
                className="img"
              />
            </div>
            <div className="image">
              <img
                src={"/images/instincts/instincts9.jpg"}
                alt="ssnsnucinstincts"
                className="img"
              />
            </div>
            <div className="image">
              <img
                src={"/images/instincts/instincts10.jpg"}
                alt="ssnsnucinstincts"
                className="img"
              />
            </div>
            <div className="image">
              <img
                src={"/images/instincts/instincts11.jpg"}
                alt="ssnsnucinstincts"
                className="img"
              />
            </div>
            <div className="image">
              <img
                src={"/images/instincts/instincts12.jpg"}
                alt="ssnsnucinstincts"
                className="img"
              />
            </div>
            <div className="image">
              <img
                src={"/images/instincts/instincts13.jpg"}
                alt="ssnsnucinstincts"
                className="img"
              />
            </div>
            <div className="image">
              <img
                src={"/images/instincts/instincts14.jpg"}
                alt="ssnsnucinstincts"
                className="img"
              />
            </div>
            <div className="image">
              <img
                src={"/images/instincts/instincts15.jpg"}
                alt="ssnsnucinstincts"
                className="img"
              />
            </div>
            <div className="image">
              <img
                src={"/images/instincts/instincts16.jpg"}
                alt="ssnsnucinstincts"
                className="img"
              />
            </div>
            <div className="image">
              <img
                src={"/images/instincts/instincts17.jpg"}
                alt="ssnsnucinstincts"
                className="img"
              />
            </div>

            <div className="image">
              <img
                src={"/images/instincts/instincts18.jpg"}
                alt="ssnsnucinstincts"
                className="img"
              />
            </div>
            <div className="image">
              <img
                src={"/images/instincts/instincts19.jpg"}
                alt="ssnsnucinstincts"
                className="img"
              />
            </div>
            <div className="image">
              <img
                src={"/images/instincts/instincts20.jpg"}
                alt="ssnsnucinstincts"
                className="img"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
