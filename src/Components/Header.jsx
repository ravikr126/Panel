import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { FaBell } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <div className="w-full text-white shadow bg-black flex justify-between fixed top-0 z-50 items-center">
        <div className="flex items-center w-2/3">
          <h1 className="text-[#2ca5e9] text-xl font-bold p-2 my-2 mr-4">
            Mobile Genie
          </h1>
          <input
            type="search"
            name=""
            id=""
            className="bg-gray-200 text-base px-4 py-1 text-black border rounded-lg h-10 w-2/3"
            placeholder="Search items"
          />
        </div>

        <div className="flex items-center mr-8">
          <button className="text-green-500 mr-5">
            <FaBell />
          </button>
          <button className="text-green-500">
            <AccountCircleIcon className="m-1" />
          </button>
        </div>
      </div>
      <div className="h-14"></div>{" "}
      {/* Placeholder for the fixed header to prevent content overlap */}
    </>
  );
};

export default Header;
