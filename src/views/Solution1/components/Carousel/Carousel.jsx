import React from 'react'
import { carousel1,carousel2, carousel3, carousel4, carousel5 } from '../../../../const'
import "./Carousel.css"
const Carousel = () => {
    const imgs = [carousel1,carousel2,carousel3,carousel4,carousel5,carousel1,carousel2,carousel3,carousel4,carousel5];
  return (
    <div className="carousel">
<ul className="carousel-list">
    {imgs.map((i,idx)=>(
        <li key={i.length * idx} className="carousel-item">
            <img key={i} src={i} alt="img"/>
        </li>
    ))}
</ul>
    </div>
  )
}

export default Carousel