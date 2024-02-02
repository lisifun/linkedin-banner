import React from "react";

const Card = () => {
  return (
    <div className="card">
      <div className="name-info">
        <div className="name">
          <b>Lisandra Fundora</b>
        </div>
      </div>
      <div className="job-info">
        <div className="horizontal-line"></div>
        <div className="job">
          <b>WEB DEVELOPER</b>
        </div>
        <div className="horizontal-line"></div>
      </div>
      <div>
        <div className="contact-info">
          <div className="contact">
            <i className="fas fa-envelope"></i>
            <div>lisandrafj99@gmail.com</div>
          </div>
          <div className="contact">
            <i className="fab fa-github"></i>
            <div>github.com/lisifun</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
