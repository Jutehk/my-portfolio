import './About.css';
import aboutImg from '../assets/about.jpg';

const About = () => {
  return (
    <section id="about" className="about-section">
      <img src={aboutImg} alt="About me" className="about-img" />
      <div>
        <h2>About Me</h2>
        <p>
  I'm a passionate Frontend Developer with a Bachelor’s degree in <span> Mathematics and Computer Science</span>, graduating this December. I’m currently seeking an internship opportunity where I can apply my skills and continue learning in a dynamic, real-world environment.
        </p>
<p>
  I have a strong interest in software testing, as well as designing intuitive and engaging user interfaces. I love exploring new tools and technologies to enhance both functionality and user experience. I'm always curious, driven, and excited to grow in the tech space.
</p>
      </div>
    </section>
  );
};

export default About;
