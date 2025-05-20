import SectionHeader from '@/components/shared/sectionHeader'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious, CarouselItem } from '@/components/ui/carousel'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'

const NewsSection = () => {
  return (
    <div className='container-fluid mt-[116px] mb-[2rem]'>
      <SectionHeader title='YANGILIKLAR' />
      <Tabs defaultValue="news" className='mt-[40px]'>
        <TabsList className='flex gap-2.5'>
          <TabsTrigger className=' rounded-[30px] text-[#394854] border border-[#39485426] text-[14px] font-medium py-[17px] px-[40px] h-[60px] hover:cursor-pointer hover:bg-[#d8d8d829] data-[state=active]:bg-[#0132C5]
      data-[state=active]:text-white
      data-[state=active]:border-transparent' value='news'>Yangiliklar</TabsTrigger>
          <TabsTrigger className=' rounded-[30px] text-[#394854] border border-[#39485426] text-[14px] font-medium py-[17px] px-[40px] h-[60px] hover:cursor-pointer hover:bg-[#d8d8d829] data-[state=active]:bg-[#0132C5]
      data-[state=active]:text-white
      data-[state=active]:border-transparent' value='advice'>Foydali maslahatlar</TabsTrigger>
        </TabsList>
        <TabsContent  className='mt-[80px]' value='news'>
        <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
              <Card className='bg-[#F8F8F9] max-w-[440px] p-[34px] border-none rounded-t-none rounded-b-none'>
                  <h5 className=''>Xitoydan O‘zbekistonga yetkazib berishda yangi yondashuvlar</h5>
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