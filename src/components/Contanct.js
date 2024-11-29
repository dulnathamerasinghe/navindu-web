import React, { useState } from "react";
// import emailjs from "emailjs-com";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [header, setHeader] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_fjzdw1o";
    const templateId = "template_2kq4m5t";
    const publicKey = "ai-wJDYwkx0XjYQYS";

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Navindu Amerasinghe",
      header: header,
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
        setHeader("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
    e.target.reset();
  }

  return (
    <section id="contact" className="container contact-section">
      <div className="contact-detail-section">
        <h1 className="title-contact">Contact Me</h1>
        <div className="d-flex justify-content-center pt-5">
          <div className="form-text custom-form">
            <form onSubmit={sendEmail}>
              <div class="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter your name here"
                  name={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div class="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="enter your email here"
                  name={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div class="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter message subject"
                  name={header}
                  onChange={(e) => setHeader(e.target.value)}
                  required
                />
              </div>
              <div class="form-group">
                <label>Message</label>
                <textarea
                  class="form-control"
                  rows="5"
                  placeholder="enter your message"
                  name={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn btn-block">
                Send Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
