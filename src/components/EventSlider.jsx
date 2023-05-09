import { Box } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Event1 from '../components/LandingPage/EventSlider/Event1'
import Event2 from '../components/LandingPage/EventSlider/Event2'
import Event3 from '../components/LandingPage/EventSlider/Event3'
import Event4 from '../components/LandingPage/EventSlider/Event4'



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../src/components/Slider.css'

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
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>{Event1}</SwiperSlide>
        <SwiperSlide>{Event2}</SwiperSlide>
        <SwiperSlide>{Event3}</SwiperSlide>
        <SwiperSlide>{Event4}</SwiperSlide>
        
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
