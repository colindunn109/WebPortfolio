import React from 'react';
import Hpe from './Hpe';
import Yfiob from './Yfiob';
import Neo from './Neo';
import {Row}  from 'react-bootstrap';


const Work = () => (
  <div id="main" className="main-container">
    <div className="inner">
      <section id="banner" className="main-work">
    	     <header>
    		     <h1>Work Experience</h1>
    			 </header>
    	</section><br/>
      <Row>
        <Hpe />
        <Yfiob />
        <Neo />
      </Row>
    </div>
  </div>


);

export default Work;
