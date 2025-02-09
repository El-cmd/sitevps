import React from 'react';
import { ReactComponent as PSGLogo } from '../assets/Paris_Saint-Germain_Logo.svg';
import { ReactComponent as StarWarsLogo } from '../assets/star-wars-logo-svgrepo-com.svg';
import { ReactComponent as SchoolLogo } from '../assets/42_Logo.svg';
import '../styles/hacker.css';

const education = [
  {
    year: '2023 - Présent',
    degree: 'Formation Développeur',
    school: 'École 42',
    description: 'Formation intensive en programmation. Spécialisation en C, C++ et développement système.',
    logo: SchoolLogo
  }
];

const Education = () => {
  return (
    <div className="container">
      <div className="scan-line"></div>
      <h2 className="section-title terminal-text">
        EDUCATION_SYSTEM_ACCESS_GRANTED<span className="cursor-blink">_</span>
      </h2>
      <div className="education-items">
        {education.map((item, index) => (
          <div className="education-item" key={item.year}>
            <div className="logo-container">
              <item.logo width="100" height="100" />
            </div>
            <h3 className="terminal-text">{item.degree}</h3>
            <p className="terminal-text">Status: Completed</p>
            <p className="terminal-text">Duration: {item.year}</p>
            <p className="terminal-text">Location: {item.school}</p>
            <p className="terminal-text">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
