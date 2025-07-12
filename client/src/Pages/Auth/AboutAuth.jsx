import React from "react";

const AboutAuth = () => {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold text-gray-800">Join the StackIT community</h1>
      <ul className="text-gray-600 text-sm list-disc ml-5 space-y-1">
        <li>Get unstuck — ask a question</li>
        <li>Unlock privileges like voting & commenting</li>
        <li>Save your favorite tags, filters, and jobs</li>
        <li>Earn reputation and badges</li>
      </ul>
      <p className="text-xs text-gray-500 mt-3">
        Collaborate and share knowledge with a private group for your team.
      </p>
      <p className="text-xs text-blue-600 font-medium cursor-pointer">
        Get Stack Overflow for Teams free for up to 50 users.
      </p>
    </div>
  );
};

export default AboutAuth;
