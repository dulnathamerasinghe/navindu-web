import React from 'react';
import mobile from '../images/mobile.png'
import web from '../images/web.png'
import prototype from '../images/prototype.png'
import AOS from 'aos'

export default function Service() {
  return (
    <section id="service" className="service-section container">
      <div className="service-detail-section">
        <h1 className="title-aboutme">My Services</h1>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 d-flex justify-content-center" data-aos="fade-up" data-aos-duration="1100">
            <div className="card">
              <div className="card-body">
                <h4>Mobile Application Development</h4>
                <img src={mobile} alt="mobile development image" className="card-icons-mobile"/>
                <p className="service-text text-justify">
                  Develop Android base application with amazing UI and UX designs. Be more interacted with
                  your customers with having simple and unique mobile applications.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 d-flex justify-content-center" data-aos="fade-up" data-aos-duration="1300">
            <div className="card">
              <div className="card-body">
                <h4>Web Application Development</h4>
                <img src={web} alt="mobile development image" className="card-icons-web"/>
                <p className="service-web-text text-justify">
                  Design and develop fully integrated web based application for manage any kind of business work in your
                  organization with using cutting-edge technologies.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4  d-flex justify-content-center" data-aos="fade-up" data-aos-duration="1500">
            <div className="card">
              <div className="card-body">
                <h4>Web Designing and Prototyping</h4>
                <img src={prototype} alt="mobile development image" className="card-icons-design"/>
                <p className="service-design-text text-justify">
                  Design very unique and striking user interfaces by applying latest UX/UI technologies. And I can create 
                  amazing website for your business with having beautiful user interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}