import React from 'react';
import './hero.css';

function Hero() {
  return (
    <section id="about" className="hero flex">
      <div className="left-section ">
        <div className="myImg">
          <img src="./me.jpg" className="avatar" alt="" />
          <span className="iconImg">
            <i class="fa-sharp fa-solid fa-badge-check"></i>
          </span>
        </div>
        <h2 className="title"> Front End Web Developer </h2>
        <p className="sub-title">
          Hello! I'm Ahmed Allam, a passionate Front End Web Developer with a
          keen eye for detail and a love for crafting engaging and user-friendly
          web experiences. With a strong foundation in HTML, CSS, and
          JavaScript, coupled with expertise in modern frameworks like React I
          bring creative and technical solutions to life on the web.
        </p>
        <div className="all-icons flex">
          <div
            className="icon-linkedin"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/ahmed-allam-507271307?",
                "_blank"
              )
            }
            
            style={{ cursor: "pointer" }}
          >
            <i className="fa-brands fa-linkedin"></i>
          </div>
          <div className="icon-gitHup">
            <i class="fa-brands fa-github"></i>
          </div>
          <div
            className="icon-watsApp"
            onClick={() => window.open("https://wa.me/01096996792", "_blank")}
            style={{ cursor: "pointer" }}
          >
            <i className="fa-brands fa-whatsapp"></i>
          </div>
          <div
            className="icon-facebook"
            onClick={() =>
              window.open(
                "https://https://www.facebook.com/share/1A6mpkPVZH/",
                "_blank"
              )
            }
            style={{ cursor: "pointer" }}
          >
            <i class="fa-brands fa-facebook"></i>
          </div>
        </div>
      </div>
      <div className="right-section animation border"></div>
    </section>
  );
}



export default Hero;