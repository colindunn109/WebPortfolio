import React from 'react';
import temp from '../images/Coding.jpg';



const Project = props => (
  <div className="box">
     <a className="image fit"><img src={props.image} alt={temp} height="200"/></a>
     <div className="inner">
          <h3>{props.title}</h3>
          <h6>{props.description}</h6>
          <a href={props.codeLink} className="button fit" data-poptrox="youtube,800x400">Code</a>
     </div>
  </div>

);

export default Project;
