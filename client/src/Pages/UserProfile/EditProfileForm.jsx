import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../actions/users";

const EditProfileForm = ({ currentUser, setSwitch }) => {
  const [name, setName] = useState(currentUser?.result?.name);
  const [about, setAbout] = useState(currentUser?.result?.about);
  const [tags, setTags] = useState([]);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tags[0] === "" || tags.length === 0) {
      alert("Update tags field");
    } else {
      dispatch(updateProfile(currentUser?.result?._id, { name, about, tags }));
      setSwitch(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Edit Your Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-1 font-medium">Display name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">About me</label>
          <textarea
            rows="5"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Watched tags</label>
          <p className="text-sm text-gray-500 mb-1">Add tags separated by space</p>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            onChange={(e) => setTags(e.target.value.split(" "))}
          />
        </div>
        <div className="flex gap-3 pt-4">
          <input
            type="submit"
            value="Save Profile"
            className="bg-blue-600 text-white px-5 py-2 rounded-md cursor-pointer hover:bg-blue-700 transition"
          />
          <button
            type="button"
            onClick={() => setSwitch(false)}
            className="text-blue-600 hover:underline"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfileForm;
