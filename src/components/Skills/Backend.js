import React from 'react';
import {Col, Row }  from 'react-bootstrap';


const Backend = () => (
  <div>
  <h1 align="center">Backend</h1>
  <div className="inner">
    <div className="box">
      <Row>
        <Col><h6>Python</h6></Col>
        <Col><h6>Java</h6></Col>
        <Col><h6>C++</h6></Col>
      </Row>

      <Row>
        <Col><h6>Blockchain</h6></Col>
        <Col><h6>Django</h6></Col>
        <Col><h6>Machine Learning</h6></Col>
      </Row>

      <Row>
        <Col><h6>SQL</h6></Col>
        <Col><h6>Firebase</h6></Col>
        <Col><h6>RESTful API's</h6></Col>
      </Row>
    </div>
  </div>
  </div>
);

export default Backend;
