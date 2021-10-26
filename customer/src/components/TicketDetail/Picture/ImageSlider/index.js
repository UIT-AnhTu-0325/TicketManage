import React from 'react'
import { ImageData } from '../ImageData'
import { useState } from 'react'
import '../../../../asset/css/component-css/ticket-image-slider.css'

/**
* @author
* @function ImageSlider
**/

export const ImageSlider = (props) => {

    const [currentImg, setCurrentImg] = useState(0);
    
    const nextSlide = ()=>{
        setCurrentImg(currentImg===ImageData.length -1 ?0 : currentImg+1);
    }
    const prevSlide = () =>{
        setCurrentImg(currentImg===0 ? ImageData.length-1 : currentImg-1);
    }

  return(
        <div className="image-slider">
            <div className="button next-slide" onClick={nextSlide}>
              <i class="fas fa-chevron-right"></i>
            </div>
            <div className="button prev-slide" onClick={prevSlide}>
              <i class="fas fa-chevron-left"></i>
            </div>
            {ImageData.map((slide, ind) =>{
                  return(
                      <>
                    {ind === currentImg 
                        && (<img className={currentImg===ind? "slide active" : "slide"} src={slide.link} alt="" /> )}
                      </>
                  )
              
            })}
        </div>
   )

 }