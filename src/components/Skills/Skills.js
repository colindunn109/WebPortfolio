import React from 'react';
import {Col, Row }  from 'react-bootstrap';
import Backend from './Backend';
import Frontend from './Frontend';


const Skills = () => (
  <div id="main" className="main-container">
    <div className="inner">
      <section id="banner" className="main-skills"><header><h1>Skills</h1></header></section>
      <div className="devide-left">
        <Backend />
      </div>
      <div className="devide-right">
        <Frontend />
      </div>

    </div><br/>
  </div>
);

export default Skills;
