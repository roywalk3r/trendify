"use client";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { ChevronLeft, ChevronRight } from "lucide-react"; // Or use your custom SVGs
import { Button } from "./ui/button";
import HeroItem from "./hero-item";

export default function Hero() {
  return (
    <div className="relative w-full max-w-7xl mx-auto p-8">
      {/* Custom Prev Button */}
      <Button variant={"ghost"} className="custom-prev absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
        <ChevronLeft className="w-6 h-6 text-ascent" />
      </Button>

      {/* Custom Next Button */}
      <Button variant={"ghost"} className="custom-next bg-ascent absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
        <ChevronRight className="w-6 h-6 text-ascent" />
      </Button>

      {/* Swiper */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <HeroItem image={"/images/hero2.jpg"} title={"Elevate Your Style"} text={"Discover the latest trends and timeless classics in fashion."} cta={"shop now"} position={"items-left"}/>
        </SwiperSlide>
        <SwiperSlide>
          <HeroItem image={"/images/heroImg1.png"} title={"Trending Now"} text={"Discover the latest trends and timeless classics in fashion."} cta={"shop now"} position="items-left"/>
        </SwiperSlide>
        <SwiperSlide>
          <HeroItem image={"/images/hero3.jpg"} title={"Latest In Town"} text={"Discover the latest trends and timeless classics in fashion."} cta={"shop now"}/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
