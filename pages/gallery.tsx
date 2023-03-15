import { CollegeLogo, Footer, PageHead } from "components";

import Head from "next/head";

interface IPageHead {
  title?: string;
  description?: string;
}

export const PageHead = ({
  title = "Gallery | SSN SNUC Instincts 2023",
  description = "Gallery of moments taken in previous Instincts kept here to hype them up!",
}: IPageHead) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/instinctsLogo.jpeg" />
    </Head>
  );
};

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
                alt="Students of SSN and SNUC performing a classical dance on stage"
                className="img"
              />
            </div>
            <div className="image">
              <img
                src={"/images/instincts/instincts2.jpg"}
                alt="Singer Andrea Jeremiah performing on previous cultural event"
                className="img"
              />
            </div>
            <div className="image">
              <img
                src={"/images/instincts/instincts3.jpg"}
                alt="Actor Jeyam Ravi observing events on stage"
                className="img"
              />
            </div>
            <div className="image">
              <img
                src={"/images/instincts/instincts4.jpg"}
                alt="Singer singing his heart out at Instincts"
                className="img"

              />
            </div>
            <div className="image">
              <img
                src={"/images/instincts/instincts5.jpg"}
                alt="KTM Biker shocasing his talents at Instincts"
                className="img"

              />
            </div>

            <div className="image">
              <img
                src={"/images/instincts/instincts6.jpg"}
                alt="Group of women posing for a picture with the Pro chancellor of SNUC"
                className="img"
              />
            </div>
            <div className="image">
              <img
                src={"/images/instincts/instincts7.jpg"}
                alt="Famous actor giving a speech at Instincts"
                className="img"
              />
            </div>
            <div className="image">
              <img
                src={"/images/instincts/instincts8.jpg"}
                alt="Celebrities from the Tamil Cinema field sitting together as chief guests for Instincts"
                className="img"
              />
            </div>
            <div className="image">
              <img
                src={"/images/instincts/instincts9.jpg"}
                alt="Professional Fire breather putting on a show for instincts"
                className="img"
              />
            </div>
            <div className="image">
              <img
                src={"/images/instincts/instincts10.jpg"}
                alt="Musical concert at Instincts"
                className="img"
              />
            </div>
            <div className="image">
              <img
                src={"/images/instincts/instincts11.jpg"}
                alt="2 kids standing before a stage that is set for the concert at Instincts"
                className="img"
              />
            </div>
            <div className="image">
              <img
                src={"/images/instincts/instincts12.jpg"}
                alt="Group of college students socializing and enjoying Instincts"
                className="img"
              />
            </div>
            <div className="image">
              <img
                src={"/images/instincts/instincts13.jpg"}
                alt="Classical Dance Bharathanatyam performace at Instincts"
                className="img"
              />
            </div>
            <div className="image">
              <img
                src={"/images/instincts/instincts14.jpg"}
                alt="DJ performing at night for the DJ nightshow at Instincts"
                className="img"
              />
            </div>
            <div className="image">
              <img
                src={"/images/instincts/instincts15.jpg"}
                alt="People vibing to the live music at Instincts"
                className="img"
              />
            </div>
            <div className="image">
              <img
                src={"/images/instincts/instincts16.jpg"}
                alt="Celebrity entertaining and interaccting with the audience at Instincts"
                className="img"
              />
            </div>
            <div className="image">
              <img
                src={"/images/instincts/instincts17.jpg"}
                alt="Instincts host having a casual conversation with RJ Balaji who is a chief guest for Instincts"
                className="img"
              />
            </div>

            <div className="image">
              <img
                src={"/images/instincts/instincts18.jpg"}
                alt="Student doing the dab in front of an audience as part of an event for Instincts"
                className="img"
              />
            </div>
            <div className="image">
              <img
                src={"/images/instincts/instincts19.jpg"}
                alt="The Western Dance crew of SSN performing a dance show for Instincts"
                className="img"
              />
            </div>
            <div className="image">
              <img
                src={"/images/instincts/instincts20.jpg"}
                alt="Group of students on stage enjoying themselves on Instincts"
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
