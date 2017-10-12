import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import profilePic from './images/lbuthman.png';

class TitleBar extends Component {
  render() {
    return(
      <nav>
        <div className="nav-wrapper">
          <a className="brand-logo center">The Honest Coder</a>
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
      </div>

      <div>
        <h4>Batman vs. Joker Tic Tac Toe</h4>
        <p>https://batman-tictactoe.herokuapp.com/</p>
        <p>https://github.com/lbuthman/js-tictactoe</p>
      </div>

      <div>
        <h4>Rad Calculator</h4>
      </div>
    </section>
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
        <div id="resume" className="col s12">Here is a beautiful resume you can view/print.</div>
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
