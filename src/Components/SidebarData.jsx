import { FaHome, FaProductHunt } from "react-icons/fa";
import { TbCategory } from "react-icons/tb";
import { BiSolidCoupon } from "react-icons/bi";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { MdBorderColor } from "react-icons/md";
import { FaListUl } from "react-icons/fa";

const SidebarData = [
  {
    title: " Dashboard",
    path: "/Dashboard",
    icons: <FaHome />,
  },
  {
    title: " Categories",
    path: "/Categories",
    icons: <TbCategory />,
  },
  {
    title: " Categories Form",
    path: "/CategoryForm",
    icons: <TbCategory />,
  },
  {
    title: " Brand Form",
    path: "/BrandForm",
    icons: <TbCategory />,
  },
  {
    title: " Brand List",
    path: "/Brand_list",
    icons: <TbCategory />,
  },
  {
    title: " Product List",
    path: "/Product_list",
    icons: <FaProductHunt />,
  },
  {
    title: " Product Form",
    path: "/Prod_form",
    icons: <MdFormatListBulletedAdd />,
  },
  {
    title: " Order List",
    path: "/Order_list",
    icons: <MdBorderColor />,
  },
  {
    title: " Coupons ",
    path: "/Coupons",
    icons: <BiSolidCoupon />,
  },
  {
    title: " Coupons List",
    path: "/Coupons_list",
    icons: <FaListUl />,
  },
  {
    title: " Customer List",
    path: "/Customer_list",
    icons: <FaListUl />,
  },
  {
    title: " Customer ",
    path: "/Customer",
    icons: <FaListUl />,
  },
  {
    title: " Banner ",
    path: "/Banner",
    icons: <FaListUl />,
  },
  {
    title: " Banner List ",
    path: "/BannerTable",
    icons: <FaListUl />,
  },
];

export default SidebarData;
