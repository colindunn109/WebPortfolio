import React from 'react';
import Project from './Project';

import {Col, Row }  from 'react-bootstrap';
import portfolio from '../images/Portfolio.jpg';
import neo from '../images/Neo.jpg';
import ravr from '../images/Ravr.jpg';
import recipe from '../images/Recipe.jpg';
import morning from '../images/Morning.jpg';
import coding from '../images/Coding.jpg';
import python from '../images/Python.jpg';
import django from '../images/Django.jpg';
import react from '../images/React.jpg';
import devconect from '../images/Devconnector.jpg';
import indev from '../images/inDev.jpg';



const Projects = () => (
  <div id="main" className="main-container">
	   <div className="inner">
        <section id="banner" className="projects-banner"><header><h1>Projects</h1></header></section>
        <br/>
        <div className="thumnails">
          <Row>
            <Col>
              <Project codeLink = "https://github.com/colindunn109/GetUp" image = {indev} title = "Get Up!" description = "A MERN stack web application integrated with Google Maps API focusing on helping people find new life experiences and providing a data visualization of places been and places to go. Based on Airbnb."/>
            </Col>
            <Col>
              <Project codeLink = "https://github.com/zdolson/Neo-Market" image = {neo} title = "NeoMarket" description = "A blockchain and react e-commerce application that allows user to exchange goods using cryptocurrency over a powerful blockchain backend"/>
            </Col>
            <Col>
              <Project codeLink = "https://github.com/colindunn109/DevConnector" image = {devconect} title = "DevConnector" description = "A MERN stack web application to help developers share theyre skills, projects and experiences with eachother. Think, LinkedIn for developers!"/>
            </Col>
          </Row>

          <Row>
            <Col>
              <Project codeLink = "https://github.com/colindunn109/MorningDigest" image = {morning} title = "MorningDigest" description = "A Django built web application that scrubs popular news article sites across multiple medians and compiles them into a neat UI"/>
            </Col>
            <Col>
              <Project codeLink = "https://github.com/colindunn109/Ravr" image = {ravr} title = "Ravr" description = "A Django website built to help those who love EDM and music festivals connect and share (In progress)"/>
            </Col>
            <Col>
              <Project codeLink = "https://github.com/colindunn109/RecipeSearch" image = {recipe} title = "RecipeSearch" description = "A React application that pulls from an external API to allow a user to view a variety of different recipes"/>
            </Col>
          </Row>

          <Row>
            <Col>
              <Project codeLink = "https://github.com/colindunn109/MovieSentimentAnalysis" image = {python} title = "MovieSentimentAnalysis" description = "Python application that utilizes machine learning's logisitical regression model to perform sentiment analysis on movie reviews"/>
            </Col>
            <Col>
              <Project codeLink = "https://github.com/colindunn109/CryptoPredicter" image = {python} title = "CryptoPredicter" description = "Python application that scrubs popular social media sites, and performs sentiment analysis to determine how public opinion effects crypto prices"/>
            </Col>
            <Col>
              <Project codeLink = "https://github.com/colindunn109/WeatherApp" image = {react} title = "WeatherApp" description = "A React application that pulls from an external weather API to see the temperature, conditions, and climate of a given city"/>
            </Col>
          </Row>

        </div>
     </div>
  </div>
);

export default Projects;
