import React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

export const Images = ({images}) => {
      return (
        <div className="slide-container">
        <Slide>
            {images.map(img => (
                <div className="each-slide">
                <img src={img} alt="error"></img>          
                </div>
            ))}
        </Slide>
        </div>
        
    );
  };