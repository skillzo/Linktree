import React from "react";
import { Wrapper } from "../Components/Wrapper/Wrapper";
import CheckboxLabels from "../Components/Button/Checkbox";
import "./contact.css";

function Contacts() {
  return (
    <Wrapper>
      <div className="contact-header">
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind</p>
      </div>
      <div className="contact-input">
        <form action="">
          <div className="contact-name">
            <label htmlFor="">First Name</label>
            <input type="text" placeholder="Enter your first name" />
            <label htmlFor="">Last Name</label>
            <input type="text" placeholder="Enter your first name" />
          </div>

          <div className="contact-message">
            <label htmlFor="">Message</label>
            <input
              type="textField"
              placeholder="Send me a message and i'll reply you as soon as possible... "
            />
          </div>
          <div className="contact-agreement">
            <CheckboxLabels />
            <p>
              You agree to providing your data to skillzo who may contact you.
            </p>
          </div>
        </form>
      </div>
    </Wrapper>
  );
}

export default Contacts;
