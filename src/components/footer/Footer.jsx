import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Discover a world of cinematic wonders on our movie website. Explore
          thrilling action, heartwarming romance, and mind-bending suspense.
          Uncover hidden gems, timeless classics, and the latest blockbusters.
          With detailed descriptions, captivating trailers, and insightful
          reviews, let us be your guide to unforgettable movie experiences. Join
          us and ignite your love for film
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
