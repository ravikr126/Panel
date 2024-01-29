import React from "react";
import Home_Table from "./Home_Table";
import { MdArrowOutward } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import SemiCircleProgressBar from "react-progressbar-semicircle";

const Dashboard = () => {
  return (
    <>
      <div className="m-10 ">
        <div class="grid grid-cols-2 md:grid-cols-3 gap-10 pt-2 justify-between">
          {/* 1st box */}
          <div class="h-[250px] py-2 bg-white drop-shadow-xl p-4 border rounded-xl">
            <h2 class="font-semibold text-xl py-4">Revenue</h2>
            <div class="flex flex-row sm:flex-row overflow-hidden">
              <p class="flex items-center text-black text-3xl font-bold sm:mr-20 mb-4 sm:mb-0">
                15% <MdArrowOutward className="text-xl text-green-500 ml-1" />
              </p>
            </div>

            <div class="flex flex-col">
              <p>Increase compared to last week</p>
            </div>

            <a
              href="#"
              class="text-[#A94438] mt-20 flex items-center text-base"
            >
              Revenues report <FaArrowRight />
            </a>
          </div>

          {/* 1st box end */}

          {/* 2nd box start */}

          <div class="h-[250px] py-2 bg-white drop-shadow-xl p-4 border rounded-xl">
            <h2 class="font-semibold text-xl py-4">Lost deals</h2>
            <div class="flex flex-row sm:flex-row overflow-hidden">
              <p class="flex items-center text-black text-3xl font-bold sm:mr-20 mb-4 sm:mb-0">
                4%
              </p>
            </div>

            <div class="flex flex-col">
              <p>You closed 96 out of 100 deals</p>
            </div>

            <a
              href="#"
              class="text-[#A94438] mt-20 flex items-center text-base"
            >
              All deals
              <FaArrowRight />
            </a>
          </div>

          {/* <!-- 2nd box end --> */}

          {/* <!-- 3rd box start --> */}

          <div className="h-[250px] py-2 bg-white drop-shadow-xl p-4 border rounded-xl">
            <h2 className="font-semibold text-xl py-4">Quarter goal</h2>
            <div className="flex items-center justify-center font-bold text-3xl">
              <SemiCircleProgressBar
                percentage={84}
                showPercentValue
                className="text-white bg-orange-500 "
              />
            </div>
            <a
  href="#"
  className="text-[#A94438] mt-8 flex items-center justify-center text-base"
>
  All goals
  <FaArrowRight className="ml-2" />
</a>

          </div>

          {/* 3rd box end */}
        </div>

        {/* upper box ends */}

        <div className="border  my-5 rounded bg-white">
          <h1 className="m-4 text-3xl font-bold ">Recent Orders</h1>

          {/* table start */}
          {/* <Table /> */}
          <Home_Table />
          {/* table end */}
        </div>

        {/* upper boxex ends */}
      </div>
      {/* 2nd div row wali */}

      {/* home section end */}
    </>
  );
};

export default Dashboard;
