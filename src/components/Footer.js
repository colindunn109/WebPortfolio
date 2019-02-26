import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"


const Footer = () => (
  <div>
    <footer id="footer">
          <div className="inner">
            <h2>Etiam veroeros lorem</h2>
            <br/>
            <h6 color="white">Pellentesque eleifend malesuada efficitur. Curabitur volutpat dui mi, ac imperdiet dolor tincidunt nec. Ut erat lectus, dictum sit amet lectus a, aliquet rutrum mauris. Etiam nec lectus hendrerit, consectetur risus viverra, iaculis orci. Phasellus eu nibh ut mi luctus auctor. Donec sit amet dolor in diam feugiat venenatis. </h6>

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
