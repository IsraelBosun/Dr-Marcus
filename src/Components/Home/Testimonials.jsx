import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/scrollbar";
import { data } from "../../Data";
import { EffectCards } from "swiper";
import { Scrollbar } from "swiper";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Testimonials = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 500);
    };

    handleResize(); // call once on mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div>
        <div className="flex flex-col items-center mb-4 ">
        <div className="text-gray text-sm">TESTIMONIALS</div>
        <div className="text-lg ">What My Clients Say</div>
        </div>
        <div>
          {isSmallScreen ? (
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="section mySwiper w-[240px] h-[320px]"
            >
              {
                data.map(({ avatar, name, review, school, id }) => {
                  return (
                    <SwiperSlide className="shadow swiping" key={id}>
                      <div className="w-1/2 ">
                        <img src={avatar} alt="" className="shadow" />
                      </div>
                      <div className="text-center">{review}</div>
                      <div className="flex flex-col">
                        <p>{name}</p>
                        <p className="text-[9px]">{school}</p>
                      </div>
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          ) : (
            
            <Swiper
            modules = {[ Pagination ]}
            spaceBetween = {40}
            slidesPerView = {1}
            pagination = {{ clickable: true }}
            className='section testimonials__container'>
           {
              data.map(({ avatar, name, review, school, id }) => {
                return(
                  <SwiperSlide key={id} className ="testimonials__swiper  flex  text-[#e9e9ea] items-start justify-center gap-3  bg-Blue py-[1rem] px-[0.9rem] shadow  ">
                   
                      <div className='  w-1/3   '>
                        <img src={avatar} alt="" className="w-full shadowing " />
                      </div>
                      <div className="flex flex-col gap-2 -mt-2  ">
                        <div className="flex items-center  gap-4 ">
                      <p className='font-bold'>{name}</p>
                      <p className="text-xs">{school}</p>
                      </div>
                      <div className='text-sm'>
                        {review}
                      </div>
                      </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
          )}
        </div>
      </div>
    </>
  );
};

export default Testimonials;


{/* <SwiperSlide key={id} className ="testimonials__swiper text-sm flex flex-col text-[#e9e9ea] items-center justify-center text-center gap-4 bg-Blue py-[1rem] px-[0.9rem] rounded-[2rem]">
<div className=' '>
<div className='mt-12 w-36 h-36 aspect-w-1 aspect-h-1 overflow-hidden rounded-full mx-auto mb-4 border-4 border-teal-800'>
  <img src={avatar} alt="" className="" />
</div>
<p className='testimonials__text'>{review}</p>
<div className='testimonials__nameschool'>
  <div className = "testi__name mt-5">{name}</div>
  <div className = "font-semibold ">{school}</div>
</div>
</div>
</SwiperSlide> */}