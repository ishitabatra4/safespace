
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./components/profile";
import MoodFeed from './components/moodfeed';

function App() {
    return (
      
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
            <div>
           <MoodFeed />
        </div>
        </Router>
        
         
    );
}

export default App;
