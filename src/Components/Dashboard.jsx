import React from "react";
import Home_Table from "./Home_Table";
import { MdArrowOutward } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

const Dashboard = () => {

  return (
    <>
      <div className="m-10 ">
        <div class="grid grid-cols-2 md:grid-cols-3 gap-10 pt-2 justify-between">
          {/* 1st box */}
          <div class="py-2 bg-white drop-shadow-xl p-4 border rounded-xl">
            <h2 class="font-semibold text-xl pt-4">Revenue</h2>
            <div class="flex flex-row sm:flex-row overflow-hidden">
              <p class="flex items-center text-black text-3xl font-bold sm:mr-20 mb-4 sm:mb-0">
                15% <MdArrowOutward className="text-xl text-green-500 ml-1" />
              </p>
            </div>

            <div class="flex flex-col text-center sm:text-right">
              <p class="text-gray-300">Increase compared to last week</p>
            </div>

            <a href="#" class="text-[#A94438] mt-2 flex items-center text-base">
              Revenues report <FaArrowRight />
            </a>
          </div>

          {/* 1st box end */}

          {/* 2nd box start */}

          <div class="py-2 bg-white drop-shadow-xl p-4 border rounded-xl">
            <h2 class="font-semibold text-xl pt-4">Lost deals</h2>
            <div class="flex flex-row sm:flex-row overflow-hidden">
              <p class="flex items-center text-black text-3xl font-bold sm:mr-20 mb-4 sm:mb-0">
                4%
              </p>
            </div>

            <div class="flex flex-col text-center sm:text-right">
              <p class="text-gray-300">You closed 96 out of 100 deals</p>
            </div>

            <a href="#" class="text-[#A94438] mt-2 flex items-center text-base">
              All deals <FaArrowRight />
            </a>
          </div>
          {/* <!-- 2nd box end --> */}

          {/* <!-- 3rd box start --> */}
          <div class="py-2 bg-white drop-shadow-xl p-4 border rounded-xl">
            <h2 class="font-semibold text-xl pt-4">Quater goal</h2>
            <div class="flex flex-row sm:flex-row overflow-hidden">
              {/* add gere */}
         
              {/* done here/ */}
            </div>

            <div class="flex flex-col text-center sm:text-right">
              <p class="text-gray-300">Increase compared to last week</p>
            </div>

            <a href="#" class="text-[#A94438] mt-2 flex items-center text-base">
              All goals <FaArrowRight />
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
