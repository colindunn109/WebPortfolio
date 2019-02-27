import React from 'react';
import {Col}  from 'react-bootstrap';
import HpeImage from '../../images/Hpe.png';


const Hpe = () => (
  <Col>
    <div className="box">
      <a href="https://hpe.com" className="image fit"><img src={HpeImage} alt="" height="200"/></a>
      <div className="inner">
        <h6>
          At HPE, I spent my time developing eight python scripts to scrape enterprise level storage system runlogs.
          These scripts compiled important test info and displayed them in an easy to read manner to allow my team to improve
          the data analytics process. These scripts were built from scratch and are still being used by HPE to improve efficiency.
        </h6><br/>
      </div>
    </div>
  </Col>

);

export default Hpe;
