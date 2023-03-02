import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { options } from "./util";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const TimelineChart = ({ data }: { data: ApexOptions["series"] }) => {
  return (
    <main className="m-auto">
      <Chart
<<<<<<< Updated upstream
        options={options}
        series={data}
        type="rangeBar"
        width={"100%"}
=======
        width={"100%"}
        options={options}
        series={data}
        type="rangeBar"
>>>>>>> Stashed changes
        height={500}
      />
    </main>
  );
};
