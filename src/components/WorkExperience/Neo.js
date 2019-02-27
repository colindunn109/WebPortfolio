import React from 'react';
import {Col}  from 'react-bootstrap';
import neoImage from '../../images/Neo.jpg';



const Neo = () => (
  <Col>
    <div className="box">
      <a href="https://Neo.org" className="image fit"><img src={neoImage} alt="" height="200"/></a>
      <div className="inner">
        <h6>
          YFIOB is a non-profit organization based in Santa Cruz who's goal is to present the youths of Santa Cruz with an easy
          to use interface to connect them with local work oppurtunities. I was the sole PHP backend developer, and only worked with
           another developer to help with styling our site. During my tenure, I developed administrative tools to allow our chief
           of operations to communicate with the companies and users we interacted with day to day. In addition, I handled database
           managment of our SQL server and how that data was reflected on our site, as well as javascript functionalities for
           user interaction.
        </h6>
        <h6>You can see the site that I helped build at <a href="https://linksantacruz.org">Link Santa Cruz</a></h6><br/>
      </div>
    </div>
  </Col>

);

export default Neo;