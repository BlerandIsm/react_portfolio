import React, { useState } from "react";
import { validateEmail } from "../../utilities/helpers";

function Contact() {
  const width = 40;
  const [emailError, changeError] = useState("");
  const [nameError, changeNameError] = useState("");
  const [messageError, changeMessageError] = useState("");

  function validateForm(e) {
    if (e.target.name === "email") {
      const result = validateEmail(e.target.value);
      if (result === false) {
        changeError(" - Incorrect Email Format/Email Required!");
      } else {
        changeError("");
      }
    } else if (e.target.name === "name") {
      if (!e.target.value) {
        console.log("dfsf");
        changeNameError(" - Cannot Be Empty!");
      } else {
        changeNameError("");
      }
    } else if (e.target.name === "message") {
      if (!e.target.value) {
        console.log("dfsf");
        changeMessageError(" - Cannot Be Empty!");
      } else {
        changeMessageError("");
      }
    }
  }

  return (
    <section>
      <h3 className="text-center m-3 fw-bold">Contact Me</h3>
      <div
        id="contactInfo"
        className="m-5 d-flex flex-wrap justify-content-around"
      >
        <div
          className=""
          style={{
            minWidth: `${width}%`,
          }}
        >
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label fw-bold">
              Name{" "}
              <span className="text-danger fw-bold">
                {" "}
                {nameError ? nameError : ""}{" "}
              </span>
            </label>
            <input
              type="name"
              name="name"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter a name"
              onBlur={validateForm}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label fw-bold">
              Email address{" "}
              <span className="text-danger fw-bold">
                {" "}
                {emailError ? emailError : ""}{" "}
              </span>
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              onBlur={validateForm}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label fw-bold">
              Message{" "}
              <span className="text-danger fw-bold">
                {" "}
                {messageError ? messageError : ""}{" "}
              </span>
            </label>
            <textarea
              className="form-control"
              name="message"
              id="exampleFormControlTextarea1"
              rows="3"
              onBlur={validateForm}
            ></textarea>
          </div>
          <div className="text-center">
            <button id="contactBtn" className="btn">
              Submit!
            </button>
          </div>
          
          <div
            className="card m-3 border border-dark border-solid border-3"
            style={{
              minWidth: `${width}%`,
            }}
          >
            <address className="p-3">
              <p className="text-center fw-bold">Personal Contact</p>
              <p className="text-center">
                <i>
                  Blerand Ismaili
                  <br></br> <br></br> Lake Worth, FL 33460
                  <br></br>
                  <br></br>Phone: 346-218-6360
                  <br></br>Email: ismailiblerand@gmail.com
                </i>
              </p>
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
