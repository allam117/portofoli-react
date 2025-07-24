import  { useEffect, useState } from 'react'
import './header.css'
function Header() {
  const [showModal,setShowModal] =useState(false);
  const [theme, setTheme] = useState("dark");
 useEffect(()=>{
 if(theme =="light"){
  document.body.classList.remove("dark");
  document.body.classList.add("light");


 }else{
    document.body.classList.remove("light");
    document.body.classList.add("dark");
 }
 },[theme])


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
      <button onClick={()=>{
        localStorage.setItem("cuttentMode",theme ==="dark"? "light":"dark")
        setTheme(localStorage.getItem("cuttentMode"));
      }} className='mode flex'>
        <i class="fa-solid fa-moon" ></i>
      </button>
      {showModal && (
        <div className="fixed">
          <ul className="modal border">
            <li className="border">
              <button
                onClick={() => {
                  setShowModal(false);
                }}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </li>
            <li>
              <a href="#about" onClick={() => setShowModal(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setShowModal(false)}>
                Learning
              </a>
            </li>
            <li>
              <a href="#project" onClick={() => setShowModal(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setShowModal(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;