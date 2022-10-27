/*
import React, {useState} from 'react';
import Thumbnails from "./Thumbnails.jsx";

const View = ({images, position, setPosition}) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const sliderlength = images.length;

    const nextSlide = () => {
        setSlideIndex((slideIndex === length - 1) ? 0 :(slideIndex + 1));
    };

    const prevSlide = () => {
        setSlideIndex((slideIndex === 0) ? ( length - 1) : (slideIndex - 1));
    };

    return (
        <div className="view">
            <button onClick={prevSlide}> Flèche gauche </button>
            {
                imgContent.map((img, index) => (
                    <div key={index}>
                        {
                            index === slideIndex && (
                                <img src={img.path} alt={img.alt}/>
                            )
                        }
                    </div>
                ))
            }
            <button onClick={nextSlide}> Flèche droite</button>
        </div>
    );
};

export default View;*/
