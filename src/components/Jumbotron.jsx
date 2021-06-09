import React, { Component } from 'react';

// File
import imgProfile from '../assets/profile.jpg';

// Styling
import '../css/Jumbotron.css';

export default class Jumbotron extends Component {
  render() {
    return (
      <div id="home">
        <div className="background">
          <img src={imgProfile} alt="Profile" className="profile" />
        </div>
        <div className="title-profile">
          <h2>
            <span className="nickname">Ganna</span> Hinggil Anugrah Prasetya
          </h2>
          <label>Front-End Web Developer Enthusiast</label>
          <i>"Coding Everyday"</i>
        </div>
      </div>
    );
  }
}