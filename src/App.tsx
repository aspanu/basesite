import React from 'react';
import ProjectList from './components/ProjectList';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1>My Landing Page</h1>
        </div>
      </header>
      <main>
        <section className="hero">
          <div className="container">
            <h2>Welcome to My Projects</h2>
            <p>Here you can find a list of my latest projects.</p>
          </div>
        </section>
        <ProjectList />
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 My Landing Page. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;