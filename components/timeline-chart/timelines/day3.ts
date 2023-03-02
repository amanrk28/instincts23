import { ApexOptions } from "apexcharts";
import { dateFormatter } from "../util";

export const day3Data: ApexOptions["series"] = [
  {
    name: "Pattimandram",
    data: [
      { x: "Auditorium", y: [dateFormatter(10, 0), dateFormatter(12, 30)] },
    ],
  },
  {
    name: "Anunad Finals",
    data: [
      { x: "Auditorium", y: [dateFormatter(14, 0), dateFormatter(16, 0)] },
    ],
  },
  {
    name: "Anunad Prelims",
    data: [{ x: "Mini audi", y: [dateFormatter(10, 0), dateFormatter(13, 0)] }],
  },
  {
    name: "Lights, Camera, Sale!",
    data: [
      { x: "Mini audi", y: [dateFormatter(14, 30), dateFormatter(16, 30)] },
    ],
  },
  {
    name: "Shipwreck",
    data: [{ x: "OAT", y: [dateFormatter(10, 0), dateFormatter(13, 0)] }],
  },
  {
    name: "DJ Night",
    data: [{ x: "OAT", y: [dateFormatter(6, 30), dateFormatter(20, 30)] }],
  },
  {
    name: "Sports Quiz",
    data: [
      { x: "Central seminar", y: [dateFormatter(10, 0), dateFormatter(13, 0)] },
    ],
  },
  {
    name: "Jam",
    data: [
      { x: "Central seminar", y: [dateFormatter(14, 0), dateFormatter(17, 0)] },
    ],
  },

  {
    name: "Call of Duty",
    data: [{ x: "CSE LH49", y: [dateFormatter(10, 0), dateFormatter(14, 0)] }],
  },
  {
    name: "Fire Silambam",
    data: [{ x: "Fountain", y: [dateFormatter(16, 0), dateFormatter(16, 30)] }],
  },
  {
    name: "WHAT A LOOK!",
    data: [
      { x: "SNU class1", y: [dateFormatter(11, 0), dateFormatter(12, 30)] },
    ],
  },
  {
    name: "UI/UX Design",
    data: [
      { x: "SNU class2", y: [dateFormatter(10, 0), dateFormatter(13, 30)] },
    ],
  },
  {
    name: "IPL Auction",
    data: [{ x: "Lobby", y: [dateFormatter(8, 30), dateFormatter(15, 30)] }],
  },
];
