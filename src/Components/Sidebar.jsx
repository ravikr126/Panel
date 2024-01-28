import React from "react";
import SidebarData from "./SidebarData";
import { NavLink } from "react-router-dom";
import Path from "./Path";

const Sidebar = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-[#f5f7fa]">
      {/* Sidebar */}
      <div className="w-60 bg-[#3d464d] text-white overflow-y-auto fixed h-full pt-4">
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
      </div>

      {/* Content */}
      <div className="flex-grow overflow-y-auto ml-60">
        <Path />
      </div>
    </div>
  );
};

export default Sidebar;
