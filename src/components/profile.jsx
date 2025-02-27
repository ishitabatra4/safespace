import React, { useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    name: "Anonymous User",
    gender: "other",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(user.name);
  const [newGender, setNewGender] = useState(user.gender);

  const handleSave = () => {
    setUser({
      name: newName,
      gender: newGender,
    });
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg md:flex-row md:items-center md:justify-between md:space-x-6 lg:max-w-6xl">
      {/* Avatar Section */}
      <div className="flex flex-col items-center md:w-1/3 lg:w-1/4">
        <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full bg-gray-300 flex items-center justify-center text-2xl font-bold">
          {user.gender === "he" ? "👦" : user.gender === "she" ? "👧" : "🧑"}
        </div>
        <h2 className="mt-4 text-xl font-semibold text-center md:text-left">{user.name}</h2>
        <p className="text-gray-600">Your safe space</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={() => setIsEditing(true)}
        >
          Edit Profile
        </button>
      </div>

      {/* Edit Profile Modal */}
      {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">Edit Profile</h2>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="w-full p-2 border rounded mb-3"
              placeholder="Enter your name"
            />
            <select
              value={newGender}
              onChange={(e) => setNewGender(e.target.value)}
              className="w-full p-2 border rounded mb-3"
            >
              <option value="he">He</option>
              <option value="she">She</option>
              <option value="other">Other</option>
            </select>
            <div className="flex justify-end space-x-2">
              <button
                className="px-4 py-2 bg-gray-300 rounded-lg"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;