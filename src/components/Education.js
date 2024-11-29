import React from "react";
import EducationJson from "../education.json";

export default function Education() {
  return (
    <section id="education" className="container education-section">
      <div className="education-detail-section text-white">
        <h1 className="title-education">Education</h1>
        <div className="row">
          {EducationJson.education.map((item) => (
            <div
              className="col-lg-4 col-md-4 col-sm-4 d-flex justify-content-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="education-card">
                <div style={{ paddingBottom: "50px" }}>
                  <img
                    src={item.image}
                    alt="school image"
                    className="education-image"
                  />
                  <h1 className="education-title">{item.title}</h1>
                  <h3 className="school">{item.school}</h3>
                  <p className="education-text">
                    {item.description} <br />
                    {item.gpa !== "" ? item.gpa : ""}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
