

import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import './styles/carousel.css';
import './styles/App.css';

import MOOC1 from './images/MOOC1.jpg';
import MOOC_frontend from './images/MOOC_frontend.jpg';
import MOOC_backend from './images/MOOC_backend.jpg';
import request_py from './images/request_py.jpg';
import validation_py from './images/validation_py.jpg';
import other_py from './images/other_py.jpg';



function Carousel() {
    const [slide, setSlide] = useState(0);

    const data = {
        "images": [
          {
            "src": MOOC1,
            "alt": "MOOC1",
            "legend": "React app code snippet"
          },
          {
            "src": MOOC_frontend,
            "alt": "MOOC2",
            "legend": "React app code snippet, frontend"
          },
          {
            "src": MOOC_backend,
            "alt": "MOOC3",
            "legend": "React app code snippet, backend"
          },
          {
            "src": request_py,
            "alt": "request_py",
            "legend": "Beautifulsoup code snippet, Python"
          },
          {
            "src": validation_py,
            "alt": "validation_py",
            "legend": "Input validation, Python"
          },
          {
            "src": other_py,
            "alt": "other_py",
            "legend": "Other code snippet, Python"
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
        <div className="container mt-3" style= {{"paddingBottom": "3vh"}}>
            <h3 className="text-center">Code snippets</h3> 
                <div className="carousel">
                <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
                {data.images.map((item, idx) => {
                    return (
                      <div className={slide === idx ? "slide" : "slide slide-hidden"}> 
                        <img
                            src={item.src}
                            alt={item.alt}
                            key={idx}
                            className={slide === idx ? "slide" : "slide slide-hidden"}
                        />
                        <p className="legend"> {item.legend} </p>
                        </div>
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
