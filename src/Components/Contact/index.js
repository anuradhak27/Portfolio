import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [emailError, setEmailError] = useState(false);
  const [messageLength, setMessageLength] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    if (details.email) {
      details.email.includes("@") && details.email.length > 5
        ? setEmailError(false)
        : setEmailError(true);
    }
    setFormSubmitted(true);
  };

  const inputHandler = (e) => {
    if (e.target.name === "message") {
      if (e.target.value.length > 2000) return;
      setMessageLength(e.target.value.length);
    }
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  return (
    <div className="Contact">
      {!formSubmitted ? (
        <>
          <h2 className="heading">Contact Me</h2>
          <form onSubmit={(e) => submitHandler(e)} className="contact-form">
            <p>Name:</p>
            <input
              type="text"
              required
              name="name"
              value={details.name}
              field="name"
              onChange={(e) => inputHandler(e)}
            />
            <p>Email:</p>
            <input
              type="text"
              required
              value={details.email}
              name="email"
              field="email"
              className={emailError ? "errormsg" : "noerrormsg"}
              onChange={(e, name) => inputHandler(e, name)}
            />
            {emailError && (
              <p className="errorTextmsg">Please enter Valid Email-id</p>
            )}
            <p>Message:</p>
            <textarea
              type="text"
              required
              value={details.message}
              name="message"
              field="message"
              className="message-field"
              onChange={(e) => inputHandler(e)}
            />
            <p className="messageLength">{messageLength}/2000</p>
            <button>Submit</button>
          </form>
        </>
      ) : (
        <h2 className="submission-msg">
          Your form has been submitted. We will contact you super soon🤩
        </h2>
      )}
    </div>
  );
}

export default Contact;
