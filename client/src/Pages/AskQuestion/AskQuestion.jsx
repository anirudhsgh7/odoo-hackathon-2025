import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { askQuestion } from "../../actions/question";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AskQuestion = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [questionTags, setQuestionTags] = useState("");

  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (User) {
      if (questionTitle && questionBody && questionTags) {
        dispatch(
          askQuestion(
            {
              questionTitle,
              questionBody,
              questionTags,
              userPosted: User.result.name,
            },
            navigate
          )
        );
      } else alert("Please enter all the fields");
    } else alert("Login to ask question");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-semibold mb-8 text-gray-800">
          Ask a Public Question
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Title Field */}
          <div>
            <label htmlFor="ask-ques-title" className="block mb-1 text-gray-700 font-medium">
              Title
            </label>
            <p className="text-sm text-gray-500 mb-2">
              Be specific and imagine you’re asking a question to another person
            </p>
            <input
              type="text"
              id="ask-ques-title"
              onChange={(e) => setQuestionTitle(e.target.value)}
              placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Body Field */}
          <div>
            <label htmlFor="ask-ques-body" className="block mb-1 text-gray-700 font-medium">
              Body
            </label>
            <p className="text-sm text-gray-500 mb-2">
              Include all the information someone would need to answer your question
            </p>
            <ReactQuill
              theme="snow"
              value={questionBody}
              onChange={setQuestionBody}
              className="bg-white"
            />
          </div>

          {/* Tags Field */}
          <div>
            <label htmlFor="ask-ques-tags" className="block mb-1 text-gray-700 font-medium">
              Tags
            </label>
            <p className="text-sm text-gray-500 mb-2">
              Add up to 5 tags to describe what your question is about
            </p>
            <input
              type="text"
              id="ask-ques-tags"
              onChange={(e) => setQuestionTags(e.target.value.split(" "))}
              placeholder="e.g. (xml typescript wordpress)"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="text-right">
            <input
              type="submit"
              value="Review Your Question"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200 cursor-pointer"
            />
          </div>
        </form>
      </div>

      <style>{`
        .ql-container {
          min-height: 200px;
          border-radius: 0.375rem;
          border: 1px solid #d1d5db; /* Tailwind gray-300 */
        }
        .ql-toolbar {
          border-radius: 0.375rem 0.375rem 0 0;
          border: 1px solid #d1d5db;
        }
      `}</style>
    </div>
  );
};

export default AskQuestion;
