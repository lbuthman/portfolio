import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import profilePic from './images/lbuthman.png';

class TitleBar extends Component {
  render() {
    return(
      <nav>
        <div className="nav-wrapper">
          <h5 className="center title">The Honest Coder - Luke Buthman <br/><a class="material-icons">attachment</a><a href="#">pdf resume</a></h5>
        </div>
      </nav>
    );
  }
}

function Contact() {

  return(
    <section className="container center">
      <div className="col s12">
        <div className="card">
          <div className="card-image">
            <img src={profilePic} alt="That's me" className="responsive-img materialboxed" id="profile-pic"/>
          </div>
          <div className="card-content">
            <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
          </div>
          <div className="card-action">
            {/*<a href="#">This is a link</a>*/}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="container center">
      <div>
        <h4>Maria Rae's Gourmet Foods</h4>
        <p><a href="https://placeholder.com"><img className="responsive-img" src="http://via.placeholder.com/500x300"/></a></p>
        <h5>Hosted Site</h5>
        <p>https://maria-raes-testing-site.herokuapp.com/</p>
        <h5>GitHub Code</h5>
        <p>Unfortunately, the code for this project is not available on GitHub.</p>
      </div>

      <div>
        <h4>Batman vs. Joker Tic Tac Toe</h4>
        <p><a href="https://placeholder.com"><img className="responsive-img" src="http://via.placeholder.com/500x300"/></a></p>
        <p>https://batman-tictactoe.herokuapp.com/</p>
        <p>https://github.com/lbuthman/js-tictactoe</p>
      </div>

      <div>
        <h4>Rad Calculator</h4>
        <p><a href="https://placeholder.com"><img className="responsive-img" src="http://via.placeholder.com/500x300"/></a></p>
        <p>future hosted website</p>
        <p>https://github.com/lbuthman/js-calculator</p>
      </div>
    </section>
  );
}

function Resume() {
  return(
    <article className="container">
      <h4 className="center">The Link below will do one of the following things:</h4>
      <div className="row">
        <ul className="col s6 offset-s3 left">
          <li>Direct you to a PDF of my Resume.</li>
          <li>Steal your bank account information.</li>
          <li>Launch a nuclear attack against Mars.</li>
          <li>Rick Roll you.</li>
        </ul>
      </div>
      <h5 className="center"><a href="#">Link to my resume</a></h5>
    </article>
  );
}

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
          <ul className="tabs tabs-fixed-width">
            <li className="tab col s3"><a className="active" href="#projects">Projects</a></li>
            <li className="tab col s3"><a href="#experience">Experience</a></li>
            <li className="tab col s3"><a href="#resume">Resume</a></li>
            <li className="tab col s3"><a href="#education">Education</a></li>
            <li className="tab col s3"><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div id="projects" className="col s12">
          <Projects/>
        </div>
        <div id="experience" className="col s12">Here is my experience.</div>
        <div id="resume" className="col s12">
          <Resume/>
        </div>
        <div id="education" className="col s12">Here is info about my education.</div>
        <div id="contact" className="col s12">
          <Contact/>
        </div>
      </div>
    );
  }
}


class App extends Component {

  render() {
    return (
      <div>
        <TitleBar/>
        <TopNav/>
      </div>
    );
  }
}

export default App;
