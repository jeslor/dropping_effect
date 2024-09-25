import React, { useEffect, useState } from 'react'
import slide1 from '/assets/images/slide1.jpg'
import slide2 from "/assets/images/slide2.jpg"
import slide3 from "/assets/images/slide3.jpg"
import gsap from "gsap"


const ImageSlider = () => {
    const [images, setImages] = useState([
        {
            title: 'Slide 1',
            url: slide1,
            headerText: 'Wounder full nature out there',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, laboriosam. Dolorum alias vel tenetur ut perspiciatis id optio aspernatur officiis?',
            buttonText: 'Read More'
        },
        {
            title: 'Slide 2',
            url: slide2,
            headerText: 'Looking for a new adventure',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, laboriosam. Dolorum alias vel tenetur ut perspiciatis id optio aspernatur officiis?',
            buttonText: 'Read More'
        },
        {
            title: 'Slide 3',
            url: slide3,
            headerText: 'Lets go on a trip',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, laboriosam. Dolorum alias vel tenetur ut perspiciatis id optio aspernatur officiis?',
            buttonText: 'Start Now'
        },
        {
            title: 'Slide 4',
            url: slide2,
            headerText: 'making life wonderful as it comes and goes',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, laboriosam. Dolorum alias vel tenetur ut perspiciatis id optio aspernatur officiis?',
            buttonText: 'visit page'
        },
    ])
    const [current, setCurrent] = useState(0)
    const [bgImage, setBgImage] = useState(1)
    const length = images.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
        setBgImage(bgImage === length - 1 ? 0 : bgImage + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
        setBgImage(bgImage === 0 ? length - 1 : bgImage - 1)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(current === length - 1 ? 0 : current + 1)
            setBgImage(bgImage === length - 1 ? 0 : bgImage + 1)
        }, 15000)
        return () => clearInterval(interval)
    }, [current])



  return (
    <div className='h-[calc(100vh-4rem)] w-full relative mt-6 '>
        {images.map((item, index) => {
            return (
            <div
                
                key={index}
                className={`${
                index === current ? 'animate-rightToLeft z-[3]' : 'left-0'
                }
                 ${index === bgImage ? 'z-[2]' : 'z-[1]'}
                absolute top-0  h-full w-full`}
            >
                <div className='absolute left-0 h-[60%] w-full bg-opacity-50 bottom-0 bg-gradient-to-t from-black/90 to-transparent'></div>
                <img
                src={item.url}
                alt={item.title}
                className='h-full w-full object-cover'
                />

                <div className={`absolute bottom-[10%] pb-8 left-0 w-full max-w-[600px] h-fit flex flex-col ml-[4rem] gap-y-7`}>
                    <h3 data={index} className={`sliderTextHeader text-[2.5rem] leading-[2.4rem] font-bold text-white mb-4 drop-shadow-lg opacity-0 ${bgImage===index?'animate-topCenter animate-delay-[2.1s]':' opacity-0 -translate-y-[100px]'} `}>{item.headerText}</h3>
                    <p className={`sliderTextParagraphy text-slate-300  ${bgImage===index?'animate-bottomCenter opacity-0 animate-delay-[2.4s]':' opacity-0'}`}>{item.paragraphText}</p>
                    <a href="" className={`sliderTextButton text-purple-600 px-6 py-3 bg-purple-300 mt-5 w-fit opacity-0 ${bgImage===index?'animate-leftCenter animate-delay-[2.9s]':' opacity-0'}`}>
                        {item.buttonText}
                    </a>
                </div>
            </div>
            )
        })}
        <button
            onClick={prevSlide}
            className='absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 z-10 rounded-full'
        >
            <img src="/assets/icons/leftIcon.svg" alt="left slider Icon" className="h-6 w-6 hover:h-8 hover:w-8 transition-all" />
        </button>
        <button
            onClick={nextSlide}
            className='absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 z-10 rounded-full'
        >
           <img src="/assets/icons/rightIcon.svg" alt="right slider Icon" className="h-6 w-6 hover:h-8 hover:w-8 transition-all" />
        </button>
        <div className='z-[12] absolute left-0 bottom-8 flex justify-end w-full ml-auto px-8'>
            {images.map((image, index) => {
                return (
                    <div
                        key={index}
                        className={`${
                            index === current ? 'bg-white w-8' : 'bg-gray-300'
                        } h-2 w-2 rounded-full mx-1 transition-all duration-300`}
                    ></div>
                )
            })}
        </div>
    </div>
  )
}

export default ImageSlider