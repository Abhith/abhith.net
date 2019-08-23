import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { Link } from "gatsby";
import { FaStar } from "react-icons/fa";
const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <Link to="/" className="title">
                <strong>Abhith</strong>
              </Link>
            </div>
            <div className="column">
              <p className="subtitle is-5">Links</p>
              <ul className="list-clean">
                <li>
                  <Link to="/about" className="has-text-grey-dark">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="has-text-grey-dark">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/recommended" className="has-text-grey-dark">
                    Recommended
                  </Link>
                </li>
                <li>
                  <Link to="/topics" className="has-text-grey-dark">
                    Topics
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="has-text-grey-dark">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="column">
              <p className="subtitle is-5">More</p>
              <ul className="list-clean has-icons">
                <li>
                  <OutboundLink
                    className="has-text-grey-dark"
                    target="_blank"
                    href="https://github.com/Abhith/abhith.net"
                  >
                    <FaStar className="fab" /> Abhith.net on Github
                  </OutboundLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="columns">
            <div className="column content has-text-centered">
              <span>Copyright © 2019</span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};
export default Footer;
