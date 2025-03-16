import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Welcome to My Landing Page</h1>
        <p>A simple React landing page example</p>
        <button>Get Started</button>
      </header>
      <section className="content">
        <h2>Features</h2>
        <ul>
          <li>🚀 Fast and Responsive</li>
          <li>🎨 Customizable Design</li>
          <li>⚡ Built with React</li>
        </ul>
      </section>
      <footer>
        <p>© 2025 My Landing Page. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;