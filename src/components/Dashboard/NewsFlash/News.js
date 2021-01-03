import React from 'react';

import Carousel from './components/Carousel';

import './News.css';

const News = () => {

  return(
    <div className="news-body">
    <React.Fragment>
      <div className="carousel-body">
        <Carousel/>
      </div>
    </React.Fragment>
    </div>
  )
};

export default News;
