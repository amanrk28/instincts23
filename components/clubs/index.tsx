import { Button } from "components/button";
import Image from "next/image";
import Script from "next/script";
import React from "react";
import Link from "next/link";

type Children = {
  imageSource: string;
  alternate: string;
  clubName: string;
  description: string;
  link: string;
};

export const Club = ({
  imageSource,
  alternate,
  clubName,
  description,
  link,
}: Children) => {
  return (
    <>
      <Link href={link} className="shadow-2xl w-full  clubimage">
        <Image
          src={"/images/clubs/" + imageSource}
          alt={alternate}
          width={244}
          height={244}
        className="mb-4 mx-auto w-[40vw] h-[40vw] sm:w-[40vw] sm:h-[40vw] md:w-[15vw] md:h-[15vw] lg:w-[10vw] lg:h-[10vw]"
        />
        <h2 className="mb-4 text-3xl font-bold text-center font-title">
          {clubName}
        </h2>
      </Link>
    </>
  );
};
