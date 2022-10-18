import React, {useState} from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import InfoScreen from './InfoScreen'

const Images = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const [infoActive, setInfobox] = useState(false)
  const defaultSlides = slides;
  const [currentSlides, setSlides] = useState(slides)

  const previousSlide = () => {
    setCurrent(current === 0 ? currentSlides.length -1: current -1)
  };
  const nextSlide = () => {
    setCurrent(current === currentSlides.length -1 ? 0: current + 1)
  };

  const activateInfo = () => {
    setInfobox( !infoActive )
  }

  if(!Array.isArray(slides) || currentSlides.length <= 0) {
    return null
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={previousSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {currentSlides.map((slide, index) => {
            return (
                <div className={index === current ? 'slide active': 'slide'} key={index}>
                  {index === current && (  
                    <>
                      <p className="label" onClick={activateInfo}>{slide.data.nickname}</p> 
                      {infoActive && (
                        <InfoScreen infoJSON={slide.data} className="InfoScreen"/>
                      )}
                      <img src={slide.image} alt='' onClick={() => {setSlides(slide.subSliderData === undefined ? defaultSlides: slide.subSliderData); setCurrent(0);}} className="image" />
                      {(slide.type === 'video') && (
                        <>
                          <video className="video" controls>
                            <source src={slide.image}></source>
                          </video>
                        </>)}

                    </>
                  )}
                </div>
            )
        })}
    </section>
  )
}

export default Images