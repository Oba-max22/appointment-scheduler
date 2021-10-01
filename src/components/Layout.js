import React from "react";
import SideBar from "../components/SideBar";
import "../styles/Layout.css";
import Calendar from "./Calendar";

const Layout = ({ children }) => {
  const quickActions = [

    {
      icon: "fas fa-search",
      name: "Search Anything",
      path: "/search",
      exact: true,
    },
    {
      icon: "fas fa-plus",
      name: "Add New Patient",
      path: "/add-new-patient",
      exact: true,
    },
  ];


  const manage = [
    {
      icon: "fas fa-calendar-day",
      name: "Calendar",
      path: "/",
      exact: true,
    },
    {
        icon: "fas fa-user-friends",
        name: "Manage Patients",
        path: "/manage-patients",
        exact: true,
    },
    {
        icon: "fas fa-cog",
        name: "Settings",
        path: "/settings",
        exact: true,
    },
  ];

  return (
    <div className="dashboard-wrapper">
      <SideBar quickActionItems={quickActions} manageItems={manage} />
      <div className="main-wrapper">
        <Calendar />
        {children}
      </div>
    </div>
  );
};

export default Layout;