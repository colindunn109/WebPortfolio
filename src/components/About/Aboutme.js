import React from 'react';
import AboutHeadline from './AboutHeadline';
import Work from './Work';
import Bio from './Bio';


const Aboutme = () => (
  <div id="main" className="main-container">
	   <div className="inner">
        <section id="banner" className="aboutme-banner"><header><h1>About me</h1></header></section>
        <br/>
        <AboutHeadline />
        <Bio />
        <Work />
      </div>
  </div>
);

export default Aboutme;