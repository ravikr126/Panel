import React from "react";
import SidebarData from "./SidebarData";
import { NavLink } from "react-router-dom";
import Path from "./Path";
import { IoExitOutline } from "react-icons/io5";
import { TbSettings2 } from "react-icons/tb";

const menuItems = [
  { icon: <TbSettings2 />, text: "Settings" },
  { icon: <IoExitOutline />, text: "Log out", color: "text-red-500" },
];

const Sidebar = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-[#f5f7fa] m-2 rounded-xl">
      {/* Sidebar */}
      <div className="text-black overflow-y-auto fixed h-full pt-4 rounded-xl p-2">
        {/* title start here */}
        <h1 className="font-bold text-2xl mb-4"> 🍊 OrangeFarm</h1>
        {/* title ends here */}

        {/* Searchbar start here */}
        <form>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="rounded-full block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
          </div>
        </form>
        {/* Searchbar ends here */}

        {/* list of navigation start here */}
        <ul>
          {SidebarData.map((item, index) => (
            <li className="text-base" key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  ["nav-link", isActive ? "active" : null].join(" ")
                }
              >
                <div className="flex items-center p-3 transition duration-300 transform hover:bg-white hover:text-black hover:rounded-full hover:translate-x-5">
                  {item.icons} <span className="ml-1">{item.title}</span>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Image at the bottom */}
        <div className="mt-auto mb-4 flex items-center">
          <img
            src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
            alt=""
            className="w-10 h-10 rounded-full mr-2"
          />
          <div>
            <p>Gustavo Xavier</p>
            <p className="bg-yellow-500">Admin</p>
          </div>
        </div>

        {/* image ends here */}

        <div className="flex items-center p-3 transition duration-300 transform hover:bg-white hover:text-black hover:rounded-full hover:translate-x-5">
          <ul className="flex-row">
            {menuItems.map((item, index) => (
              <li key={index}>
                <div className="flex items-center">
                  {item.icon}
                  <span className={`ml-2 ${item.color || ""}`}>
                    {item.text}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* router here */}
      <div className="flex-grow overflow-y-auto ml-60">
        <Path />
      </div>
      {/* routers ends here */}
    </div>
  );
};

export default Sidebar;
