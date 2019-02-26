import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"


const Footer = () => (
  <div>
    <footer id="footer">
          <div className="inner">
            <h2>Contact Me!</h2>
            <br/>
            <h6 color="white">If you would like to reach about to me for possible inquiries you can contact me at cjdunn109@gmail.com</h6>

            <ul className="icons">
              <li><a href="https://www.linkedin.com/in/colin-dunn-80a137172/">
                <FontAwesomeIcon icon={faLinkedin} size={"2x"}/>
              </a></li>

              <li><a href="https://www.github.com/colindunn109">
                <FontAwesomeIcon icon={faGithub} size={"2x"}/>
              </a></li>
            </ul>
            <p className="copyright">&copy; Untitled. Design: <a href="https://templated.co">TEMPLATED</a></p>
          </div>
    </footer>
  </div>

);

export default Footer;
