import React from "react";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const Product_list = () => {
  const handleSave = () => {
    alert("Thank you your data is save ");
  };
  return (
    <div className="m-10">
      <div class="max-w-7xl mt-10 p-8 mx-auto bg-white rounded-md shadow-md border border- flex flex-row justify-between">
        <h1 className="font-serif	text-3xl font-bold">Products List </h1>
        <div className="">
          <button className="mx-3 px-5 py-2 text-xl border rounded-lg bg-yellow-200 hover:bg-yellow-400">
            Import
          </button>
          <button
            className="px-5 py-2 text-xl border rounded-lg bg-green-200 hover:bg-green-400"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
        <h3 className="text-right pr-5">
          <a href="./Homes" className="text-[#2ca5e9] hover:text-blue-800">
            Dashboard
          </a>
          / Product List
        </h3>
      </div>
      <div class="max-w-7xl mt-20 m-auto bg-white rounded-md shadow-md border border-">
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
                Product ID
              </th>
              <th class="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                Category
              </th>
              <th class="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                Product
              </th>
              <th class="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                Status
              </th>
              <th class="px-3 py-3 text-xs font-normal text-right text-gray-500 uppercase align-middle">
                Amount
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
              <td class="px-3 py-4 text-gray-600 ">#102-325-2565</td>
              <td class="px-3 py-4 text-gray-500 ">May 07, 2021</td>
              <td class="px-3 py-4">
                <div class="flex items-center w-max">
                  <img
                    width="50"
                    height="50"
                    class="w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1506085452766-c330853bea50?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;fit=crop&amp;h=200&amp;w=200&amp;s=3e378252a934e660f231666b51bd269a"
                    alt="avatar"
                  />
                  <div class="ml-4">
                    <div>Chase Maxwell</div>
                    <div class="text-sm text-gray-400">
                      chase@anothercompany.com
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-3 py-4">
                <span class="px-4 py-1 text-sm text-green-500 rounded-full bg-green-50">
                  completed
                </span>
              </td>
              <td class="px-3 py-4 text-right text-gray-500 ">$125.00</td>
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

export default Product_list;
