"use client"
import { useRef, useState } from "react"
import { SectionTitle } from "@/components/shared"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Carousel1 from "@/assets/images/carousel1.png"
import Carousel2 from "@/assets/images/carousel2.png"
import Carousel3 from "@/assets/images/carousel3.png"
import Carousel4 from "@/assets/images/carousel4.png"

import "swiper/css"
import "swiper/css/effect-fade"

const slides = [
  {
    id: 1,
    title: "01",
    heading: "Sifatga bo‘lgan e’tibor",
    description:
      "Sifatga bo‘lgan e’tibor: Bizning har bir qarorimizda yuqori sifatni ta’minlash — mijozlarimizning ishonchini qozonishning asosidir.",
    image: Carousel1,
  },
  {
    id: 2,
    title: "02",
    heading: "Innovatsiya",
    description:
      "Mijozga yo‘naltirilganlik: Mijozlarimizning ehtiyojlarini birinchi o‘ringa qo‘yish, ularning muvaffaqiyatiga hissa qo‘shish bizning asosiy maqsadimiz.",
    image: Carousel2,
  },
  {
    id: 3,
    title: "03",
    heading: "Jamoaviy ish",
    description:
      "Texnologik innovatsiya: Yangi texnologiyalarni doimiy ravishda joriy etib, cargo jarayonlarini avtomatlashtirish va optimallashtirishni maqsad qilamiz.",
    image: Carousel3,
  },
  {
    id: 4,
    title: "04",
    heading: "Mas’uliyat",
    description:
      "Javobgarlik: Har bir yuk, har bir buyurtma uchun biz mas'ulmiz. Biz mijozlarimizga sifatli va xavfsiz xizmatni taqdim etish uchun javobgarmiz.",
    image: Carousel4,
  },
]

const OurValues = () => {
  const swiperRef = useRef<any>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    if (swiperRef.current) swiperRef.current.slideNext()
  }

  const prevSlide = () => {
    if (swiperRef.current) swiperRef.current.slidePrev()
  }

  return (
    <section className="relative flex items-start">
      <div className="container-fluid absolute w-[92%] z-10 top-[6%]">
        <SectionTitle title="Bizning Qadriyatlarimiz" mode="light" />
      </div>
      <div className="absolute z-20 left-10 bottom-28 flex gap-4  text-white">
    <button
      onClick={prevSlide}
      className="cursor-pointer w-[86px] h-[86px] border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#0033cc] transition"
    >
      <ArrowLeft size={28} />
    </button>
    <button
      onClick={nextSlide}
      className="cursor-pointer w-[86px] h-[86px] border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#0033cc] transition"
    >
      <ArrowRight size={28} />
    </button>
  </div>

      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full flex items-end shadow-lg bg-[#0132C5]  "
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="flex w-full">
              {/* Text Side */}
              <div className="w-1/2 text-white px-10 pb-[90px] flex flex-col justify-center">
                {activeIndex === index && (
                  <div className="max-w-[512px] w-full pb-[20px] transition-opacity duration-500 ease-in-out">
                    <h2 className="text-[80px] font-light font-organetto">
                      {slide.title}
                    </h2>
                    <p className="text-[22px] font-normal mt-[40px] leading-[130%] text-white 3xl:text-[20px]">
                      {slide.description}
                    </p>
                  </div>
                )}
              </div>

              {/* Image Side */}
              <div className="w-1/2 relative">
                <Image
                  src={slide.image}
                  alt={slide.heading}
                  width={600}
                  height={700}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-16 right-12 text-sm text-white/80">
                  {index + 1} / {slides.length}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="bg-[#394854] h-[380px] flex flex-col w-[150px]"/>
    </section>
  )
}

export default OurValues
