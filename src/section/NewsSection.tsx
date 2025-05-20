"use client"
import { SectionTitle } from '@/components/shared'
import { Card, CardFooter } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious, CarouselItem, useCarousel } from '@/components/ui/carousel'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React, { useState } from 'react'
import NewsCarouselBg from "@/assets/images/newsCarouselBg.png"
import Autoplay from 'embla-carousel-autoplay'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import ArrowLeft from "@/assets/svg/arrow-left.svg"
import ArrowRight from "@/assets/svg/arrow-right.svg"
import { UseEmblaCarouselType } from 'embla-carousel-react'

const NewsSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )
  const [embla, setEmbla] = useState<any>();
  // const carousel = useCarousel();

  return (
    <div className='container-fluid mt-[116px] mb-[2rem]'>
      <SectionTitle title='Yangiliklar' mode='dark'/>
      <Tabs defaultValue="news" className='mt-[40px]'>
        <div className='flex items-baseline justify-between w-full'>
        <TabsList className='flex gap-2.5'>
          <TabsTrigger className=' rounded-[30px] text-[#394854] border border-[#39485426] text-[14px] font-medium py-[17px] px-[40px] h-[60px] hover:cursor-pointer hover:bg-[#d8d8d829] data-[state=active]:bg-[#0132C5]
      data-[state=active]:text-white
      data-[state=active]:border-transparent' value='news'>Yangiliklar</TabsTrigger>
          <TabsTrigger className=' rounded-[30px] text-[#394854] border border-[#39485426] text-[14px] font-medium py-[17px] px-[40px] h-[60px] hover:cursor-pointer hover:bg-[#d8d8d829] data-[state=active]:bg-[#0132C5]
      data-[state=active]:text-white
      data-[state=active]:border-transparent' value='advice'>Foydali maslahatlar</TabsTrigger>
          </TabsList>
          <div className='flex gap-2.5'>
            <button
              onClick={() => embla?.scrollPrev()}
              className='border border-[#AEB8C0] rounded-[50%] w-[60px] h-[60px] flex justify-center items-center hover:cursor-pointer'
            >
              <Image src={ArrowLeft} alt='Left'/>
            </button>
            <button
              onClick={() => embla?.scrollNext()}
              className='border border-[#AEB8C0] rounded-[50%] w-[60px] h-[60px] flex justify-center items-center hover:cursor-pointer'
            >
              <Image src={ArrowRight} alt='Right'/>
            </button>
          </div>
        </div>
        <TabsContent  className='mt-[80px]' value='news'>
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        align: "start",
      }}
            className="w-full"
            setApi={setEmbla}
    >
      <CarouselContent>
        {Array.from({ length: 10 }).map((_, index) => (
 <CarouselItem key={index} className="basis-3/11">
 <Card className="relative bg-[#F8F8F9]  w-[100%] p-[34px] border-none rounded-t-none rounded-b-none overflow-hidden group">


   <div
     className="absolute inset-0 bg-cover bg-center translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out z-0"
     style={{ backgroundImage: `url(${NewsCarouselBg.src})` }}
   />

   <div className="absolute inset-0 bg-black/50 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out z-10 pointer-events-none" />

   <div className="relative z-20 space-y-4 transition-colors duration-300 group-hover:text-white">
     <h5 className="font-semibold leading-[25px] text-[18px]">
       Xitoydan O‘zbekistonga yetkazib berishda yangi yondashuvlar
     </h5>
     <p className="text-[18px]">
       Xitoydan O‘zbekistonga kengaytirilgan xizmatlar taklif etiladi. Endi siz faqat yuk tashish emas, balki konsolidatsiya xizmati, bojxona rasmiylashtiruvi va eshikkacha yetkazib berish kabi qo‘shimcha xizmatlardan ham foydalanishingiz mumkin.
     </p>
   </div>

   {/* Card footer */}
   <CardFooter className="pt-[36px] p-0 flex justify-between w-full border-t border-t-[#39485426] mt-[100px] relative z-20 transition-colors duration-300 group-hover:border-t-[#74899a]">
     <strong className="font-medium text-[#0132C5] text-[86px] group-hover:text-white">1{index}</strong>
     <span className="font-medium text-[#394854] text-[14px] group-hover:text-white">
       июн <br /> 2025
     </span>
   </CardFooter>
 </Card>
</CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
        </TabsContent>
        <TabsContent className='mt-[80px]' value='advice'>
          Advice
        </TabsContent>
     </Tabs>
    </div>
  )
}

export default NewsSection