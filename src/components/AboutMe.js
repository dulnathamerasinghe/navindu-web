import React from "react";
import "../App.css";
import Button from '@mui/material/Button';
import CV from '@mui/icons-material/InsertDriveFile';
import AOS from "aos";
import { Link } from "react-scroll";

export default function AboutMe() {
  const downloadPDF = () => {
    window
      .open
      //"https://firebasestorage.googleapis.com/v0/b/portfolio-2b348.appspot.com/o/rusiru_abhisheak.pdf?alt=media&token=6af613dd-04b3-4dcd-af88-0f258ef7cfeb"
      ();
  };
  return (
    <section id="aboutme" className="aboutme-section container">
      <div className="aboutme-detail-section text-white" data-aos-offset="500">
        <h1 className="title-aboutme">About Me</h1>
        <p className="aboutme-text text-justify">
          Hello, I'm Navindu Amerasinghe and I am a Passionate Software Engineer
          at Sri Lanka Institute of Information Technology (SLIIT) University
          with a strong interest in Information Technology and Software
          development. Eager to learn and gain valuable experience in software
          engineering to excel as a future industry professional. A dedicated
          team player and quick learner. I am enthusiastic about contributing my
          best to employers.
        </p>

        <div data-aos="fade-up" data-aos-duration="1400">
          <Button
            variant="contained"
            className="download-btn"
             
            style={{
              outline: "none",
              fontFamily: "Lexend Deca Regular",
              background: "#1E90FF",
              color: "#ffffff",
              height: "50px",
              borderRadius: "10px",
              marginTop: "10px",
              marginBottom: "40px",
            }}
            onClick={(e) => downloadPDF()}
            disableElevation
          >
            get my cv here
          </Button>
        </div>
      </div>
    </section>
  );
}
