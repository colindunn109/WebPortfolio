import React from 'react';
import Box from './Box';

import {Col, Row }  from 'react-bootstrap';



const Main = () => (
  <div id="main" className="main-container">
	   <div className="inner">
        <div className="thumnails">
          <Row>
            <Col>
              <Box codeLink = "https://github.com/colindunn109/Ravr" title = "Ravr" description = "A Django website built to help those who love EDM and music festivals connect and share (In progress)"/>
            </Col>
            <Col>
              <Box codeLink = "https://github.com/zdolson/Neo-Market" title = "NeoMarket" description = "A blockchain and react e-commerce application that allows user to exchange goods using cryptocurrency over a powerful blockchain backend"/>
            </Col>
            <Col>
              <Box codeLink = "https://github.com/colindunn109/RecipeSearch" title = "RecipeSearch" description = "A React application that pulls from an external API to allow a user to view a variety of different recipes"/>
            </Col>
          </Row>

          <Row>
            <Col>
              <Box codeLink = "https://github.com/colindunn109/MorningDigest" title = "MorningDigest" description = "A Django built web application that scrubs popular news article sites across multiple medians and compiles them into a neat UI"/>
            </Col>
            <Col>
              <Box codeLink = "https://github.com/colindunn109/DjangoReddit" title = "DjangoReddit" description = "A Django application built to clone the popular social media site, reddit"/>
            </Col>
            <Col>
              <Box codeLink = "https://github.com/colindunn109/WebPorfolio" title = "WebPorfolio" description = "A React application to showcase all of my projects, skills and experiences allowing recruiters to see my talent"/>
            </Col>
          </Row>

          <Row>
            <Col>
              <Box codeLink = "https://github.com/colindunn109/MovieSentimentAnalysis" title = "MovieSentimentAnalysis" description = "Python application that utilizes machine learning's logisitical regression model to perform sentiment analysis on movie reviews"/>
            </Col>
            <Col>
              <Box codeLink = "https://github.com/colindunn109/CryptoPredicter" title = "CryptoPredicter" description = "Python application that scrubs popular social media sites, and performs sentiment analysis to determine how public opinion effects crypto prices"/>
            </Col>
            <Col>
              <Box codeLink = "https://github.com/colindunn109/WeatherApp" title = "WeatherApp" description = "A React application that pulls from an external weather API to see the temperature, conditions, and climate of a given city"/>
            </Col>
          </Row>

        </div>
     </div>
  </div>
);

export default Main;
