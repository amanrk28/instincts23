import { ApexOptions } from "apexcharts";
import { dateFormatter } from "../util";

export const day1Data: ApexOptions["series"] = [
  {
    name: "Inaugration",
    data: [
      {
        x: "Main Audi",
        y: [dateFormatter(8, 30), dateFormatter(11, 0)],
      },
    ],
  },
  {
    name: "Celebrity Variety Show",
    data: [{ x: "Main Audi", y: [dateFormatter(14, 0), dateFormatter(16, 0)] }],
  },
  {
    name: "Dance Battle",
    data: [{ x: "OAT", y: [dateFormatter(14, 0), dateFormatter(16, 0)] }],
  },
  {
    name: "Choreo Night",
    data: [{ x: "OAT", y: [dateFormatter(17, 30), dateFormatter(20, 30)] }],
  },
  {
    name: "Funda Mavan Gen Quiz",
    data: [
      {
        x: "Central Seminar",
        y: [dateFormatter(13, 30), dateFormatter(16, 30)],
      },
    ],
  },
  {
    name: "The Valor Cup",
    data: [{ x: "CSE lab", y: [dateFormatter(11, 30), dateFormatter(15, 30)] }],
  },
  {
    name: "Creative Writing",
    data: [{ x: "CSE LH45", y: [dateFormatter(12, 0), dateFormatter(14, 0)] }],
  },
  {
    name: "Potpourri",
    data: [
      {
        x: "CSE seminar",
        y: [dateFormatter(11, 30), dateFormatter(17, 0)],
      },
    ],
  },
  {
    name: "Udaan",
    data: [
      { x: "IT seminar", y: [dateFormatter(12, 0), dateFormatter(14, 0)] },
    ],
  },
  {
    name: "Pattimandram Prelims",
    data: [
      { x: "IT seminar", y: [dateFormatter(15, 0), dateFormatter(17, 0)] },
    ],
  },
  {
    name: "Draw with comali",
    data: [
      { x: "SNU Class-1", y: [dateFormatter(11, 30), dateFormatter(13, 30)] },
    ],
  },
  {
    name: "Western Solo",
    data: [
      { x: "SNU Lobby", y: [dateFormatter(11, 30), dateFormatter(14, 30)] },
    ],
  },
  {
    name: "Riff Off",
    data: [
      {
        x: "SNU seminar",
        y: [dateFormatter(11, 30), dateFormatter(14, 0)],
      },
    ],
  },
];
