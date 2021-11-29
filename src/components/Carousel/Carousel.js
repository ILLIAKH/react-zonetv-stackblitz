import React, { useState } from 'react';
import './Carousel.css';
import useWindowDimensions from '../../hooks/useWindowDimensions.js';

function Carousel(props) {
  const ref = React.createRef();
  // const { height, width } = useWindowDimensions();

  //will allow user to scroll horizontaly using mouse wheel
  const onWheel = (e) => {
    // e.preventDefault();
    const container = ref.current;
    const containerScrollPosition = ref.current.scrollLeft;
    // console.log(containerScrollPosition, e.deltaY);
    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
    });
  };

  //will fill carousel with the film items
  const filmItems = props.filmData.map((film, index) => {
    return (
      <div className="carousel-item" key={index}>
        <img
          tabIndex="1"
          onClick={() => props.updateHero(film)}
          src={film.poster_path}
        ></img>
      </div>
    );
  });

  // const scroll = (scrollOffset) => {
  //   ref.current.scrollLeft += scrollOffset;
  // };

  return (
    <div className="Carousel-component">
      <div className="carousel-title">
        <h2>{props.title}</h2>
      </div>
      <div className="Carousel" ref={ref} onWheel={onWheel}>
        {/* <button onClick={()=> scroll(width/5 * 5)}>to tright</button> */}
        {filmItems}
      </div>
    </div>
  );
}

export default Carousel;
