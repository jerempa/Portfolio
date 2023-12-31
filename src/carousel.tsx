

import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import './styles/carousel.css';
import './styles/App.css';

import MOOC1 from './images/MOOC1.jpg';
import MOOC_frontend from './images/MOOC_frontend.jpg';
import MOOC_backend from './images/MOOC_backend1.jpg';
import request_py from './images/request_py1.jpg';
import validation_py from './images/validation1_py.jpg';
import other_py from './images/other_py1.jpg';



function Carousel() {
    const [slide, setSlide] = useState(0);

    const data = {
        "images": [
          {
            "src": MOOC1,
            "alt": "MOOC1",
            "legend": "React app code snippet. ",
            "url": "https://github.com/jerempa/Full-stack-MOOC/blob/main/Osa7/bloglist-frontend/src/App.js"
            
          },
          {
            "src": MOOC_frontend,
            "alt": "MOOC2",
            "legend": "React app code snippet, frontend. ",
            "url": "https://github.com/jerempa/Full-stack-MOOC/blob/main/Osa7/bloglist-frontend/src/components/BlogForm.js"
          },
          {
            "src": MOOC_backend,
            "alt": "MOOC3",
            "legend": "React app code snippet, backend. ",
            "url": "https://github.com/jerempa/Full-stack-MOOC-osa3/blob/main/models/person.js"
          },
          {
            "src": request_py,
            "alt": "request_py",
            "legend": "Beautifulsoup code snippet, Python. ",
            "url": "https://github.com/jerempa/Rent-apartment-finder/blob/master/requests_file.py"
          },
          {
            "src": validation_py,
            "alt": "validation_py",
            "legend": "Input validation, Python.",
            "url": "https://github.com/jerempa/Rent-apartment-finder/blob/master/input_validation.py"
          },
          {
            "src": other_py,
            "alt": "other_py",
            "legend": "Other code snippet, Python. ",
            "url": "https://github.com/jerempa/Rent-apartment-finder/blob/master/criteria.py"
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
            <h3 className="text-center">Code snippets</h3> 
                <div className="carousel">
                <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
                {data.images.map((item, idx) => {
                    return (
                      <div className={slide === idx ? "slide" : "slide slide-hidden"}> 
                        <img
                            key={idx}
                            src={item.src}
                            alt={item.alt}
                            className={slide === idx ? "slide" : "slide slide-hidden"}
                        />
                          <p className="legend"> 
                          {item.legend} <a href={item.url} target="_blank">Github-repository</a> 
                          </p>
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
