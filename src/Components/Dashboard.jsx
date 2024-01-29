import { React, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import SemiCircleProgressBar from "react-progressbar-semicircle";
import { FiMessageCircle } from "react-icons/fi";
import { CiStar } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineModeEdit } from "react-icons/md";

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
            </div>
            {/* ======================================== */}
            {/* small grid section start here */}
            <div class="grid grid-cols-2 md:grid-cols-3 gap-10 pt-2 justify-between">
              {/* 1st box */}
              <div class="py-2 bg-white drop-shadow-xl p-4 border rounded-xl">
                <h2 class="font-semibold text-xl py-4 text-gray-400 mb-4">
                  Top Month
                </h2>
                <div class="flex flex-col">
                  <p class="flex items-center text-2xl text-[#6D2932] font-bold sm:mr-20 mb-4 sm:mb-0">
                    November
                  </p>
                  <p className="text-orange-500 text-xl">2019</p>
                </div>
              </div>

              {/* 1st box end */}

              {/* 2nd box start */}
              <div class="py-2 bg-white drop-shadow-xl p-4 border rounded-xl">
                <h2 class="font-semibold text-xl py-4 text-gray-400 mb-4">
                  Top year
                </h2>
                <div class="flex flex-col">
                  <p class="flex items-center text-2xl text-[#6D2932] font-bold sm:mr-20 mb-4 sm:mb-0">
                    2023
                  </p>
                  <p className=" text-xl">96K sold so far</p>
                </div>
              </div>

            
              {/* <!-- 2nd box end --> */}

              {/* <!-- 3rd box start --> */}

              <div className="py-2 bg-white drop-shadow-xl p-4 border rounded-xl">
                <h2 className="font-semibold text-xl py-4 text-gray-400">
                  Top buyer
                </h2>

                <div class="flex flex-col">
                  <img src="data:image/jpeg;base64,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" alt="" className="rounded-full w-10" />
                  <p className="font-bold">Maggie Johnson</p>
                  <p>Oasis Organic Inc.</p>
                </div>
              </div>

              {/* 3rd box end */}
            </div>

            {/* small grid section ends here */}
            {/* ================================================================== */}
          </div>
        </div>
        {/* middle grids ends here */}
      </div>
      {/* home section end */}
    </>
  );
};

export default Dashboard;
