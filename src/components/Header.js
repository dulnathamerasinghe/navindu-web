import React, { useState } from "react";
import "../App.css";
import { Link } from "react-scroll";
import profileImage from "./navpic.jpg";
import "./Header.css"

export default function Header() {
  const [aboutActive, setAboutActive] = useState("");
  const [serviceActive, setExpActive] = useState("");
  const [eduActive, setEduActive] = useState("");
  const [projectActive, setProjectActive] = useState("");
  const [blogActive, setBlogActive] = useState("");
  const [contactActive, setContactActive] = useState("");
  const [skillActive, setSkillActive] = useState("");
  const [homeActive, setHomeActive] = useState("");
  const [galleryActive, setGalleryActive] = useState("");

  function AboutActive() {
    setAboutActive("active text-primary");
    setExpActive("");
    setEduActive("");
    setProjectActive("");
    setBlogActive("");
    setContactActive("");
    setSkillActive("");
    setHomeActive("");
    setGalleryActive("");
  }

  function ServiceActive() {
    setExpActive("active text-primary");
    setAboutActive("");
    setEduActive("");
    setProjectActive("");
    setBlogActive("");
    setContactActive("");
    setSkillActive("");
    setHomeActive("");
    setGalleryActive("");
  }

  function EducationActive() {
    setExpActive("");
    setAboutActive("");
    setEduActive("active text-primary");
    setProjectActive("");
    setBlogActive("");
    setContactActive("");
    setSkillActive("");
    setHomeActive("");
    setGalleryActive("");
  }

  function ProjectActive() {
    setExpActive("");
    setAboutActive("");
    setEduActive("");
    setProjectActive("active text-primary");
    setBlogActive("");
    setContactActive("");
    setSkillActive("");
    setHomeActive("");
    setGalleryActive("");
  }

  function BlogActive() {
    setExpActive("");
    setAboutActive("");
    setEduActive("");
    setProjectActive("");
    setBlogActive("active text-primary");
    setContactActive("");
    setSkillActive("");
    setHomeActive("");
    setGalleryActive("");
  }

  function ContactActive() {
    setExpActive("");
    setAboutActive("");
    setEduActive("");
    setProjectActive("");
    setBlogActive("");
    setContactActive("active text-primary");
    setSkillActive("");
    setHomeActive("");
    setGalleryActive("");
  }

  function SkillActive() {
    setExpActive("");
    setAboutActive("");
    setEduActive("");
    setProjectActive("");
    setBlogActive("");
    setContactActive("");
    setSkillActive("active text-primary");
    setHomeActive("");
    setGalleryActive("");
  }

  function HomeActive() {
    setExpActive("");
    setAboutActive("");
    setEduActive("");
    setProjectActive("");
    setBlogActive("");
    setContactActive("");
    setSkillActive("");
    setHomeActive("active text-primary");
    setGalleryActive("");
  }

  function GalleryActive() {
    setExpActive("");
    setAboutActive("");
    setEduActive("");
    setProjectActive("");
    setBlogActive("");
    setContactActive("");
    setSkillActive("");
    setHomeActive("");
    setGalleryActive("active text-primary");
  }

  return (
    <div>
      <nav className="navbar navbar-light navbar-expand-lg bg-white fixed-top container">
        <a className="navbar-brand" href="#" style={{ fontSize: "25px" }}>
          <img
            src={profileImage}
            width="40"
            height="40"
            style={{ borderRadius: "50%" }}
            className="d-inline-block align-top"
            alt=""
          />
          &nbsp;Navindu Amerasinghe
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${homeActive}`}
                to="home"
                onClick={HomeActive}
                smooth={true}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${aboutActive}`}
                to="aboutme"
                onClick={AboutActive}
                smooth={true}
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${serviceActive}`}
                to="service"
                onClick={ServiceActive}
                smooth={true}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${eduActive}`}
                to="education"
                onClick={EducationActive}
                smooth={true}
              >
                Education
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${skillActive}`}
                to="skills"
                onClick={SkillActive}
                smooth={true}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${projectActive}`}
                to="projects"
                onClick={ProjectActive}
                smooth={true}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${contactActive}`}
                to="contact"
                onClick={ContactActive}
                smooth={true}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${blogActive}`}
                href="https://navinduamerasinghe.blogspot.com"
                target="_blank"
                onClick={BlogActive}
              >
                Blogs
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
