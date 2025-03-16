import React, { useState } from "react";

const MainContent = ({ intro }) => {
    const [quizStarted, setQuizStarted] = useState(false);

    const startQuiz = () => {
        setQuizStarted(true);
    };

    return (
        <main>
            <h2>Quiz Challenge</h2>
            <p>{intro}</p>
            
            {!quizStarted ? (
                <button onClick={startQuiz}>Start Quiz</button>
            ) : (
                <p style={{ fontWeight: "bold", color: "blue" }}>Quiz Started! Good Luck!</p>
            )}
        </main>
    );
};

export default MainContent;