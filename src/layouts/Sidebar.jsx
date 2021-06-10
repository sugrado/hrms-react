import React from "react";
import CityList from "../pages/CityList";
import JobPositionList from "../pages/JobPositionList";


export default function Sidebar() {
  return (
    <div>
      <JobPositionList/>
      <br />
      <CityList/>
    </div>
  );
}
