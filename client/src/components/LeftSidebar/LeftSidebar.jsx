import React from "react";
import { NavLink } from "react-router-dom";

const LeftSidebar = ({ slideIn, handleSlideIn }) => {
  return (
    <div
      className={`w-[260px] min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 shadow-xl rounded-r-3xl p-4 transition-transform duration-300 z-50 ${
        slideIn ? "translate-x-0" : "-translate-x-full"
      } ${window.innerWidth <= 760 ? "absolute" : "static"}`}
    >
      <div className="flex flex-col items-center gap-6 pt-10 text-center h-full">
        <h2 className="text-3xl font-extrabold text-gray-800 leading-tight tracking-wide">
          Welcome to <br />
          <span className="text-blue-600">Stack It</span>
        </h2>

        <NavLink
          to="/AskQuestion"
          onClick={handleSlideIn}
          className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl shadow hover:scale-105 hover:from-blue-600 hover:to-blue-700 transition-all duration-200"
        >
          ✍️ Ask Question
        </NavLink>

        <div
          className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center shadow hover:scale-105 transition-transform"
          onClick={handleSlideIn}
        >
          <NavLink
            to="/Users"
            className="text-sm font-medium text-gray-700 hover:text-blue-600 transition"
          >
            View Users
          </NavLink>
        </div>

        <NavLink
          to="/AllQuestions"
          onClick={handleSlideIn}
          className="w-full py-3 px-6 bg-gray-300 text-gray-800 font-semibold rounded-xl shadow hover:bg-gray-400 hover:text-gray-900 transition-all duration-200"
        >
          📋 View All Questions
        </NavLink>

        <div className="flex-1" /> {/* Spacer */}
        <p className="text-xs text-gray-400">© 2025 Stack It</p>
      </div>
    </div>
  );
};

export default LeftSidebar;
