import React, { useState } from "react";
import axios from "axios";

const CategoryForm = () => {
  const [categoryData, setCategoryData] = useState({
    icon: "",
    image: null,
    name: "",
    slug: "",
    sorting_by: "",
    status: "", // Updated to use a dropdown
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
      formData.append("icon", categoryData.icon);
      formData.append("name", categoryData.name);
      formData.append("slug", categoryData.slug);
      formData.append("sorting_by", categoryData.sorting_by);
      formData.append("status", categoryData.status);
      formData.append("image", categoryData.image);
  
      const response = await axios.post(
        "http://penguinfe.golu.in:7000/categories",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    // If the input is a file or dropdown, update state differently
    setCategoryData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? e.target.files[0] : value,
    }));
  };

  return (
    <>
      <div className="m-10">
        <div className="max-w-7xl mt-10 p-8 mx-auto bg-white rounded-md shadow-md border  flex flex-row justify-between">
          <h1 className="font-serif	text-3xl font-bold	">Category Form</h1>
          <h3 className="text-right pr-5">
            <a href="./Homes" className="text-[#2ca5e9] hover:text-blue-800">
              Dashboard{" "}
            </a>
            / Category Form
          </h3>
        </div>
        <br />
        <br />

        <div className="flex flex-row gap-10">
          <form
            className="w-2/3 p-8 m-auto bg-white rounded-md shadow-md border "
            onSubmit={handleFormSubmit}
          >
            <h1 className="font-serif	text-base font-bold">Basic information</h1>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className="text-black dark:text-gray-200" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="name"
                  value={categoryData.name}
                  onChange={handleInputChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:gray-600 focus:blue-500 dark:focus:blue-500 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-black dark:text-gray-200"
                  htmlFor="image"
                >
                  Image
                </label>

                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      id="Image"
                      className="mx-auto h-12 w-12 text-black"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      {/* Your SVG path here */}
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file_upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span className="">Upload a file</span>
                        <input
                          id="file_upload"
                          name="image"
                          type="file"
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1 text-black">or drag and drop</p>
                    </div>
                    <p className="text-xs text-black">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-black dark:text-gray-200" htmlFor="icon">
                  Icon
                </label>
                <input
                  id="icon"
                  type="text"
                  name="icon"
                  placeholder="icon"
                  value={categoryData.icon}
                  onChange={handleInputChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:gray-600 focus:blue-500 dark:focus:blue-500 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-black dark:text-gray-200"
                  htmlFor="status"
                >
                  Status
                </label>
                <select
                  name="status"
                  value={categoryData.status}
                  onChange={handleInputChange}
                  className="border-black mx-5 border"
                >
                  <option value="">Select Status</option>
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </div>

              <div>
                <label className="text-black dark:text-gray-200" htmlFor="slug">
                  Slug:
                </label>
                <input
                  type="text"
                  name="slug"
                  placeholder="Slug"
                  value={categoryData.slug}
                  onChange={handleInputChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:gray-600 focus:blue-500 dark:focus:blue-500 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-black dark:text-gray-200"
                  htmlFor="sorting_by"
                >
                  Sorting By
                </label>
                <input
                  type="number"
                  name="sorting_by"
                  placeholder="Sorting By"
                  value={categoryData.sorting_by}
                  onChange={handleInputChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:gray-600 focus:blue-500 dark:focus:blue-500 focus:outline-none focus:ring"
                />
              </div>

              <div className="text-right rounded-md">
                <button
                  type="submit"
                  className="px-4 py-2 leading-5 text-base text-black transition-colors duration-200 transform bg-blue-400 rounded-md hover:bg-green-400 font-bold focus:outline-none focus:bg-gray-600"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CategoryForm;
