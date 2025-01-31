import React from 'react';
import './contact.css';
function Contact() {
  return (
    <section className="contact-us" id='contact'>
      <h1 className="title">
        <span className="email">
          <i class="fa-solid fa-id-card"></i>
        </span>
        Contact Us
      </h1>
      <p className="sub-title">
        Contact us for more information and Get notified when I publish
        something new.
      </p>
      <div className="flex">
        <form className="">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input required type="email" name="" id="email" />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message"> Your message:</label>
            <textarea required name="" id="message"></textarea>
          </div>
          <button className="submit">Submit</button>
        </form>
        <div className="border animation"></div>
      </div>
    </section>
  );
}

export default Contact