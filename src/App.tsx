import React from 'react';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app" id="root">
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
        <div className="container">
          <ProjectList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;