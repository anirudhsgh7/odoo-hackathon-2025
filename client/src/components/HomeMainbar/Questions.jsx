import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Questions = ({ question }) => {
  const titleLimit = window.innerWidth <= 400 ? 70 : 90;
  const title =
    question.questionTitle.length > titleLimit
      ? question.questionTitle.substring(0, titleLimit) + "..."
      : question.questionTitle;

  return (
    <div>
                <Link
            to={`/Questions/${question._id}`}
            
          >
    <div className="p-4 bg-white rounded-2xl shadow-md border border-gray-200 transition-transform duration-200 hover:shadow-lg hover:scale-[1.015]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        {/* Votes & Answers */}
        <div className="flex flex-row md:flex-col gap-4 md:gap-2 text-center font-semibold text-gray-600 min-w-[80px]">
          <div>
            <p className="text-lg text-blue-700">{question.upVote.length - question.downVote.length}</p>
            <p className="text-xs">votes</p>
          </div>
          <div>
            <p className="text-lg text-green-600">{question.noOfAnswers}</p>
            <p className="text-xs">answers</p>
          </div>
        </div>

        {/* Question Details */}
        <div className="flex-1">
          <Link
            to={`/Questions/${question._id}`}
            className="text-blue-700 text-lg font-medium hover:underline hover:text-blue-800 transition-colors duration-150"
          >
            {title}
          </Link>

          <div className="mt-3 flex flex-wrap justify-between items-center text-sm text-gray-500">
            <div className="flex flex-wrap gap-2 mb-1">
              {question.questionTags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-xs text-right md:text-left">
              asked {moment(question.askedOn).fromNow()} by{" "}
              <span className="font-semibold text-gray-700">
                {question.userPosted}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    </Link>
    </div>
  );
};

export default Questions;
