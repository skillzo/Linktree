import React, { useState } from "react";
import CheckboxLabels from "../Components/Button/Checkbox";
import "./contact.css";

function Contacts() {
  const [fName, setFName] = useState();
  const [lName, setLName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [valid, setValid] = useState(true);

  const emailIncludes =
    email?.trim().includes("@") && email?.trim().includes(".");

  const submitHandler = (e) => {
    if (
      fName?.trim().length < 3 ||
      lName?.trim().length < 3 ||
      !emailIncludes ||
      message?.trim().length < 0
    ) {
      e.preventDefault();
      setValid(false);
    } else {
      e.preventDefault();
      setValid(true);
    }
  };

  // //////////////////////////
  return (
    <div className="contact">
      <div className="contact-header">
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind</p>
      </div>
      <div className="contact-input">
        <form action="">
          <div className="contact-name__container">
            <div className="contact-name">
              <label htmlFor="">First Name</label>
              <input
                required
                id="first_name"
                type="text"
                placeholder="Enter your first name"
                onChange={(e) => setFName(e.target.value)}
              />
              {valid ? (
                ""
              ) : (
                <div className="error">
                  Name must be longer than 4 characters{" "}
                </div>
              )}
            </div>
            <div className="contact-name">
              <label htmlFor="">Last Name</label>
              <input
                required
                id="last_name"
                type="text"
                placeholder="Enter your last name"
                onChange={(e) => setLName(e.target.value)}
              />
              {valid ? (
                ""
              ) : (
                <div className="error">
                  Name must be longer than 4 characters{" "}
                </div>
              )}
            </div>
          </div>

          <div className="contact-name contact-email">
            <label htmlFor="">Email</label>
            <input
              required
              id="email"
              type="email"
              placeholder="yourname@email.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            {valid ? (
              ""
            ) : (
              <div className="error">Email must include @ and .</div>
            )}
          </div>

          <div
            className={valid ? "contact-message " : "contact-message__error"}
          >
            <label htmlFor="">Message</label>
            <textarea
              id="message"
              rows="4"
              cols="50"
              placeholder="Send me a message and i'll reply you as soon as possible... "
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {valid ? "" : <div className="error">please enter a message</div>}
          </div>
          <div className="contact-agreement">
            <CheckboxLabels />
            <p>
              You agree to providing your data to skillzo who may contact you.
            </p>
          </div>
          <button
            id="btn__submit"
            className={valid ? "button1 submit" : "button1-disabled submit"}
            type="submit"
            disabled={!valid && true}
            onClick={submitHandler}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacts;
