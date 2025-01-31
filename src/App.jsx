import Header from './component/1-header/header'
import Hero from "./component/2-hero/hero";
import Main from "./component/3-main/Main";
import Contact from "./component/4-contact/Contact";
import Footer from "./component/5-footer/Footer" ;
import Skills from './component/Skills/Skills';
import './App.css'
import Service from './component/Services/Service';


function App() {

  return (
    <div className="container">
      <Header />

      <Hero />
      <div className="divider" />

      <Skills />
      <div className="divider" />
      <Service />
      <div className="divider" />
      <Main />
      <div className="divider" />

      <Contact />
      <div className="divider" />

      <Footer />
      <div className="divider" />



 
      




    </div>
  );
}

export default App
