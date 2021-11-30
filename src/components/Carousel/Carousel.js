import React, { useState } from 'react';
import './Carousel.css';
import useWindowDimensions from '../../hooks/useWindowDimensions.js';

function Carousel(props) {
  const ref = React.createRef();
  // const { height, width } = useWindowDimensions();

  //will allow user to scroll horizontaly using mouse wheel
  const onWheel = (e) => {
    e.preventDefault;
    //When a ref is passed to an element in render, a reference to the node becomes accessible at the current attribute of the ref.
    const container = ref.current;
    const containerScrollPosition = ref.current.scrollLeft;
    // console.log(containerScrollPosition, e.deltaY);

    //deltaY returns + when scroll up and - when scroll down
    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
    });
  };

  //disables scroll once user enters the carousel with their mouse
  const disableScroll = () => {
    document.body.classList.add('no-scroll');
  };
  // enables scroll on mouseLeave
  const enableScroll = () => {
    document.body.classList.remove('no-scroll');
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
      <div
        className="Carousel"
        ref={ref}
        onWheel={onWheel}
        onMouseEnter={disableScroll}
        onMouseLeave={enableScroll}
      >
        {/* <button onClick={()=> scroll(width/5 * 5)}>to tright</button> */}
        {filmItems}
      </div>
    </div>
  );
}

export default Carousel;
