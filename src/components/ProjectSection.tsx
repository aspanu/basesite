import React from 'react';
import './ProjectSection.css';

interface ProjectSectionProps {
    title: string;
    description: string;
    image: string;
    link: string;
    backgroundClass: string;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ title, description, image, link, backgroundClass }) => {
    return (
        <section className={`project-section ${backgroundClass}`}>
            <div className="project-content">
                <div className="project-image-container">
                    <img src={image} alt={title} className="project-image" />
                </div>
                <div className="project-text">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <a href={link} className="project-link">Learn More</a>
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;