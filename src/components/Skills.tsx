import { technicalSkills, softSkills } from '../data/skills';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skills-column">
          <h3>Technical Skills</h3>
          <ul>
            {technicalSkills.map(({ name, icon: Icon }) => (
              <li key={name} className="skill-item">
                <Icon className="skill-icon" />
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="skills-column">
          <h3>Soft Skills</h3>
          <ul>
            {softSkills.map(skill => (
              <li key={skill} className="skill-item">
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
