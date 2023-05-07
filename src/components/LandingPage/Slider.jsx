import { Box } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from './SlideSection/Slide1'
import slide2 from './SlideSection/Slide2'
import slide3 from './SlideSection/Slide3'
import slide4 from './SlideSection/Slide4'
import slide5 from './SlideSection/Slide5'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../components/Slider.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

export default function PictureSlider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        id='Slider'
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>{slide1}</SwiperSlide>
        <SwiperSlide>{slide2}</SwiperSlide>
        <SwiperSlide>{slide3}</SwiperSlide>
        <SwiperSlide>{slide4}</SwiperSlide>
        <SwiperSlide>{slide5}</SwiperSlide>
        
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
