import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';

class TopNav extends Component {

  componentDidMount() {
    $(document).ready(function(){
      $('ul.tabs').tabs();
    });
  }

  render() {
    return(
      <div className="row">
        <div className="col s12">
          <ul className="tabs">
            <li className="tab col s3"><a className="active" href="#projects">Projects</a></li>
            <li className="tab col s3"><a href="#experience">Experience</a></li>
            <li className="tab col s3"><a href="#education">Education</a></li>
            <li className="tab col s3"><a href="#resume">Resume</a></li>
            <li className="tab col s3"><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div id="projects" className="col s12">Here are a bunch of projects I did.</div>
        <div id="education" className="col s12">Here is info about my education.</div>
        <div id="resume" className="col s12">Here is a beautiful resume you can view/print.</div>
        <div id="contact" className="col s12">Here is how to contact me.</div>
        <div id="experience" className="col s12">Here is my experience.</div>
      </div>
    );
  }
}

class App extends Component {

  render() {
    return (
      <TopNav/>
    );
  }
}

export default App;