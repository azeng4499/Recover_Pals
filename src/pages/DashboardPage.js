import React from "react";
import Dashboard from "../Components/DashboardComponents/Dashboard";
import DashNav from "../Components/DashboardComponents/DashNav/DashNav";
import HomePage from './HomePage'
import { auth } from '../Firebase'

const DashboardPage = () => {
  return (
    <>
      {auth.currentUser ? (
        <>
          <DashNav />
          <Dashboard />
        </>
      ) : (
        <HomePage />
      )}
    </>
  );
};

export default DashboardPage;
