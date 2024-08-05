import React from "react";
import Facebook from "../images/fa.svg";
import Twitter from "../images/tw.svg";
import Insta from "../images/ig.svg";
import GitHub from "../images/gh.svg";

export default function Footer() {
  return (
    <footer className="Footer flex justify-center p-3 pt-2 gap-9">
      <a
        href="https://twitter.com/sivm99"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={Twitter}
          alt="Twitter icon"
          className="Twitter-icon hover:scale-110 transition-transform duration-300"
        />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100058746855758"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={Facebook}
          alt="Facebook icon"
          className="Facebook-icon hover:scale-110 transition-transform duration-300"
        />
      </a>
      <a
        href="https://www.instagram.com/sivms99"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={Insta}
          alt="Instagram icon"
          className="Insta-icon hover:scale-110 transition-transform duration-300"
        />
      </a>
      <a
        href="https://github.com/sivm99"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={GitHub}
          alt="GitHub icon"
          className="Github-icon hover:scale-110 transition-transform duration-300"
        />
      </a>
    </footer>
  );
}
