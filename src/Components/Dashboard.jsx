import React from "react";

import Topgrid from "./Topgrid";
import Middlegrid from "./Middlegrid";
import Lowergrid from "./Lowergrid";
const Dashboard = () => {
  return (
    <>
      <div className="m-10 ">
        <Topgrid />
        <Middlegrid />
        <Lowergrid/>
      </div>
      {/* home section end */}
    </>
  );
};

export default Dashboard;
