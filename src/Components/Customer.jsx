import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Switch } from "antd";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const Customer = () => {
  const [data, setData] = useState([]);
  const [checked, setChecked] = useState(true);
  const handleDelete = async (itemId) => {
    try {
      // Send a DELETE request to the API endpoint for deleting a category
      const response = await axios.delete(
        `http://penguinfe.golu.in:7000/categories/${itemId}`
      );

      // Update the local data array after successful deletion
      const updatedData = data.filter((item) => item.id !== itemId);
      setData(updatedData);

      console.log("Delete Response:", response.data);
    } catch (error) {
      console.error("Delete Error:", error);
    }
  };

  const handleChange = async (isChecked, itemId) => {
    try {
      console.log("Updating status for item with ID:", itemId);

      // Send a request to update the status in the API
      const response = await axios.put(
        `http://penguinfe.golu.in:7000/categories?id=${itemId}`,
        {
          status: isChecked,
        }
      );

      console.log("API Response:", response.data);

      // Update the local data array
      const updatedData = data.map((item) =>
        item.id === itemId ? { ...item, status: !isChecked } : item
      );

      setData(updatedData);
      setChecked(isChecked);
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use axios to fetch data
        const response = await axios.get(
          "http://penguinfe.golu.in:7000/categories"
        );

        // Access the data property from the response
        const result = response.data;

        // Set the state with the fetched data
        setData(result.data);

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
        <div className="flex flex-row justify-between mb-5">
          <div>
            <p className="text-gray-400 ">
              <a
                href="../Dashboard"
                className="hover:text-gray-800 hover:underline"
              >
                Dashboard
              </a>
              <a href="" className="hover:text-gray-800 hover:underline">
                /Customers
              </a>
            </p>
            <h1 className="text-3xl font-bold">Customer Name</h1>
          </div>

          <div className="text-right">
            <button className="mx-3 px-4 py-2 bg-red-300 hover:bg-red-600  rounded-xl hover:text-white">
              Delete
            </button>
            <button className="mx-3 px-4 py-2 bg-green-300 hover:bg-green-600 rounded-xl hover:text-white ">
              Edit
            </button>
          </div>
        </div>

        <div className="flex flex-row gap-10">
          <div className="w-2/3">
            <div className="w-full p-2 h-20 m-3 bg-white rounded-md shadow-md border ">
              <div className="grid gap-6">
                <input
                  type="text"
                  placeholder="Notes about customer"
                  className="p-4"
                />
              </div>
              <br />
              <br />
            </div>

            {/* //2nd form box */}
            <div className="w-full p-8 m-3 bg-white rounded-md shadow-md border ">
              <div className="grid  sm:grid-cols-1">
                <div className="flex justify-between    ">
                  <h1 className="font-bold text-2xl">Orders</h1>
                  <h2 className="text-gray-500">
                    Total spent $34,980.34 on 7 orders
                  </h2>
                </div>
                <div className="min-w-full my-5 overflow-x-auto border rounded-md shadow-sm">
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
                          Image
                        </th>
                        <th className="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                          Icon
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
                      {data.map((item) => (
                        <tr key={item.id}>
                          <td className="w-20 px-3 py-4 text-center">
                            <input
                              type="checkbox"
                              name="select"
                              className="w-4 h-4 rounded opacity-50"
                            />
                          </td>
                          <td className="px-3 py-4 text-gray-600 ">
                            {item.name}
                          </td>
                          <td className="px-3 py-4 text-gray-500 w-2/6 text-center">
                            <img
                              src={`http://penguinfe.golu.in:7000/${item.image}`}
                              alt=""
                              className="h-1/3 w-1/3"
                            />
                          </td>
                          <td className="px-3 py-4">
                            <div className="flex items-center w-max">
                              {item.icon}
                            </div>
                          </td>
                          <td className="px-3 py-4">
                            <Switch
                              defaultChecked={item.status}
                              checkedChildren="Active"
                              unCheckedChildren="Inactive"
                              onChange={(isChecked) =>
                                handleChange(isChecked, item.id)
                              }
                              style={{
                                background: item.status ? "#00aaff" : "#000000",
                                color: item.status ? "#fff" : "#000",
                              }}
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
              <br />
              <br />
            </div>
        </div>

          {/* 3rd form box */}

          {/* 2nd form */}

          <div className="w-1/3 p-4 bg-white rounded-md shadow-md border">
            <div>
              <div className="flex flex-col items-center justify-center m-5">
                <img
                  src="https://images.unsplash.com/photo-1506085452766-c330853bea50?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;fit=crop&amp;h=200&amp;w=200&amp;s=3e378252a934e660f231666b51bd269a"
                  alt="#"
                  className="border rounded-full w-2/3 h-1/3 mx-auto"
                />
                <div className="mt-5 text-center">
                  <h1>Customer Name</h1>
                  <h2>Customer Number</h2>
                  <h2>Customer email</h2>
                </div>
              </div>

              <div className="border border-black w-full text-center"></div>

              <div className="mt-5 mx-5 ">
                <h1 className="text-xl py-2">Last Order</h1>
                <h2 className="text-gray-600 pb-5">
                  7 days ago – #Order Number
                </h2>
                <h1 className="text-xl py-2">Average Order</h1>
                <h2 className="text-gray-600 pb-5">$574.00</h2>
                <h1 className="text-xl py-2">Registered</h1>
                <h2 className="text-gray-600 pb-5">2 months ago</h2>
                <h1 className="text-xl py-2">Email Marketing</h1>
                <h2 className="text-gray-600 pb-5">Subscribed</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;
