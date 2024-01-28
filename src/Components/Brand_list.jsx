import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Switch } from "antd";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const Brand_list = () => {
  const [data, setData] = useState([]);
  const [checked, setChecked] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleChangeStatus = async (isChecked, id) => {
    try {
      setLoading(true);

      // Make an API request to update the status
      const response = await axios.post(
        `http://penguinfe.golu.in:7000/brands/status/${id}`,
        { status: isChecked }
      );

      // Assuming the API response contains the updated item with the new status
      const updatedItem = response.data;

      // Handle the updated item as needed (e.g., update state in your component)
      // Example:
      // updateStateWithNewItem(updatedItem);
    } catch (error) {
      console.error("Error updating status:", error);
      // Handle the error as needed
    } finally {
      setLoading(false);
    }
  };
  const handleDelete = async (itemId) => {
    try {
      // Send a DELETE request to the API endpoint for deleting a category
      const response = await axios.delete(
        `http://penguinfe.golu.in:7000/brands/${itemId}`
      );

      // Update the local data array after successful deletion
      const updatedData = data.filter((item) => item.id !== itemId);
      setData(updatedData);

      console.log("Delete Response:", response.data);
    } catch (error) {
      console.error("Delete Error:", error);
    }
  };

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use axios to fetch data
        const response = await axios.get(
          "http://penguinfe.golu.in:7000/brands"
        );

        // Access the data property from the response
        const result = response.data.message;
        // Set the state with the fetched data
        setData(result);

        // Note: You won't see the updated state immediately due to the asynchronous nature of setState.
        // If you want to log the updated state, you can use a separate useEffect hook.
        console.log(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="m-10">
        <div className="max-w-7xl mt-10 mb-10 p-8 mx-auto bg-white rounded-md shadow-md border border-gray-200 flex flex-row justify-between">
          <h1 className="font-serif text-3xl font-bold">Brand List</h1>
          <h3 className="text-right pr-5">
            <Link
              to="/dashboard"
              className="text-[#2ca5e9] hover:text-blue-800"
            >
              Dashboard
            </Link>{" "}
            / Brand List
          </h3>
        </div>

        <Link
          to="/BrandForm"
          className="bg-green-200 hover:bg-green-500 border rounded p-3 m-10"
        >
          <span className="font-bold text-xl">+</span> Add New Brand
        </Link>

        {/* Table start */}
        <div className="items-center bg-gray-100 dark:bg-gray-900 block m-10">
          <div className="w-full mx-auto lg:container">
            <div className="min-w-full my-10 overflow-x-auto border rounded-md shadow-sm">
              <table className="min-w-full bg-white rounded whitespace-nowrap mb-10">
                <thead className="border">
                  <tr>
                    <th className="px-3 py-3 text-center">
                      <div className="flex place-content-center">
                        <input
                          type="checkbox"
                          name="select_all"
                          id="select_all"
                          className="w-4 h-4 text-indigo-500 border border-gray-200 rounded focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 dark:border-gray-700"
                        />
                      </div>
                    </th>
                    <th className="px-3 py-3 text-black text-xs font-normal text-left  uppercase align-middle">
                      Name
                    </th>
                    <th className="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                      Logo
                    </th>
                    <th className="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                      Slug
                    </th>
                    <th className="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                      Status
                    </th>
                    <th className="px-3 py-3 text-xs font-normal text-right text-gray-500 uppercase align-middle">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm bg-white divide-y divide-gray-200">
                  {data?.map((item) => (
                    <tr key={item.id}>
                      <td className="w-20 px-3 py-4 text-center">
                        <input
                          type="checkbox"
                          name="select"
                          className="w-4 h-4 rounded opacity-50"
                        />
                      </td>
                      <td className="px-3 py-4 text-gray-600 ">{item.name}</td>
                      <td className="px-3 py-4 text-gray-500 w-2/6 text-center">
                        <img
                          src={`http://penguinfe.golu.in:7000/${item.logo}`}
                          alt=""
                          className="h-1/3 w-1/3"
                        />
                      </td>
                      <td className="px-3 py-4">
                        <div className="flex items-center w-max">
                          {item.slug}
                        </div>
                      </td>
                      <td className="px-3 py-4">
                        <Switch
                          defaultChecked={item.status}
                          checkedChildren="Active"
                          unCheckedChildren="Inactive"
                          onChange={(isChecked) =>
                            handleChangeStatus(isChecked, item.id)
                          }
                          className={`${
                            item.status
                              ? "bg-blue-500 text-white"
                              : "bg-black text-white"
                          } p-2 rounded-md`}
                          loading={loading}
                        />
                      </td>
                      <td className="px-3 py-4 text-right text-gray-500 ">
                        {/* Action content based on your requirements */}
                        <button className="px-6 py-2 text-xl border bg-green-200 hover:bg-green-400 mx-2">
                          <FaRegEdit />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="px-6 py-2 text-xl border bg-green-200 hover:bg-green-400"
                        >
                          <MdDelete />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand_list;
