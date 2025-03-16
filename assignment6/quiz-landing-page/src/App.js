import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "./styles.css"; 

function App() {
    return (
        <div>
            <Header title="Welcome to the Quiz App" />
            <MainContent intro="Test your knowledge and have fun!" />
            <Footer year="2025" />
        </div>
    );
}

export default App;