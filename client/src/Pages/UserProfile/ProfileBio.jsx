import React from "react";

const ProfileBio = ({ currentProfile }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 space-y-6">
      <div>
        <h4 className="text-md font-semibold text-gray-700 mb-2">Watched Tags</h4>
        {currentProfile?.tags?.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {currentProfile.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500">0 tags watched</p>
        )}
      </div>
      <div>
        <h4 className="text-md font-semibold text-gray-700 mb-2">About</h4>
        {currentProfile?.about ? (
          <p className="text-gray-700">{currentProfile.about}</p>
        ) : (
          <p className="text-sm text-gray-500">No bio found</p>
        )}
      </div>
    </div>
  );
};

export default ProfileBio;
