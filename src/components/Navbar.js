import React from 'react';

const Navbar = () => (
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#" id="aboutme-banner">Colin Dunn</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#" id="aboutme-banner">About Me</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">Projects</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">Skills</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">Work Experience</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">Contact Me</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Navbar
