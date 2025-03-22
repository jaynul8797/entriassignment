import React, { useEffect, useState } from "react";
import axios from "axios";

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    
    useEffect(() => {
        axios.get("https://fakestoreapi.com/questions")
            .then(response => setQuestions(response.data))
            .catch(error => console.error("Error fetching questions:", error));
    }, []);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) setScore(score + 1);
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            alert(`Quiz completed! Your score: ${score}/${questions.length}`);
        }
    };

    return (
        <div>
            {questions.length > 0 ? (
                <div>
                    <h2>{questions[currentQuestion].question}</h2>
                    {questions[currentQuestion].options.map((option, index) => (
                        <button key={index} onClick={() => handleAnswer(option === questions[currentQuestion].correctAnswer)}>
                            {option}
                        </button>
                    ))}
                </div>
            ) : (
                <p>Loading questions...</p>
            )}
        </div>
    );
};

export default Quiz;