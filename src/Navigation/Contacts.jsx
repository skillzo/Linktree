import React from "react";
import { Wrapper } from "../Components/Wrapper/Wrapper";
import CheckboxLabels from "../Components/Button/Checkbox";
import "./contact.css";

function Contacts() {
  return (
    <div className="contact">
      <div className="contact-header">
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind</p>
      </div>
      <div className="contact-input">
        <form action="">
          <div className="contact-name">
            <label htmlFor="">First Name</label>
            <input
              id="first_name"
              type="text"
              placeholder="Enter your first name"
            />
          </div>
          <div className="contact-name">
            <label htmlFor="">Last Name</label>
            <input
              id="last_name"
              type="text"
              placeholder="Enter your last name"
            />
          </div>
          <div className="contact-name contact-email">
            <label htmlFor="">Email</label>
            <input id="email" type="email" placeholder="yourname@email.com" />
          </div>

          <div className="contact-message">
            <label htmlFor="">Message</label>
            <textarea
              id="message"
              rows="4"
              cols="50"
              placeholder="Send me a message and i'll reply you as soon as possible... "
            ></textarea>
          </div>
          <div className="contact-agreement">
            <CheckboxLabels />
            <p>
              You agree to providing your data to skillzo who may contact you.
            </p>
          </div>
          <button id="btn__submit" className="button1 submit" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacts;
