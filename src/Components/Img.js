import React from 'react';

const Img = props => (
  <li className="img-wrap">
    <img src={props.url} alt="unsplashImage"/>
  </li>
);

export default Img;