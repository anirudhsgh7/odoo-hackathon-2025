import React from "react";

const WidgetTags = () => {
  const tags = [
    "c", "css", "express", "firebase", "html", "java",
    "javascript", "mern", "mongodb", "mysql", "next.js",
    "node.js", "php", "python", "reactjs",
  ];

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <h4 className="bg-gray-100 text-gray-700 font-medium text-sm px-4 py-2 border-b border-gray-300">
        Watched Tags
      </h4>
      <div className="flex flex-wrap gap-2 px-4 py-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WidgetTags;
