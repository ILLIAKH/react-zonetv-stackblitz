import React, { useEffect, useState } from 'react';
//import data
import * as data from './data/data.json';

//importing components
import Carousel from './components/Carousel/Carousel';
import Hero from './components/Hero/Hero';

import './style.css';

export default function App() {
  const [filmData, setFilmData] = useState(data.results);
  const [heroSelection, setHeroSelection] = useState(filmData[0]);

  //on app init set filmData with the data from file
  //useEffect(()=>{
  // setFilmData(data.results);
  // setHeroSelection(filmData[0]);
  //console.log(filmData);
  //})

  function updateHero(curr_selection) {
    setHeroSelection(curr_selection);
  }

  return (
    <div className="App">
      {/* Hero and Carousel are sibling components so I made sure that they can
      communicate data with each other through APP in this case. 
      Normally it would be a parent component included in main app
    */}
      <Hero heroSelection={heroSelection} />
      <Carousel updateHero={updateHero} filmData={filmData} title="Top 20" />
    </div>
  );
}
