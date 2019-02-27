import React from 'react';
import {Col, Row }  from 'react-bootstrap';


const Bio= () => (
  <div>
    <h1>Bio</h1>
    <Row>
      <Col>
        <div className="box">
          <h3>How I started</h3>
          <h6>This is how I got started</h6>
        </div>
      </Col>
      <Col>
        <div className="box">
          <h3>My objective</h3>
          <h6>This is my Objective</h6>
        </div>
      </Col>
    </Row>
  </div>
);

export default Bio;
