import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer text-center py-4">
      <h3>Welcome to the Hey-Doc :)</h3>
      <a className="contact_footer" href="/contact_us">
        Contact Us{" "}
      </a>
      <span> &nbsp; • &nbsp;</span>
      <a className="contact_footer" href="/about_us">
        {" "}
        About Us
      </a>

      <p>
        Copyright &copy; {new Date().getFullYear()}, Hey-Doc :). All rights
        reserved.
      </p>
    </div>
  );
};

export default Footer;
