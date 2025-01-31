import  { useState } from 'react'
import './header.css'
function Header() {
  const [showModal,setShowModal] =useState(false);

  return (
    <header className=" flex">
      <button
        onClick={() => {
          setShowModal(true);
        }}
        className="menu "
      >
        <i class="fa-solid fa-bars"></i>
      </button>
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#service">Service</a>
          </li>
          <li>
            <a href="#project">projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <button>
        <i class="fa-solid fa-moon"></i>
      </button>
      {showModal && (
        <div className=" fixed">
          <ul className="modal border">
            <li className="border">
              <button
                onClick={() => {
                  setShowModal(false);
                }}
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Learning</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;