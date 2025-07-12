import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faPen } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import Avatar from "../../components/Avatar/Avatar";
import EditProfileForm from "./EditProfileForm";
import ProfileBio from "./ProfileBio";

const UserProfile = ({ slideIn, handleSlideIn }) => {
  const { id } = useParams();
  const users = useSelector((state) => state.usersReducer);
  const currentProfile = users.find((user) => user._id === id);
  const currentUser = useSelector((state) => state.currentUserReducer);
  const [Switch, setSwitch] = useState(false);

  return (
    <div className="home-container-1 bg-gray-50 min-h-screen">
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container-2 px-6 py-8">
        <section>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white rounded-xl shadow p-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-purple-500 text-white flex items-center justify-center rounded-full text-2xl font-bold">
                {currentProfile?.name?.charAt(0).toUpperCase()}
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-gray-800">
                  {currentProfile?.name}
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                  <FontAwesomeIcon icon={faBirthdayCake} className="mr-2" />
                  Joined {moment(currentProfile?.joinedOn).fromNow()}
                </p>
              </div>
            </div>
            {currentUser?.result._id === id && (
              <button
                onClick={() => setSwitch(true)}
                className="mt-4 sm:mt-0 px-4 py-2 text-sm border border-gray-400 rounded-md hover:bg-gray-100 flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faPen} />
                Edit Profile
              </button>
            )}
          </div>

          {Switch ? (
            <EditProfileForm currentUser={currentUser} setSwitch={setSwitch} />
          ) : (
            <ProfileBio currentProfile={currentProfile} />
          )}
        </section>
      </div>
    </div>
  );
};

export default UserProfile;
