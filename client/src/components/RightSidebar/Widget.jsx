import React from "react";
import comment from "../../assets/comment-alt-solid.svg";
import pen from "../../assets/pen-solid.svg";
import blackLogo from "../../assets/blacklogo.svg";

const Widget = () => {
  const widgetSection = (title, items) => (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <h4 className="bg-yellow-100 text-yellow-800 font-medium text-sm px-4 py-2 border-b border-yellow-300">
        {title}
      </h4>
      <div className="p-4 space-y-3">
        {items.map((item, index) => (
          <div key={index} className="flex gap-3 items-start text-sm text-gray-700">
            {item.icon && (
              <img src={item.icon} alt="icon" className="w-5 mt-1 opacity-80" />
            )}
            <p className="leading-snug">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {widgetSection("Tech Industry Trends", [
        { icon: pen, text: "Why WebAssembly is the future of cross-platform apps" },
        { icon: pen, text: "AI-powered coding assistants: Blessing or curse?" },
      ])}

      {widgetSection("Developer News", [
        { icon: comment, text: "Stack Overflow's new moderation guidelines explained" },
        { icon: comment, text: "GitHub Copilot expands support for enterprise teams" },
        { icon: blackLogo, text: "Vercel announces Turbo 2.0 build engine" },
      ])}

      {widgetSection("Recent Discussions", [
        { text: "42 – Should we switch from REST to GraphQL by default?" },
        { text: "28 – What's the future of state management in React 19?" },
        { text: "19 – Are microservices over-engineering for small teams?" },
      ])}
    </div>
  );
};

export default Widget;
