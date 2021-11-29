import React from 'react';
import './Hero.css';

const Hero = (props) => (
  <div className="Hero row">
    <div className="detail-container col-4">
      <div className="name-and-rating">
        <h1>{props.heroSelection.title}</h1>
        <h3>
          Rating: <span>{props.heroSelection.vote_average}</span>
        </h3>
      </div>
      <div className="description">
        <p>{props.heroSelection.overview}</p>
      </div>
    </div>
    <div className="hero-container col-8">
      <img src={props.heroSelection.backdrop_path} />
    </div>
  </div>
);

export default Hero;
