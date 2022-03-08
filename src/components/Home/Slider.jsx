import React, {useState, useEffect} from 'react'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'
import {Link} from 'react-router-dom'

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }



    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <>
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <Link to={obj.hre} style={{color: "#000000"}} className="a-text">
     <div className="slide-wrapper">
<div className="slide-detail">
<div className="inner">
    <h2>{obj.title}</h2>
    <p>{obj.subTitle}</p>
   
<p className="get">Read More</p>
    </div></div>    
</div>                        </Link>

                        <img 
                        src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} 
                        />
                    </div>
               
    </>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                
                {Array.from({length: 3}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    >
                        </div>
                        
                    
                ))}
          
            </div>
        </div>
    )
}

