import React from 'react';
import {Col, Row }  from 'react-bootstrap';


const Bio= () => (
  <div>
    <h1 align="center">Bio</h1><br/>
    <Row>
      <Col>
        <div className="box">
          <h3>Personal</h3>
          <div className="inner">
            <h6>I Was born and raised in Seattle Washington and have always loved technology and problem solving. When I was
              growing up I always loved challenges and this has carried very heavily into my more professional life. For me,
              I see the field of technology as an oppurtunity to better the lives of those around us, and when I began my studies
              in computer science, it was always under the presedent that I could apply myself to a position that would make the
              lives of anyone and everyone better in some meaningful way. My goal as I move forward out of college into a career
              is to end up in a position in which I can grow as a developer, and also be in a company that has a meaningful and lasting
              impact on the world.
            </h6><br/>
          </div>
        </div>
      </Col>
      <Col>
        <div className="box">
          <h3>Professional</h3>
          <div className="inner">
            <h6>I attended UC Santa Cruz from October 2014 - December 2018. During my time here, I completed my Bachelors Degree
                taking key courses such as software development, machine learning, analysis of algorithms andadvanced programming.
                As I grew as a programming and developer, I began realizing how much of a passion I had for developing a well rounded
                idea of all the various technologies that interested me. So began my journey of dipping my toes in all types of different
                applications so I could see what I really would fall in love with. This led to me building a multitude of projects, detailed later,
                over the spectrum of machine learning, mobile applications, blockchain, backend development, and fullstack development. I
                began realizing more and more that I loved solving problems and knocking off check marks on my todo list. After much consideration,
                I decided I wanted to pursue Fullstack development.
            </h6>
            <h6>
              I took three courses to develop my knowledge, Fullstack Django development, React development, and Django REST Framework.
              I believed this would be a very good way to get me introduced to the basics of what I would need to build out some
              projects. From here, I self taught myself all of the gaps with databases, scaling, deployment, etc in order to make sure
              I could handle the tasks of a fullstack developer. I have now created, and still am developing several web applications
              to continue growing as a developer.
            </h6><br/>
          </div>
        </div>
      </Col>
    </Row>
  </div>
);

export default Bio;
