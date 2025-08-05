import React from "react";
import "./footer.css";
import youtube_icon from "../../assets/youtube_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";
import facebook_icon from "../../assets/facebook_icon.png";

const Footer = () => {
  
  return (
    <div className="footer">
      <div className="footer-icons">
        <img onClick={() => { window.open("https://www.youtube.com/@Netflix")}} src={youtube_icon} alt="YouTube" />
        <img onClick={() => { window.open("https://x.com/netflix", )}}src={twitter_icon} alt="Twitter" />
        <img onClick={() =>{window.open("https://www.instagram.com/netflix/")}} src={instagram_icon} alt="Instagram" />
        <img onClick={()=>{window.open("https://www.facebook.com/netflixus/")}} src={facebook_icon} alt="Facebook" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relation</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <div className="copyright-text">© 1997 - 2025 Netflix, Inc</div>
    </div>
  );
};

export default Footer;
