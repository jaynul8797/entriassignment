import React, { useEffect, useState } from "react";
import axios from "axios";

const Leaderboard = () => {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/leaderboard")
            .then(response => setScores(response.data))
            .catch(error => console.error("Error fetching leaderboard:", error));
    }, []);

    return (
        <div>
            <h2>Leaderboard</h2>
            <ul>
                {scores.map((entry, index) => (
                    <li key={index}>{entry.username}: {entry.score}</li>
                ))}
            </ul>
        </div>
    );
};

export default Leaderboard;