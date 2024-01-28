import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { TbReportAnalytics } from "react-icons/tb";
import { CiGlobe } from "react-icons/ci";
import { LuMessageCircle } from "react-icons/lu";
import { TbShoppingBagCheck } from "react-icons/tb";
import { TbDatabaseExport } from "react-icons/tb";

const SidebarData = [
  {
    title: " Dashboard",
    path: "/Dashboard",
    icons: <MdOutlineSpaceDashboard />  ,
  },
  {
    title: "Customer",
    path: "/",
    icons: <FaUserFriends />  ,
  },
  {
    title: " All Report",
    path: "/",
    icons: <TbReportAnalytics  />  ,
  },
  {
    title: " Geography",
    path: "/",
    icons: <CiGlobe />  ,
  },
  {
    title: " Conversations",
    path: "/",
    icons: <LuMessageCircle />  ,
  },
  {
    title: " Deals",
    path: "/",
    icons: <TbShoppingBagCheck />  ,
  },
  {
    title: " Export",
    path: "/",
    icons: <TbDatabaseExport />  ,
  },

  
  
];

export default SidebarData;
