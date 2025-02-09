import { useState } from "react";

const Portfolio = () => {
  const [visibleSection, setVisibleSection] = useState("education");
  return (
    <section className="max-width padding-x flex items-center justify-between py-10">
      <div className="flex flex-col gap-4">
        <button onClick={() => setVisibleSection("education")}>
          Education
        </button>
        <button onClick={() => setVisibleSection("skill")}>Skill</button>
        <button onClick={() => setVisibleSection("experience")}>
          Experience
        </button>
        <button onClick={() => setVisibleSection("aboutMe")}>About Me</button>
      </div>
      <div>
        {visibleSection === "education" && <Education />}
        {visibleSection === "skill" && <Skill />}
        {visibleSection === "experience" && <Experience />}
        {visibleSection === "aboutMe" && <AboutMe />}
      </div>
    </section>
  );
};

export default Portfolio;

const Education = () => {
  return <h1>Eduction</h1>;
};

const Skill = () => {
  return <h1>Skill</h1>;
};

const Experience = () => {
  return <h2>Experience</h2>;
};

const AboutMe = () => {
  return <h1> About me </h1>;
};
