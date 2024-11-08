import React, { useState } from 'react';
import { FaEdit, FaUpload, FaSave } from 'react-icons/fa';

const ProfilePage = () => {
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Data Analyst',
    username:'johndoe'
  });

  const handleEditToggle = () => setEditMode(!editMode);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-4xl w-full mx-auto p-6 bg-gray-800 rounded-lg shadow-lg mt-20 border-2 border-gray-950">
        <div className="flex items-center space-x-4">
          <div className="relative w-24 h-24 text-white">
            <img
              src="public/profileImage.jpg"  // Profile Image nhi aa rhi. Fix kr liyo
              alt="Profile"
              className="rounded-full w-full h-full object-cover"
            />
            <button className="absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-700 active:bg-blue-900 p-2 rounded-full shadow-lg">
              <FaUpload />
            </button>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">
              {profileData.name}
            </h1>
            <p className="text-white">{profileData.role}</p>
          </div>
        </div>
        <div className="mt-8 space-y-4">
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <label className="block text-gray-700 font-semibold">Name</label>
            {editMode ? (
              <input
                type="text"
                name="name"
                value={profileData.name}
                onChange={handleInputChange}
                className="w-full mt-2 p-2 rounded-lg border border-gray-300"
              />
            ) : (
              <p className="mt-2">{profileData.name}</p>
            )}
          </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <label className="block text-gray-700 font-semibold">Email</label>
            {editMode ? (
              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleInputChange}
                className="w-full mt-2 p-2 rounded-lg border border-gray-300"
              />
            ) : (
              <p className="mt-2">{profileData.email}</p>
            )}
          </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <label className="block text-gray-700 font-semibold">Username</label>
            {editMode ? (
              <input
                type="username"
                name="username"
                value={profileData.username}
                onChange={handleInputChange}
                className="w-full mt-2 p-2 rounded-lg border border-gray-300"
              />
            ) : (
              <p className="mt-2">{profileData.username}</p>
            )}
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={handleEditToggle}
            className="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2"
          >
            {editMode ? (
              <>
                <FaSave />
                <span>Save</span>
              </>
            ) : (
              <>
                <FaEdit />
                <span>Edit Profile</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
