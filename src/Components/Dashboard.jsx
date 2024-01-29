import { React, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import SemiCircleProgressBar from "react-progressbar-semicircle";
import { FiMessageCircle } from "react-icons/fi";
import { CiStar } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineModeEdit } from "react-icons/md";
import Graph from "./Graph";
import SmallGrid from "./SmallGrid";

const ListItem = ({ item }) => {
  const { image, title, details } = item;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <li
      className="flex items-center rounded-2xl hover:bg-[#F3D7CA] p-5"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className="w-10 h-10 rounded-full mr-2" src={image} alt={title} />
      <div>
        <p className="font-bold">{title}</p>
        <p>{details}</p>
      </div>
      {isHovered && (
        <div className="ml-auto flex space-x-2 items-center text-xl">
          <FiMessageCircle className="text-[#A94438] cursor-pointer" />
          <CiStar className="text-[#A94438] cursor-pointer" />
          <MdOutlineModeEdit className="text-[#A94438] cursor-pointer" />
          <BsThreeDotsVertical className="text-[#A94438] cursor-pointer" />
        </div>
      )}
    </li>
  );
};

const List = ({ data }) => {
  return (
    <ul className="flex flex-col ">
      {data.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </ul>
  );
};
const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const data = [
    {
      title: "Chris Friedkly",
      image: "https://placekitten.com/300/200",
      details: "Supermarket Villanova",
    },
    {
      title: "Maggie Johnson",
      image: "https://placekitten.com/301/200",
      details: "Oasis Organic Inc.",
    },
    {
      title: "Gael Harry",
      image: "https://placekitten.com/301/200",
      details: "New York Finest Fruits",
    },
    {
      title: "Jenna Sullivan",
      image: "https://placekitten.com/301/200",
      details: "Walmart",
    },
    // Add more items as needed
  ];

  return (
    <>
      <div className="m-10 ">
        {/* top grid section start here */}
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

        {/* top grid section ends here */}

        {/* ===================================================================================================== */}

        {/* middle grids start here */}
        <div className="grid grid-cols-2 gap-4 mt-5 ">
          {/* customer grid start here */}
          <div className="py-2 bg-white drop-shadow-xl p-4 border rounded-xl">
            <div className="flex items-center justify-between ">
              <p>Customers</p>
              <div className="relative inline-block">
                Sort by
                <button
                  className="font-bold py-2 px-4 rounded inline-flex items-center"
                  onClick={toggleDropdown}
                >
                  Newest{" "}
                  <svg
                    className="h-7 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                {isOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md">
                    <ul>
                      <li className="py-2 px-4 hover:bg-gray-100">Newest</li>
                      <li className="py-2 px-4 hover:bg-gray-100">Oldest</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            {/* customer list */}
            <List data={data} />

            {/* all customer */}
            <a
              href="#"
              className="text-[#A94438] mt-8 flex items-center text-base"
            >
              All Customers
              <FaArrowRight className="ml-2" />
            </a>
          </div>
          {/* customer grid ends here */}

          <div>
            <div className="py-2 bg-white drop-shadow-xl p-4 border rounded-xl">
              Growth
              <Graph />
            </div>

            {/* small grid section start here */}
            <SmallGrid />
            {/* small grid section ends here */}
          </div>
        </div>
        {/* middle grids ends here */}
      </div>
      {/* home section end */}
    </>
  );
};

export default Dashboard;
