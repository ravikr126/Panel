import { React, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
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

const Middlegrid = () => {
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
      <div className="font-bold py-2 bg-white drop-shadow-xl p-4 border rounded-xl">
        Growth
        <Graph />
      </div>

      {/* small grid section start here */}
      <SmallGrid />
      {/* small grid section ends here */}
    </div>
  </div>
  )
}

export default Middlegrid