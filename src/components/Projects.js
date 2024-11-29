import React from 'react';
import ProjectsJson from '../projects.json'

export default function Projects() {
  return (
    <section id="projects" className="container project-section">
      <div className="project-detail-section text-white">
        <h1 className="title-project">Projects</h1>
        {ProjectsJson.projects.map((item) => {
          return (
            <div className="project-card" data-aos="fade-up" data-aos-duration="500">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src={item.image} alt={item.project_name} className="project-image" />
                  </div>
                  <div className="col-lg-8 col-sm-12">
                    <h1 className="project-title">{item.project_name}</h1>
                    <p className="project-text text-justify">{item.description}</p>
                    <p>GitHub URL : <a href={item.giturl}>&nbsp;{item.giturl}</a></p>
                    {item.appurl !== "" ? <p>Hosted URL:&nbsp;&nbsp;<a href={item.appurl}>{item.appurl}</a></p> : ""}
                    <p>Technologies : {
                      item.technologies.map((tech) => {
                        return (
                          <b>&nbsp;{tech}&nbsp; | &nbsp;</b>
                        )
                      })
                    }</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}