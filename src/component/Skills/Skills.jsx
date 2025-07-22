// 


import { useState } from "react";
import "./Skills.css";

const Skills = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleElement = (section) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  return (
    <section id="skills" className="skillsProg">
      <h2 className="skills">Skills</h2>
      <span className="Technical">Technical Level</span>
      <div className="grid">
        {/* Tools & Technologies */}
        <div className="mainSkills">
          <div className="skillFather">
            <div className="fle">
              <div>
                <h3 className="skillName">Tools & Technologies</h3>
                <span className="skillDes">More than 1 Year</span>
              </div>
              <span
                className={`but1 ${activeSection === "tools" ? "rotated" : ""}`}
                onClick={() => toggleElement("tools")}
              >
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </div>
            <ul
              className={`list1 ${activeSection === "tools" ? "active" : ""}`}
            >
              <li className="skillProg1">
                <h3>Git & Github</h3>
                <div className="skillProg1-name">
                  <div className="progress-bar">
                    <div className="progress" style={{ width: "60%" }}></div>
                  </div>
                  <span>60%</span>
                </div>
              </li>
              <li className="skillProg2">
                <h3>AWS Web Services</h3>
                <div className="skillProg1-name">
                  <div className="progress-bar">
                    <div className="progress" style={{ width: "50%" }}></div>
                  </div>
                  <span>50%</span>
                </div>
              </li>
              <li className="skillProg3">
                <h3>Unit Testing [Jest]</h3>
                <div className="skillProg1-name">
                  <div className="progress-bar">
                    <div className="progress" style={{ width: "75%" }}></div>
                  </div>
                  <span>75%</span>
                </div>
              </li>
              <li className="skillProg4">
                <h3>CI/CD</h3>
                <div className="skillProg1-name">
                  <div className="progress-bar">
                    <div className="progress" style={{ width: "70%" }}></div>
                  </div>
                  <span>70%</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Programming */}
        <div className="mainSkills">
          <div className="skillFather">
            <div className="fle">
              <div>
                <h3 className="skillName">Programming</h3>
                <span className="skillDes">More than 1 Year</span>
              </div>
              <span
                className={`but1 ${
                  activeSection === "programming" ? "rotated" : ""
                }`}
                onClick={() => toggleElement("programming")}
              >
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </div>
            <ul
              className={`list1 ${
                activeSection === "programming" ? "active" : ""
              }`}
            >
              <li className="skillProg1">
                <h3>C++</h3>
                <div className="skillProg1-name">
                  <div className="progress-bar">
                    <div className="progress" style={{ width: "60%" }}></div>
                  </div>
                  <span>60%</span>
                </div>
              </li>
              <li className="skillProg2">
                <h3>OOP</h3>
                <div className="skillProg1-name">
                  <div className="progress-bar">
                    <div className="progress" style={{ width: "50%" }}></div>
                  </div>
                  <span>50%</span>
                </div>
              </li>
              <li className="skillProg3">
                <h3>Data Structure</h3>
                <div className="skillProg1-name">
                  <div className="progress-bar">
                    <div className="progress" style={{ width: "75%" }}></div>
                  </div>
                  <span>75%</span>
                </div>
              </li>
              <li className="skillProg4">
                <h3>Algorithms</h3>
                <div className="skillProg1-name">
                  <div className="progress-bar">
                    <div className="progress" style={{ width: "70%" }}></div>
                  </div>
                  <span>70%</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Frontend Developer */}
        <div className="mainSkills">
          <div className="skillFather">
            <div className="fle">
              <div>
                <h3 className="skillName">Frontend Developer</h3>
                <span className="skillDes">Experienced</span>
              </div>
              <span
                className={`but1 ${
                  activeSection === "frontend" ? "rotated" : ""
                }`}
                onClick={() => toggleElement("frontend")}
              >
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </div>
            <ul
              className={`list1 ${
                activeSection === "frontend" ? "active" : ""
              }`}
            >
              <li className="skillProg1">
                <h3>React</h3>
                <div className="skillProg1-name">
                  <div className="progress-bar">
                    <div className="progress" style={{ width: "60%" }}></div>
                  </div>
                  <span>60%</span>
                </div>
              </li>
              <li className="skillProg2">
                <h3>HTML & CSS</h3>
                <div className="skillProg1-name">
                  <div className="progress-bar">
                    <div className="progress" style={{ width: "90%" }}></div>
                  </div>
                  <span>90%</span>
                </div>
              </li>
              <li className="skillProg3">
                <h3>JavaScript</h3>
                <div className="skillProg1-name">
                  <div className="progress-bar">
                    <div className="progress" style={{ width: "75%" }}></div>
                  </div>
                  <span>75%</span>
                </div>
              </li>
              <li className="skillProg4">
                <h3>Material UI</h3>
                <div className="skillProg1-name">
                  <div className="progress-bar">
                    <div className="progress" style={{ width: "80%" }}></div>
                  </div>
                  <span>80%</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
