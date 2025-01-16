// src/components/Experience.tsx
import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'Adobe Photoshop', progress: 90 },
    { name: 'Adobe Illustrator', progress: 85 },
    { name: 'Adobe After Effects', progress: 97 },
    { name: 'Sketch', progress: 90 },
    { name: 'HTML 5', progress: 90 },
    { name: 'CSS 3 Animation', progress: 85 },
    { name: 'Communication', progress: 97 },
    { name: 'Creativity', progress: 90 },
  ];
  return (
    <section id="skills" className="skills py-0 bg-white">
      <div className="skill-content py-12">
        <div className="section-heading text-center mb-12">
          <h2 className="text-3xl font-semibold text-uppercase border-b-2 pb-8 border-gray-200">Skills</h2>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="single-skill-content pt-24">
                <div className="barWrapper uppercase font-medium text-lg mb-6">
                  <span className="progressText">{skill.name}</span>
                </div>
                <div className="single-progress-txt flex items-center">
                  <div className="progress bg-gray-200 rounded-full w-4/5 h-2.5 mb-9">
                    <div
                      className="progress-bar bg-purple-600 rounded-full h-full transition-all duration-1500"
                      style={{ width: `${skill.progress}%` }}
                    ></div>
                  </div>
                  <h3 className="text-purple-600 ml-4 text-xl">{skill.progress}%</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
