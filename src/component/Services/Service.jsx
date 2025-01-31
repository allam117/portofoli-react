

import { useState } from "react";
import ReactDOM from "react-dom"; 
import "./Service.css";

const Service = () => {
  const [service, setService] = useState(false);
  const [service1, setService1] = useState(false);
  const [service2, setService2] = useState(false);
  const [service3, setService3] = useState(false);

 
  const Modal = ({ children, onClose }) => {
    return ReactDOM.createPortal(
      <div className="sercicefx">
        <ul className="modal border">
          <div className="father">
            <div></div>
            <div>
              <button className="close" onClick={onClose}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
          <div className="modall">
            <div>{children}</div>
          </div>
        </ul>
      </div>,
      document.getElementById("modal-root")
    );
  };

  return (
    <div id="service">
      <h2 className="skillss">Services</h2>

      <section className="services">
        
        <article className="card">
          <div style={{ width: "300px", height: "200px" }} className="box">
            <h1 className="title">
              Dynamic<br></br> Websites<br></br> Development
            </h1>
            <div className="flex icons">
              <div style={{ gap: "11px" }} className="flex">
                <div className="icon">
                  <i className="fa-sharp-duotone fa-solid fa-link"></i>
                </div>
                <div className="getHup">
                  {" "}
                  <i className="fa-brands fa-github"></i>
                </div>
              </div>
              <a
                className="link flex"
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  setService(true);
                }}
              >
                more
                <span style={{ alignSelf: "end" }} className="arrow">
                  {" "}
                  <i className="fa-solid fa-arrow-right"></i>{" "}
                </span>
              </a>
            </div>
          </div>
        </article>

        <article className="card">
          <div style={{ width: "300px", height: "200px" }} className="box">
            <h1 className="title">
              Migrating<br></br> Apps from Legacy <br></br>Systems
            </h1>
            <div className="flex icons">
              <div style={{ gap: "11px" }} className="flex">
                <div className="icon">
                  <i className="fa-sharp-duotone fa-solid fa-link"></i>
                </div>
                <div className="getHup">
                  {" "}
                  <i className="fa-brands fa-github"></i>
                </div>
              </div>
              <a
                className="link flex"
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  setService1(true);
                }}
              >
                more
                <span style={{ alignSelf: "end" }} className="arrow">
                  {" "}
                  <i className="fa-solid fa-arrow-right"></i>{" "}
                </span>
              </a>
            </div>
          </div>
        </article>

     
        <article className="card">
          <div style={{ width: "300px", height: "200px" }} className="box">
            <h1 className="title">
              UI/UX <br></br>Development
            </h1>
            <div className="flex icons">
              <div style={{ gap: "11px" }} className="flex">
                <div className="icon">
                  <i className="fa-sharp-duotone fa-solid fa-link"></i>
                </div>
                <div className="getHup">
                  {" "}
                  <i className="fa-brands fa-github"></i>
                </div>
              </div>
              <a
                className="link flex"
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  setService2(true);
                }}
              >
                more
                <span style={{ alignSelf: "end" }} className="arrow">
                  {" "}
                  <i className="fa-solid fa-arrow-right"></i>{" "}
                </span>
              </a>
            </div>
          </div>
        </article>

        {/* Card 4 */}
        <article className="card">
          <div style={{ width: "300px", height: "200px" }} className="box">
            <h1 className="title">
              Maintenance<br></br> and Support
            </h1>
            <div className="flex icons">
              <div style={{ gap: "11px" }} className="flex">
                <div className="icon">
                  <i className="fa-sharp-duotone fa-solid fa-link"></i>
                </div>
                <div className="getHup">
                  {" "}
                  <i className="fa-brands fa-github"></i>
                </div>
              </div>
              <a
                className="link flex"
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  setService3(true);
                }}
              >
                more
                <span style={{ alignSelf: "end" }} className="arrow">
                  {" "}
                  <i className="fa-solid fa-arrow-right"></i>{" "}
                </span>
              </a>
            </div>
          </div>
        </article>
      </section>

   

  
      {service && (
        <Modal onClose={() => setService(false)}>
          <div>Dynamic Websites Development</div>
          <li>
            <a href="">
              1- Flexible and quick change on the user’s computer without new
              page request to the web browser.
            </a>
          </li>
          <li>
            <a href="">
              2- Provide ability to simply update and add new content to the
              site.
            </a>
          </li>
          <li>
            <a href="">
              3- Share your project requirements for the perfect mix of talent
              and expertise.
            </a>
          </li>
        </Modal>
      )}

     
      {service1 && (
        <Modal onClose={() => setService1(false)}>
          <div>Migrating Apps from Legacy Systems</div>
          <li>
            <a href="">1- Assists in adopting system functionality.</a>
          </li>
          <li>
            <a href="">
              2- Wrapping the code of your existing architecture into modules.
            </a>
          </li>
          <li>
            <a href="">
              3- Update your application while eliminating challenges and
              issues.
            </a>
          </li>
        </Modal>
      )}

      {/* Modal 3 */}
      {service2 && (
        <Modal onClose={() => setService2(false)}>
          <div>UI/UX Development</div>
          <li>
            <a href="">
              1- Build interactive UIs and impressive web applications that
              attract users.
            </a>
          </li>
          <li>
            <a href="">
              2- Deliver highly-engaging interface development using the latest
              features of ReactJS.
            </a>
          </li>
        </Modal>
      )}

    
      {service3 && (
        <Modal onClose={() => setService3(false)}>
          <div>Maintenance and Support</div>
          <li>
            <a href="">
              1- Renders maintenance and support services for consistent and
              stable performance of applications.
            </a>
          </li>
          <li>
            <a href="">
              2- I can also update your app functionality on demand.
            </a>
          </li>
        </Modal>
      )}
    </div>
  );
};

export default Service;