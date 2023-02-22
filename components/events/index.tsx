/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  BsFillCalendarCheckFill,
  BsFillClockFill,
  BsFillPersonFill,
} from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";

type people = {
  name: string;
  phone: string;
};

type ruleType = {
  rules: string[];
  ruleHead?: string;
};

type eventDetailsType = {
  eventNames: string;
  description: string;
  rules?: ruleType[];
  date: string;
  fromTime?: string;
  toTime?: string;
  venue?: string;
  type: string;
  team_size?: string;
  organizers?: people[];
  ruleBook?: string;
};

type clubType = {
  name: string;
  imgsrc: string;
};

type clubEvents = {
  events: eventDetailsType[];
  clubs: clubType[];
};

type Children = {
  clubName: string;
  eventDetails: clubEvents;
};

export const Events = ({ clubName, eventDetails }: Children) => {
  const [selecteId, setSelectedId] = useState(0);
  const previousValue = useRef(selecteId);

  useEffect(() => {
    document.querySelector(`.btn-0`)?.classList.add("btn-color");
  }, []);

  useEffect(() => {
    previousValue.current = selecteId;
  }, [selecteId]);

  return (
    <>
      <div className="w-full mt-20 sm:mt-10 sm:p-0 sm:mt-0 flex justify-center items-center">
        {eventDetails.clubs.map((item) => {
          return (
            <div className="mx-auto p-4 sm:p-2 lg:p-8">
              <Image
                src={"/images/clubs/" + item.imgsrc}
                alt={"elc"}
                height={300}
                width={300}
              />
              <h1 className="mt-3 font-title text-white align-center text-center text-2xl">
                {item.name}
              </h1>
            </div>
          );
        })}
      </div>
      <div className="lg:ml-2 flex flex-wrap flex-row min-h-[100vh] pb-10 items-center justify-center ">
        <div className="lg:flex-1 sm:w-[95%] md:w-[95%] mt-5 sm:py-5 sm:my-0 sm:px-5 flex lg:flex-col  items-center sm:justify-center md:justify-center lg:justify-evenly  py-10  pr-1 pl-5 lg:min-h-[100vh] sm:min-h-fit md:min-h-fit shadow-2xl text-white sm:flex-row flex-wrap ">
          {eventDetails.events.map((item, index) => (
            <div
              key={item.eventNames}
              onClick={() => {
                document
                  .querySelector(`.btn-${previousValue.current}`)
                  ?.classList.remove("btn-color");
                document
                  .querySelector(`.btn-${index}`)
                  ?.classList.add("btn-color");
                setSelectedId(index);
                const clubs = document.querySelector(".clubs");
                if (!clubs) return;
                clubs.classList.remove("clubitem");
                window.requestAnimationFrame(function () {
                  clubs.classList.add("clubitem");
                });
              }}
              className={` btn-${index} p-2 mb-2 rounded-lg font-title sm:mr-3 md:mr-3 md:text-xl hover:cursor-pointer hover:opacity-90 bg-gray-800 `}
            >
              {item.eventNames}
            </div>
          ))}
        </div>
        <div className="clubs clubitem rounded-lg sm:mb-10 sm:p-3 bg-gradient-to-r from-[#ae8141] to-gray-800 bg-blend-color-dodge p-10 lg:min-h-[70vh] md:min-h-fit lg:w-[74%] sm:w-[95%] md:w-[95%] mt-5 flex-wrap">
          <h3 className="mb-4 text-3xl font-bold text-left text-white font-title">
            {eventDetails.events[selecteId].eventNames}
          </h3>
          <p className="text-lg text-justify text-white font-body md:text-xl">
            {eventDetails.events[selecteId].description}
          </p>
          <h2 className="mt-10 text-2xl text-white font-title">Rules</h2>
          {eventDetails.events[selecteId].rules?.length ? (
            <>
              {eventDetails.events[selecteId].rules?.map((li_item) => (
                <Fragment key={li_item.ruleHead}>
                  {li_item.ruleHead ? (
                    <p className="my-4 text-xl text-justify text-white font-body md:text-2xl">
                      {li_item.ruleHead}
                    </p>
                  ) : null}
                  <ul className="list-disc list-inside">
                    {li_item.rules?.map((item) => (
                      <li
                        key={item}
                        className="text-lg text-justify text-white font-body md:text-xl"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </Fragment>
              ))}
            </>
          ) : (
            <p className="text-lg text-justify text-white font-body md:text-xl">
              <b className="mr-1 font-title">TBD</b>
            </p>
          )}
          <div className="flex flex-col items-start justify-around mt-5">
            <div className="flex items-center justify-between">
              <div className="rounded-3xl bg-white flex justify-around items-center p-2 text-black w-fit sm:mr-3 md:mr-3">
                <BsFillCalendarCheckFill size={20} className="mr-2" />
                <p> {eventDetails.events[selecteId].date}</p>
              </div>
              <div className="rounded-3xl bg-white flex justify-around items-center p-2 text-black w-fit">
                <BsFillClockFill size={20} className="mr-2" />
                <p>
                  {eventDetails.events[selecteId].fromTime &&
                  eventDetails.events[selecteId].toTime ? (
                    <>
                      {eventDetails.events[selecteId].fromTime} to{" "}
                      {eventDetails.events[selecteId].toTime}
                    </>
                  ) : (
                    "TBD"
                  )}
                </p>
              </div>
            </div>

            <div className="rounded-3xl  flex justify-around items-center bg-white p-3 mt-3 text-black  w-fit">
              <RiTeamFill size={20} className="mr-2" />
              <p>
                {eventDetails.events[selecteId].team_size
                  ? eventDetails.events[selecteId].team_size
                  : "TBD"}
              </p>
            </div>

            <div className="rounded-3xl bg-white flex justify-center items-center p-3 mt-3 text-black">
              <IoLocationSharp size={20} />
              <p> {eventDetails.events[selecteId].venue}</p>
            </div>
            <h3 className="mt-3 text-lg text-white font-title">
              Contact Numbers
            </h3>
            {eventDetails.events[selecteId].organizers?.length ? (
              <>
                {eventDetails.events[selecteId].organizers?.map((item) => (
                  <div className="rounded-3xl bg-white flex justify-center items-center p-3 mt-3 text-black">
                    <>
                      <BsFillPersonFill size={20} />

                      <p key={item.name}>
                        {item.name} - {item.phone}
                      </p>
                    </>
                  </div>
                ))}
              </>
            ) : (
              <p className="text-lg text-justify text-white font-body md:text-xl">
                <b className="mr-1 font-title">TBD</b>
              </p>
            )}
          </div>
          {eventDetails.events[selecteId].ruleBook && (
            <a
              className="mt-4 relative left-[55%] sm:left-[60%] md:left-[70%] lg:left-[80%]  w-full text-right m-4  px-6 py-2 text-green-100 rounded bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500"
              href={eventDetails.events[selecteId].ruleBook}
            >
              Rule Book
            </a>
          )}
        </div>
      </div>
    </>
  );
};
