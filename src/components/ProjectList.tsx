import React from 'react';
import './ProjectList.css';

interface Project {
    title: string;
    description: string;
    link: string;
}

const projects: Project[] = [
    {
        title: 'Project One',
        description: 'A brief description of project one.',
        link: '#'
    },
    {
        title: 'Project Two',
        description: 'A brief description of project two.',
        link: '#'
    },
    {
        title: 'Project Three',
        description: 'A brief description of project three.',
        link: '#'
    }
];

const ProjectList: React.FC = () => {
    return (
        <section className="project-list">
            <h2>Our Projects</h2>
            <div className="projects">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} className="project-link">Learn More</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectList;