import { useState } from 'react';
import './main.css';

function Main() {
  const [currentActive, setcurrentActive] = useState("all");
  return (
    <main id="project" className="flex">
      <section className="flex  left-section ">
        <button
          onClick={() => {
            setcurrentActive("all");
          }}
          className={currentActive === "all" ? "active" : null}
        >
          All Project
        </button>
        <button
          onClick={() => {
            setcurrentActive("css");
          }}
          className={currentActive === "css" ? "active" : null}
        >
          HTML&CSS
        </button>
        <button
          onClick={() => {
            setcurrentActive("Java");
          }}
          className={currentActive === "Java" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            setcurrentActive("  React & MUL");
          }}
          className={currentActive === "  React & MUL" ? "active" : null}
        >
          React & MUL
        </button>
        <button
          onClick={() => {
            setcurrentActive("   Node & Express");
          }}
          className={currentActive === "   Node & Express" ? "active" : null}
        >
          Node & Express
        </button>
      </section>
      <section className=" right-section flex  ">
        <article className="  card">
          <img width={270} src="./img/img1.png" alt="" />
          <div style={{ width: "266px", height: "190px" }} className=" box">
            <h2 className="title">El Noor Electrical Project</h2>
            <p className="sub-title">
              Al Noor Electrical Appliances Exhibition Project for selling
              electrical appliances
            </p>
            <div className="flex icons">
              <div style={{ gap: "11px" }} className="flex">
                <div className="icon">
                  <i class="fa-sharp-duotone fa-solid fa-link"></i>
                </div>
                <div className="getHup">
                  {" "}
                  <a
                    href="https://github.com/allam117/shop.git"
                    target="_blank"
                  >
                    <i class="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>
              <a className="link flex" href="https://elnoor-shop.vercel.app">
                more
                <span style={{ alignSelf: "end" }} className="arrow">
                  {" "}
                  <i class="fa-solid fa-arrow-right"></i>{" "}
                </span>
              </a>
            </div>
          </div>
        </article>
        <article className="  card">
          <img width={260} height={130} src="./img/img3.png" alt="" />
          <div style={{ width: "266px", height: "190px" }} className=" box">
            <h2 className="title">Omnifood project</h2>
            <p className="sub-title">
              Restaurant to display menu and customers
            </p>
            <div className="flex icons">
              <div style={{ gap: "11px" }} className="flex">
                <div className="icon">
                  <i class="fa-sharp-duotone fa-solid fa-link"></i>
                </div>
                <div className="getHup">
                  {" "}
                  <a
                    href="https://github.com/allam117/Food-App1.git"
                    target="_blank"
                  >
                    <i class="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>
              <a
                className="link flex"
                href="https://66ad0122a22e2a7aa6ea360e--famous-longma-a83d0e.netlify.app/"
              >
                more
                <span style={{ alignSelf: "end" }} className="arrow">
                  {" "}
                  <i class="fa-solid fa-arrow-right"></i>{" "}
                </span>
              </a>
            </div>
          </div>
        </article>
        <article className="  card">
          <img width={270} src="./img/img2.png" alt="" />
          <div style={{ width: "266px", height: "190px" }} className=" box">
            <h2 className="title">Dice game project</h2>
            <p className="sub-title">
              A dice game between two competitors so that one of them wins
            </p>
            <div className="flex icons">
              <div style={{ gap: "11px" }} className="flex">
                <div className="icon">
                  <i class="fa-sharp-duotone fa-solid fa-link"></i>
                </div>
                <div className="getHup">
                  {" "}
                  <a
                    href="https://github.com/allam117/dice-game.git"
                    target="_blank"
                  >
                    <i class="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>
              <a
                className="link flex"
                href="https://66acfd7bfa36556724c7d178--famous-pixie-6a6d58.netlify.app/"
              >
                more
                <span style={{ alignSelf: "end" }} className="arrow">
                  {" "}
                  <i class="fa-solid fa-arrow-right"></i>{" "}
                </span>
              </a>
            </div>
          </div>
        </article>
        <article className="  card">
          <img width={270} src="./img/img4.png" alt="" />
          <div style={{ width: "266px", height: "190px" }} className=" box">
            <h2 className="title">Bankist project</h2>
            <p className="sub-title">
              Bankist project to display a person's balance and banking
              transactions
            </p>
            <div className="flex icons">
              <div style={{ gap: "11px" }} className="flex">
                <div className="icon">
                  <i class="fa-sharp-duotone fa-solid fa-link"></i>
                </div>
                <div className="getHup">
                  {" "}
                  <a
                    href="https://github.com/allam117/bankist.git"
                    target="_blank"
                  >
                    <i class="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>
              <a
                className="link flex"
                href="https://peaceful-capybara-d4bff0.netlify.app/"
              >
                more
                <span style={{ alignSelf: "end" }} className="arrow">
                  {" "}
                  <i class="fa-solid fa-arrow-right"></i>{" "}
                </span>
              </a>
            </div>
          </div>
        </article>

        <article className="  card">
          <img width={260} height={130} src="./img/img5.png" alt="" />
          <div style={{ width: "266px", height: "190px" }} className=" box">
            <h2 className="title">To Do App</h2>
            <p className="sub-title">
              Daily Tasks Arrangement and Organization Project with react{" "}
            </p>
            <div className="flex icons">
              <div style={{ gap: "11px" }} className="flex">
                <div className="icon">
                  <i class="fa-sharp-duotone fa-solid fa-link"></i>
                </div>
                <div className="getHup">
                  {" "}
                  <a
                    href="https://github.com/allam117/To-Do-APP"
                    target="_blank"
                  >
                    <i class="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>
              <a
                className="link flex"
                href="https://66ad0122a22e2a7aa6ea360e--famous-longma-a83d0e.netlify.app/"
              >
                more
                <span style={{ alignSelf: "end" }} className="arrow">
                  {" "}
                  <i class="fa-solid fa-arrow-right"></i>{" "}
                </span>
              </a>
            </div>
          </div>
        </article>

        <article className="  card">
          <img width={270} src="./img/salah.png" alt="" />
          <div style={{ width: "266px", height: "190px" }} className=" box">
            <h2 className="title">Prayer times</h2>
            <p className="sub-title">
              It is a program that determines the date and times of prayer.
            </p>
            <div className="flex icons">
              <div style={{ gap: "11px" }} className="flex">
                <div className="icon">
                  <i class="fa-sharp-duotone fa-solid fa-link"></i>
                </div>
                <div className="getHup">
                  {" "}
                  <a
                    href="prayer-times-1a50zg94w-allam117s-projects.vercel.app"
                    target="_blank"
                  >
                    <i class="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>
              <a
                className="link flex"
                href="https://incomparable-frangipane-8a17f6.netlify.app/"
              >
                more
                <span style={{ alignSelf: "end" }} className="arrow">
                  {" "}
                  <i class="fa-solid fa-arrow-right"></i>{" "}
                </span>
              </a>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Main