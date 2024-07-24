import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectSection from './components/ProjectSection';
import proj1 from './assets/project1.webp';
import proj2 from './assets/project2.webp';
import proj3 from './assets/project3.webp';
import './App.css';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of project one.',
    image: proj1,
    link: '#'
  },
  {
    title: 'Project Two',
    description: 'A brief description of project two.',
    image: proj2,
    link: '#'
  },
  {
    title: 'Project Three',
    description: 'A brief description of project three.',
    image: proj3,
    link: '#'
  }
];

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <section className="intro-section">
          <div className="intro-container">
            <h1>Welcome to My Landing Page</h1>
            <p>Here you can find a list of my latest projects and learn more about what I do.</p>
          </div>
        </section>
        {projects.map((project, index) => (
          <ProjectSection
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            backgroundClass={index % 2 === 0 ? 'light-bg' : 'dark-bg'}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default App;