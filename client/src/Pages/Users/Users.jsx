import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import UsersList from "./UsersList";

const Users = ({ slideIn, handleSlideIn }) => {
  return (
    <div className="home-container-1 bg-gray-50 min-h-screen">
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container-2 px-4 py-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-2">Users</h1>
        <p className="text-sm text-gray-500">Browse all registered users</p>
        <UsersList />
      </div>
    </div>
  );
};

export default Users;
