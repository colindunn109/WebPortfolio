import React from 'react';
import {Col}  from 'react-bootstrap';
import neoImage from '../../images/Neo.jpg';



const Neo = () => (
  <Col>
    <div className="box">
      <a href="https://Neo.org" className="image fit"><img src={neoImage} alt="" height="200"/></a>
      <div className="inner">
        <h6>
          Every computer science/software engineering major at UC Santa cruz is required to take a capstone course where they develop a piece of
          software. In my particular course, we were assigned a team of advisors who were meant to guide our project, and give us ideas, and design
          choices throughout the year. I include this as work experience as we were told to imagine this capstone as a real job with real bosses.
          Neo-Market was an idea that was born on the idea that Blockchain was a brilliant new piece of technology and should be exposed to the
          e-commerce market. We used Neo's up and coming tech to build our backend, and hook it up with a modern easy to use frontend built with react.
          I was responsible for the architectural backend design and implementation of our blockchain, building out user authentication, transactions,
          and storage. In addition, I worked with our react frontend team to link up our smart contract to our interface.
        </h6><br/>
      </div>
    </div>
  </Col>

);

export default Neo;
