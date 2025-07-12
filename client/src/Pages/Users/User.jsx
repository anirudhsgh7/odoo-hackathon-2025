import React from "react";
import { Link } from "react-router-dom";

// Helper to extract a proper display name
const getDisplayName = (name) => {
  if (!name) return "User";
  if (name.includes("@")) {
    const localPart = name.split("@")[0];
    return localPart.charAt(0).toUpperCase() + localPart.slice(1);
  }
  return name;
};

const User = ({ user }) => {
  const displayName = getDisplayName(user.name);

  return (
    <Link
      to={`/Users/${user._id}`}
      className="flex items-center gap-4 p-4 bg-white rounded-xl shadow hover:shadow-md transition-shadow border border-gray-200"
    >
      <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-lg font-bold">
        {displayName.charAt(0)}
      </div>
      <div>
        <h5 className="text-base font-semibold text-gray-800">{displayName}</h5>
      </div>
    </Link>
  );
};

export default User;
