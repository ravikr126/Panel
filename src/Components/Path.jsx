import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Categories from "./Categories";
import Product_list from "./Product_list";
import Prod_form from "./Prod_form";
import Order_list from "./Order_list";
import Coupons_list from "./Coupons_list";
import Coupons from "./Coupons";
import Brand_list from "./Brand_list";
import Customer_list from "./Customer_list";
import CategoryForm from "./CategoryForm";
import Customer from './Customer'
import BannerTable from "./BannerTable";
import Banner from "./Banner";
import BrandForm from "./BrandForm";

const Path = () => {
  return (
    <>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/CategoryForm" element={<CategoryForm />} />
        <Route path="/BrandForm" element={<BrandForm />} />
        <Route path="/Brand_list" element={<Brand_list />} />
        <Route path="/Product_list" element={<Product_list />} />
        <Route path="/Prod_form" element={<Prod_form />} />
        <Route path="/Order_list" element={<Order_list />} />
        <Route path="/Coupons" element={<Coupons />} />
        <Route path="/Coupons_list" element={<Coupons_list />} />
        <Route path="/Customer_list" element={<Customer_list />} />
        <Route path="/Customer" element={<Customer />} />
        <Route path="/BannerTable" element={<BannerTable />} />
        <Route path="/Banner" element={<Banner />} />

      </Routes>
    </>
  );
};

export default Path;
