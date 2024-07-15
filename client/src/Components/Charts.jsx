/* eslint-disable no-unused-vars */
import React from "react";
import StraightAnglePieChart from "./Charts/StraightAnglePieChart";
import BiaxialLineChart from "./Charts/BiaxialLineChart";

const Charts = () => {
  return (
    <div className="flex flex-wrap justify-center items-center mt-10">
      <h1 className="text-4xl">This is Charts Section</h1>
      <StraightAnglePieChart />
      <BiaxialLineChart />
    </div>
  );
};

export default Charts;
