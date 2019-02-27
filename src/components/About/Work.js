import React from 'react';
import Hpe from './Hpe';
import Yfiob from './Yfiob';
import {Col, Row }  from 'react-bootstrap';


const Work = () => (
  <div>
    <h1>Work Experience</h1>
    <Row>
      <Hpe />
      <Yfiob />
    </Row>
  </div>
);

export default Work;
