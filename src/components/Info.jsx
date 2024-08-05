import React from "react";
import Email from "../images/email.svg";
import LinkedIn from "../images/link.svg";
import ShivamProfile from "../assets/shivam.png";
export default function Info() {
  return (
    <div className="info flex flex-col space-y-4">
      <img
        src={ShivamProfile}
        alt="Shivam Shukla"
        className=" main-img rounded-xl p-6 "
      />
      <h5 className="info-title">Shivam Shukla</h5>
      <h6 className="info-subtitle">Backend Developer</h6>

      <p className="website">
        <a
          href="https://shivam.20032003.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          shivam.20032003.xyz
        </a>
      </p>

      <div className="btn-container flex justify-center gap-9 ">
        <a
          href="mailto:shivam@20032003.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="btn btn-email flex items-center gap-2"
            type="button"
          >
            <img src={Email} alt="Email icon" className="w-5 h-5" />
            Email
          </button>
        </a>
        <a
          href="https://bit.ly/sivm99-linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="btn btn-linkedin flex items-center gap-2 "
            type="button"
          >
            <img src={LinkedIn} alt="LinkedIn icon" className="w-5 h-5" />
            LinkedIn
          </button>
        </a>
      </div>
    </div>
  );
}
