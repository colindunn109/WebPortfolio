import React from 'react';
import {Col, Row }  from 'react-bootstrap';


const Banner = () => (
  <div id="main" className="main-container">
    <div className="inner">
      <section id="banner" className="main-skills">
    	     <header>
    		     <h1>Skills</h1>
    			 </header>
    	</section>
      <div className="devide-left">
        <h1 align="center">Backend</h1>
        <div className="inner">
          <div className="box">
            <Row>
              <Col>
                <h6>Django</h6><br/>
              </Col>
              <Col>
                <h6>Machine learning</h6>
              </Col>
              <Col>
                <h6>SQL</h6>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="devide-right">
        <h1 align="center">Frontend</h1>
      </div>

    </div><br/>
  </div>
);

export default Banner;
