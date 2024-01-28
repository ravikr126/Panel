import React, { useState } from "react";
import axios from "axios";

const Real = () => {
  const URL = "";
  const [Data, setData] = useState([
    {
      name: "",
      Short_name: "",
      Thumb_image: "",
      Vendor_id: "",
      Category_id: "",
      Brand_id: "",
      Qty: "",
      Weight: "",
      Sold_qty: "",
      Short_description: "",
      Long_description: "",
      Video_link: "",
      SKU: "",
      IMEI: "",
      SEO_Title: "",
      SEO_description: "",
      Price: "",
      Offer_Price: "",
      Tags: "",
      Show_homePage: "",
      Is_undefine: "",
      Is_featured: "",
      New_product: "",
      Is_top: "",
      Is_best: "",
      Status: "",
      Is_Specification: "",
      Is_refurbished: "",
      Is_condition: "",
      Brand_model_id: "",
      Battery_Condition: "",
      Product_Condition: "",
      OS: "",
      Processor: "",
      RAM: "",
      Storage_capacity: "",
      Display_size: "",
      Resolution: "",
      Front_Camera: "",
      Rear_Camera: "",
      Connectivity: "",
      Sim_type: "",
      Network_Technology: "",
      Pros: "",
      Cons: "",
      Approve_by_admin: "",
      file_upload: "",
    },
  ]);

  return (
    <>
      <section class="max-w-6xl p-8 mx-auto bg-gray-600 rounded-md shadow-md dark:bg-gray-800 mt-20 mr-20 mb-20 ">
        <h1 class="text-xl font-bold text-black capitalize dark:text-black">
          Account settings
        </h1>
        <form>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label class="text-black dark:text-gray-200" for="username">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-black dark:text-gray-200" for="username">
                Short_name
              </label>
              <input
                id="Short_name"
                type="text"
                placeholder="Short_name"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-black dark:text-gray-200" for="username">
                Thumb_image
              </label>
              <input
                id="Thumb_image"
                type="text"
                placeholder="Thumb_image"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-black dark:text-gray-200">Vendor_id</label>
              <select
                id="Vendor_id"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              >
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div>
              <label class="text-black dark:text-gray-200">Category_id</label>
              <select
                id="Category_id"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              >
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div>
              <label class="text-black dark:text-gray-200">Brand_id</label>
              <select
                id="Brand_id"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              >
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div>
              <label class="text-black dark:text-gray-200" for="username">
                Qty
              </label>
              <input
                id="Qty"
                type="number"
                placeholder="Qty"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-black dark:text-gray-200" for="emailAddress">
                Weight
              </label>
              <input
                id="weight"
                type="text"
                placeholder="weight"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-black dark:text-gray-200" for="password">
                Sold_qty
              </label>
              <input
                id="Sold_qty"
                type="name"
                placeholder="Sold_qty"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-black dark:text-gray-200">
                Short_description
              </label>
              <input
                id="Short_description"
                type="name"
                placeholder="Short_description"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-black dark:text-gray-200">
                Long_description
              </label>
              <textarea
                id="textarea"
                type="textarea"
                placeholder="Long_description"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              ></textarea>
            </div>

            <div>
              <label class="text-black dark:text-gray-200">Video_link</label>
              <input
                id="Video_link"
                type="name"
                placeholder="Video_link"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-black dark:text-gray-200">SKU</label>
              <input
                id="SKU"
                type="name"
                placeholder="SKU"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-black dark:text-gray-200">IMEI</label>
              <input
                id="IMEI"
                type="number"
                placeholder="IMEI"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-black dark:text-gray-200">SEO_Title</label>
              <input
                id="SEO_Title"
                type="text"
                placeholder="SEO_Title"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-black dark:text-gray-200">
                SEO_description
              </label>
              <input
                id="SEO_description"
                type="text"
                placeholder="SEO_description"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-black dark:text-gray-200">Price</label>
              <input
                id="Price"
                type="number"
                placeholder="Price"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-black dark:text-gray-200">Offer_Price</label>
              <input
                id="Offer_Price"
                type="number"
                placeholder="Offer_Price"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-black dark:text-gray-200">Tags</label>
              <input
                id="Tags"
                type="text"
                placeholder="Tags"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-black dark:text-gray-200">Show_homePage</label>
              <select
                id="Show_homePage"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              >
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div>
              <label class="text-black dark:text-gray-200">Is_undefine</label>
              <select
                id="Is_undefine"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              >
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div>
              <label class="text-black dark:text-gray-200">Is_featured</label>
              <select
                id="Is_featured"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              >
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div>
              <label class="text-black dark:text-gray-200">New_product</label>
              <select
                id="New_product"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              >
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div>
              <label class="text-black dark:text-gray-200">Is_top</label>
              <select
                id="Is_top"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              >
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div>
              <label class="text-black dark:text-gray-200">Is_best</label>
              <select
                id="Is_best"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              >
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div>
              <label class="text-black dark:text-gray-200">Status</label>
              <select
                id="Status"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              >
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div>
              <label class="text-black dark:text-gray-200">
                Is_Specification
              </label>
              <input
                id="Is_Specification"
                type="text"
                placeholder="Is_Specification"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-black dark:text-gray-200">
                Is_refurbished
              </label>
              <input
                id="Is_refurbished"
                type="text"
                placeholder="Is_refurbished"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-black dark:text-gray-200">Is_condition</label>
              <input
                id="Is_condition"
                type="number"
                placeholder="Is_condition"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-black dark:text-gray-200">
                Brand_model_id
              </label>
              <input
                id="Brand_model_id"
                type="number"
                placeholder="Brand_model_id"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-black dark:text-gray-200">
                Battery_Condition
              </label>
              <input
                id="Battery_Condition"
                type="number"
                placeholder="Battery_Condition"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-black dark:text-gray-200">
                Product_Condition
              </label>
              <input
                id="Product_Condition"
                type="number"
                placeholder="Product_Condition"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-black dark:text-gray-200">OS</label>
              <input
                id="OS"
                type="text"
                placeholder="OS"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-black dark:text-gray-200">Processor</label>
              <input
                id="Processor"
                type="text"
                placeholder="Processor"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-black dark:text-gray-200">RAM</label>
              <input
                id="RAM"
                type="number"
                placeholder="RAM"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-black dark:text-gray-200">
                Storage_capacity
              </label>
              <input
                id="Storage_capacity"
                type="number"
                placeholder="Storage_capacity"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-black dark:text-gray-200">Display_size</label>
              <input
                id="Display_size"
                type="text"
                placeholder="Display_size"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-black dark:text-gray-200">Resolution</label>
              <input
                id="Resolution"
                type="text"
                placeholder="Resolution"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-black dark:text-gray-200">Front_Camera</label>
              <input
                id="Front_Camera"
                type="text"
                placeholder="Front_Camera"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-black dark:text-gray-200">Rear_Camera</label>
              <input
                id="Rear_Camera"
                type="text"
                placeholder="Rear_Camera"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-black dark:text-gray-200">Connectivity</label>
              <input
                id="Connectivity"
                type="text"
                placeholder="Connectivity"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-black dark:text-gray-200">Sim_type</label>
              <input
                id="Sim_type"
                type="text"
                placeholder="Sim_type"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-black dark:text-gray-200">
                Network_Technology
              </label>
              <input
                id="Network_Technology"
                type="text"
                placeholder="Network_Technology"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-black dark:text-gray-200">Pros</label>
              <input
                id="Pros"
                type="text"
                placeholder="Pros"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-black dark:text-gray-200">Cons</label>
              <input
                id="Cons"
                type="text"
                placeholder="Cons"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-black dark:text-gray-200">
                Approve_by_admin
              </label>
              <input
                id="Approve_by_admin"
                type="text"
                placeholder="Approve_by_admin"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-black">Image</label>
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg
                    class="mx-auto h-12 w-12 text-black"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label
                      for="file-upload"
                      class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span class="">Upload a file</span>
                      <input
                        id="file_upload"
                        name="file_upload"
                        type="file"
                        class="sr-only"
                        multiple
                      />
                    </label>
                    <p class="pl-1 text-black">or drag and drop</p>
                  </div>
                  <p class="text-xs text-black">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-end mt-6">
            <button class="px-6 py-2 leading-5 text-black transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-700 font-bold focus:outline-none focus:bg-gray-600">
              Save
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Real;
