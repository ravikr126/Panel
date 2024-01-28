import React from "react";

const Coupons = () => {
  return (
    <>
      <div className="m-10">
        <div class="max-w-7xl mt-10 p-8 mx-auto bg-white rounded-md shadow-md border  flex flex-row justify-between">
          <h1 className="font-serif	text-3xl font-bold	">Coupons</h1>
          <h3 className="text-right pr-5">
            <a href="./Homes" className="text-[#2ca5e9] hover:text-blue-800">
              Dashboard{" "}
            </a>
            / Coupons
          </h3>
        </div>
        <br />
        <br />

        <div className="flex flex-row gap-10">
          <form class="w-2/3 p-8 m-auto bg-white rounded-md shadow-md border ">
            <h1 className="font-serif	text-base font-bold">Basic information</h1>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-black dark:text-gray-200" for="username">
                  Code
                </label>
                <input
                  id="Code"
                  type="text"
                  placeholder="Code"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:gray-600 focus:blue-500 dark:focus:blue-500 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label class="text-black dark:text-gray-200" for="username">
                  Type
                </label>

                <div class="flex items-center mb-4">
                  <input
                    id="default-radio-1"
                    type="radio"
                    value=""
                    name="default-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-radio-1"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Percentage %
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    checked
                    id="default-radio-2"
                    type="radio"
                    value=""
                    name="default-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-radio-2"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Fixed
                  </label>
                </div>
              </div>
              <div>
                <label class="text-black dark:text-gray-200" for="username">
                  Discount Value
                </label>
                <input
                  id="DiscountValue"
                  type="text"
                  placeholder="DiscountValue"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:gray-600 focus:blue-500 dark:focus:blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label class="text-black dark:text-gray-200" for="username">
                  User Limit
                </label>
                <input
                  id="UserLimit"
                  type="text"
                  placeholder="UserLimit"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:gray-600 focus:blue-500 dark:focus:blue-500 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label class="text-black dark:text-gray-200" for="username">
                  Starting Date
                </label>
                <input
                  id="StartingDate"
                  type="date"
                  placeholder="StartingDate"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:gray-600 focus:blue-500 dark:focus:blue-500 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label class="text-black dark:text-gray-200" for="username">
                  Ending Date
                </label>
                <input
                  id="EndingDate"
                  type="date"
                  placeholder="EndingDate"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:gray-600 focus:blue-500 dark:focus:blue-500 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <div class="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value="check"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-checkbox"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Only for registered customers
                  </label>
                </div>
              </div>
              <div class="text-right rounded-md">
                <button class="px-4 py-2 leading-5 text-base text-black transition-colors duration-200 transform bg-blue-400 rounded-md hover:bg-green-400 font-bold focus:outline-none focus:bg-gray-600">
                  Save
                </button>
              </div>
            </div>
          </form>

          {/* 2nd form */}

          <form class="w-1/3 p-8 m-auto bg-white rounded-md shadow-md border ">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-black dark:text-gray-200" for="username">
                  Status
                </label>
                <div class="flex items-center mb-4">
                  <input
                    id="default-radio-1"
                    type="radio"
                    value=""
                    name="default-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-radio-1"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Enable
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    checked
                    id="default-radio-2"
                    type="radio"
                    value=""
                    name="default-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-radio-2"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Disable
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Coupons;
