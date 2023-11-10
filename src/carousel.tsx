

import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import './styles/carousel.css';
import './styles/App.css';

import MOOC1 from './images/MOOC1.jpg';
import MOOC_frontend from './images/MOOC_frontend.jpg';
import MOOC_backend from './images/MOOC_backend.jpg';


function Carousel() {
    const [slide, setSlide] = useState(0);

    const data = {
        "images": [
          {
            "src": MOOC1,
            "alt": "MOOC1"
          },
          {
            "src": MOOC_frontend,
            "alt": "MOOC2"
          },
          {
            "src": MOOC_backend,
            "alt": "MOOC3"
          }
        ]
      }

    const nextSlide = () => {
        setSlide(slide === data.images.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? data.images.length - 1 : slide - 1);
    };

    return (
        <div className="container mt-3"> 
            <div className="carousel">
            <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
            {data.images.map((item, idx) => {
                return (
                <img
                    src={item.src}
                    alt={item.alt}
                    key={idx}
                    className={slide === idx ? "slide" : "slide slide-hidden"}
                />
                );
            })}
            <BsArrowRightCircleFill
                onClick={nextSlide}
                className="arrow arrow-right"
            />
            <span className="indicators">
                {data.images.map((_, idx) => {
                return (
                    <button
                    key={idx}
                    className={
                        slide === idx ? "indicator" : "indicator indicator-inactive"
                    }
                    onClick={() => setSlide(idx)}
                    ></button>
                );
                })}
            </span>
            </div>
            </div>
    );
};

export default Carousel;
