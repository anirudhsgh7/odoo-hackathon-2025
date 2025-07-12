import React from "react";
import { useSelector } from "react-redux";
import User from "./User";

const UsersList = () => {
  const users = useSelector((state) => state.usersReducer);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
      {users.map((user) => (
        <User user={user} key={user?._id} />
      ))}
    </div>
  );
};

export default UsersList;
