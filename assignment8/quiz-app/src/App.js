import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Quiz from "./components/Quiz";
import Leaderboard from "./components/Leaderboard";

const App = () => {
    return (
        <Router>
            <nav>
                <Link to="/">Quiz</Link>
                <Link to="/leaderboard">Leaderboard</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Quiz />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes>
        </Router>
    );
};

export default App;