import React, { useState, useEffect } from "react";

const generateAvatar = (username, gender) => {
    const colors = ["bg-blue-500", "bg-green-500", "bg-red-500", "bg-yellow-500", "bg-purple-500"];
    const initials = username ? username[0].toUpperCase() : "?";
    const color = colors[username.length % colors.length];
    let genderIcon = "";

    if (gender === "He") genderIcon = "♂";
    else if (gender === "She") genderIcon = "♀";
    else genderIcon = "⚧";

    return { initials, color, genderIcon };
};

const Profile = () => {
    const [username, setUsername] = useState("Anonymous");
    const [bio, setBio] = useState("Welcome to SafeSpace.");
    const [gender, setGender] = useState("Other");
    const [isEditing, setIsEditing] = useState(false);
    const [avatar, setAvatar] = useState({ initials: "?", color: "bg-gray-500", genderIcon: "⚧" });
    const [activeTab, setActiveTab] = useState("posts");

    useEffect(() => {
        setAvatar(generateAvatar(username, gender));
    }, [username, gender]);

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-50 py-8">
            {/* Profile Card */}
            <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-lg">
                {/* Avatar & Stats */}
                <div className="flex items-center space-x-6">
                    {/* Avatar */}
                    <div className={`w-20 h-20 rounded-full ${avatar.color} flex items-center justify-center text-white text-3xl font-bold`}>
                        {avatar.initials} {avatar.genderIcon}
                    </div>

                    {/* Profile Info */}
                    <div>
                        <h2 className="text-2xl font-bold">{username}</h2>
                        <p className="text-gray-600">{bio}</p>
                        <div className="flex space-x-6 mt-2">
                            <div className="text-center">
                                <span className="font-bold text-lg">12</span>
                                <p className="text-gray-500 text-sm">Posts</p>
                            </div>
                            <div className="text-center">
                                <span className="font-bold text-lg">340</span>
                                <p className="text-gray-500 text-sm">Followers</p>
                            </div>
                            <div className="text-center">
                                <span className="font-bold text-lg">180</span>
                                <p className="text-gray-500 text-sm">Following</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Edit Profile Button */}
                {isEditing ? (
                    <div className="mt-4 space-y-2">
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-2 border rounded"
                            placeholder="Enter username"
                        />
                        <textarea
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            className="w-full p-2 border rounded"
                            placeholder="Enter bio"
                        />
                        <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="w-full p-2 border rounded"
                        >
                            <option value="He">He</option>
                            <option value="She">She</option>
                            <option value="Other">Other</option>
                        </select>
                        <button onClick={() => setIsEditing(false)} className="mt-2 bg-green-500 text-white px-4 py-2 rounded w-full">
                            Save
                        </button>
                    </div>
                ) : (
                    <button onClick={() => setIsEditing(true)} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded w-full">
                        Edit Profile
                    </button>
                )}

                {/* Tabs */}
                <div className="flex justify-around mt-6 border-t pt-2">
                    <button onClick={() => setActiveTab("posts")} className={`${activeTab === "posts" ? "font-bold" : "text-gray-500"}`}>
                        Posts
                    </button>
                    <button onClick={() => setActiveTab("saved")} className={`${activeTab === "saved" ? "font-bold" : "text-gray-500"}`}>
                        Saved
                    </button>
                    <button onClick={() => setActiveTab("tagged")} className={`${activeTab === "tagged" ? "font-bold" : "text-gray-500"}`}>
                        Tagged
                    </button>
                </div>

                {/* Posts Grid */}
                <div className="mt-4 grid grid-cols-3 gap-2">
                    {activeTab === "posts" &&
                        [1, 2, 3, 4, 5, 6].map((_, index) => (
                            <div key={index} className="bg-gray-300 h-24 rounded-lg"></div>
                        ))}
                    {activeTab === "saved" && (
                        <div className="text-center text-gray-500 mt-4">No saved posts yet.</div>
                    )}
                    {activeTab === "tagged" && (
                        <div className="text-center text-gray-500 mt-4">No tagged posts yet.</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
