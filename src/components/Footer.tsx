import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p className="footer-message">
                    Crafted with love by{' '}
                    <a href="https://github.com/aspanu" target="_blank" rel="noopener noreferrer" className="footer-link">
                        Adrian
                    </a>
                </p>
                <div className="footer-links">
                    <a href="https://github.com/aspanu" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                    </a>
                    <a href="https://www.linkedin.com/in/adrianspanu/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </a>
                </div>
                <p className="footer-copyright">&copy; 2024 My Landing Page. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;