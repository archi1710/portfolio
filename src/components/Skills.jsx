import {
  FaGithub,
  FaLinkedin,
  FaNodeJs
} from "react-icons/fa";

import { SiTailwindcss } from "react-icons/si";

function Skills() {
  return (
    <section className="section">

      <h2>Skills</h2>

      <div className="skills-container">

        <div className="box">C</div>

        <div className="box">HTML</div>

        <div className="box">CSS</div>

        <div className="box">JavaScript</div>

      </div>

      <h2>Tools</h2>

      <div className="skills-container">

        <div className="box">
          <FaGithub /> GitHub
        </div>

        <div className="box">
          <FaLinkedin /> LinkedIn
        </div>

        <div className="box">
          <FaNodeJs /> Node.js
        </div>

        <div className="box">
          <SiTailwindcss /> Tailwind CSS
        </div>

      </div>

    </section>
  );
}

export default Skills;