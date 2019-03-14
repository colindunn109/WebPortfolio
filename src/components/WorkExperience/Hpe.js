import React from 'react';
import {Col}  from 'react-bootstrap';
import HpeImage from '../../images/Hpe.png';


const Hpe = () => (
  <Col>
    <div className="box">
      <a href="https://hpe.com" className="image fit"><img src={HpeImage} alt="" height="200"/></a>
      <div className="inner">
        <h6>
          At HPE, I belonged to the Reference Test team under the scope of the storage array team. The reference test team was me, and two other
          employees whos purpose was to have scripts built to make sure our enterprise level storage systems were ready for deployment. My role within
          this team was to develop python scripts that would scrape these reference test logs and extract important information for the data analytics 
          report. In my tenure, I developed 6 scripts all scraping widely different areas of the test logs, and compiled these in an easy to read format
          to insert into our SQL database. My scripts improved the efficiency of the data analytics process following the reference test run from several
          hours, to a handful of minutes.
        </h6><br/>
      </div>
    </div>
  </Col>

);

export default Hpe;
