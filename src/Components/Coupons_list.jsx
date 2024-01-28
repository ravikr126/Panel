import React from "react";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const Coupons_list = () => {
  return (
    <div className="m-10">
      <div class="max-w-7xl my-10 p-8 mx-auto bg-white rounded-md shadow-md border border- flex flex-row justify-between">
        <h1 className="font-serif	text-3xl font-bold	">Coupon List </h1>
        <h3 className="text-right pr-5">
          <a href="./Homes" className="text-[#2ca5e9] hover:text-blue-800">
            Dashboard{" "}
          </a>
          / Coupon List
        </h3>
      </div>

      <Link
        to="/Coupons"
        className="bg-green-200 hover:bg-green-500 border rounded p-3 "
      >
        <span className="font-bold text-xl">+</span> Add New
      </Link>

      <div class="max-w-7xl shadow-sm mt-8 m-auto bg-white rounded-md  border border-">
        <table class="min-w-full bg-white rounded whitespace-nowrap">
          <thead class="border-b bg-gray-50">
            <tr class="">
              <th class="px-3 py-3 text-center ">
                <div class="flex place-content-center">
                  <input
                    type="checkbox"
                    name="select_all"
                    id="select_all"
                    class="w-4 h-4 text-indigo-500 border border-gray-200 rounded focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 dark:border-gray-700"
                  />
                </div>
              </th>
              <th class="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                Code
              </th>
              <th class="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                Type
              </th>
              <th class="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                Discount
              </th>
              <th class="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                Status
              </th>
              <th class="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                Starting Date
              </th>
              <th class="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                Ending Date
              </th>
              <th class="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle"></th>
            </tr>
          </thead>
          <tbody class="text-sm bg-white divide-y divide-gray-200">
            <tr>
              <td class="w-20 px-3 py-4 text-center">
                <input
                  type="checkbox"
                  name="select"
                  class="w-4 h-4 rounded opacity-50"
                />
              </td>
              <td class="px-3 py-4 text-gray-600 ">HAPPY50 </td>
              <td class="px-3 py-4 text-gray-600 ">Fixed </td>
              <td class="px-3 py-4">
                <span class="px-4 py-1 text-sm text-green-500 rounded-full bg-green-50">
                  Enable
                </span>
              </td>
              <td class="px-3 py-4 text-gray-600 ">$150 </td>
              <td class="px-3 py-4 text-gray-500 ">May 07, 2021</td>
              <td class="px-3 py-4 text-gray-500 ">May 10, 2021</td>
              <td class="w-20 px-3 py-2 text-center text-gray-500 ">
                <div class="flex place-content-center">
                  <button className="px-6 py-2 text-xl border bg-green-200 hover:bg-green-400 mx-2">
                    <FaRegEdit />
                  </button>
                  <button className="px-6 py-2 text-xl border bg-green-200 hover:bg-green-400">
                    <MdDelete />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Coupons_list;
