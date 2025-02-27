import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-4">Welcome to SafeSpace</h1>
            
            {/* Profile Button */}
            <Link to="/profile" className="bg-blue-500 text-white px-4 py-2 rounded">
                Go to Profile
            </Link>
        </div>
    );
};

export default Home;
