import React from "react";
import "./Contact.css";
import { ValidationError, useForm } from "@formspree/react";


const Contact = () => {
  const [state, handleSubmit] = useForm("mayknorn");
  if (state.succeeded) {
    return (
      <div className="container" id="contact">
        <h2>Thanks for your message!</h2>
      </div>
    );
  }
  return (
    <div id="contact" className="container">
      <div className="section-title">
        <h2>Contact Me</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" placeholder="Name" required />

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Message" required />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button
          type="submit"
          className="btn btn-secondary"
          id="btn-contact"
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
