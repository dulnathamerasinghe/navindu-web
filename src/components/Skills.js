import React from 'react';
import Languages_Framework from '../language_framewrok.json'
import Tools_Technologies from '../tools_tech.json'
import Other_Tech from '../other_tech.json'

export default function Skills() {
  return (
    <section id="skills" className="container skill-section">
      <div className="skill-detail-section">
        <h1 className="title-skills">Skills</h1>
        <h3 className="sub-title-skills">Programming Languages and Frameworks</h3>
        <div className="skill-cards">
          {Languages_Framework.language_framework.map((item) => (
            <div className="skill-card">
              <div data-aos="fade-up" data-aos-duration="500">
                <img src={item.image} className="skill-image" />
                <p>{item.name}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="sub-title-skills">Tools and Technologies</h3>
        <div className="skill-cards">
          {Tools_Technologies.tools_tech.map((item) => (
            <div className="skill-card">
              <div data-aos="fade-up" data-aos-duration="500">
                <img src={item.image} className="skill-image" />
                <p>{item.name}</p>
              </div>
            </div>
          ))}
        </div>
        <h3 className="sub-title-skills">Other</h3>
        <div className="skill-cards">
          {Other_Tech.other_tech.map((item) => (
            <div className="skill-card">
              <div data-aos="fade-up" data-aos-duration="500">
                <img src={item.image} className="skill-image" />
                <p>{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}