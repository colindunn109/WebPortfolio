import React from 'react';
import temp from '../images/gallery-image1.jpg';



const Box = props => (
  <div className="box">
     <a href="https://youtu.be/s6zR2T9vn2c" className="image fit"><img src={temp} alt="" /></a>
     <div className="inner">
          <h3>{props.title}</h3>
          <h6>{props.description}</h6>
          <a href={props.codeLink} className="button fit" data-poptrox="youtube,800x400">Code</a>
     </div>
  </div>

);

export default Box;
