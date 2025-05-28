'use client'
import { SectionTitle } from '@/components/shared'
import React, { useEffect } from 'react'
import CircleLine from "@/assets/images/circleLine.png"
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const CompanyHistorySection = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.content-box', {
        opacity: 0,
        y: 200,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.right-panel',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })
    })
  
    return () => ctx.revert() // component unmount bo'lsa tozalanadi
  }, [])
  
  return (
      <section className='container-fluid mt-[150px] '>
          <SectionTitle title='Kompaniya Tarixi' mode='dark' />
          <div className='mt-[200px] flex items-start  justify-around gap-[50px] 3xl:justify-between'>
              <div className='max-w-[747px] w-full  sticky top-16 h-fit flex items-start justify-end 3xl:max-w-[700px]'>
                  <Image src={CircleLine} alt='CircleLine' className=' top-[5%] mt-[50px]  max-w-[550px]' />
                  <div className='absolute left-[6%] z-[-1] top-[-15%] flex flex-col justify-center font-organetto'>
                      <h4 className='text-[200px] text-[#F8F8F9] font-bold tracking-[-4px] font-organetto 3xl:text-[190px]'>2018</h4>
                      <h3 className='text-[200px] text-[#0132C5] font-bold tracking-[-4px] font-organetto 3xl:text-[190px]'>2019</h3>
                      <h4 className='text-[200px] text-[#F8F8F9] font-bold tracking-[-4px] font-organetto 3xl:text-[190px]'>2020</h4>
                  </div>
              </div>
              <div className='right-panel'>
              <div className='content-box pb-[80px] border-b border-b-[#C4C4C4] mt-[80px] 3xl:pb-[65px] 3xl:mt-[65px]'>
            <h2 className='text-[#AEB8C0] text-[80px] font-light tracking-[4px] leading-[110%] font-organetto 3xl:text-[74px]'>01</h2>
            <p className='text-[20px] text-[#2B3944] font-medium leading-[140%] max-w-[576px] mt-[40px] 3xl:text-[18px] 3xl:max-w-[530px]'>Kompaniya dastlab 2019-yilda Chinwakil bo&apos;lib ish faoliyatini boshladi.Chinwakil so&apos;zi xitoydagi ishonchli vakil so&apos;zini anglatadi.</p>
                  </div>
              <div className='content-box pb-[80px] border-b border-b-[#C4C4C4] mt-[80px] 3xl:pb-[65px] 3xl:mt-[65px]'>
            <h2 className='text-[#AEB8C0] text-[80px] font-light tracking-[4px] leading-[110%] font-organetto 3xl:text-[74px]'>02</h2>
            <p className='text-[20px] text-[#2B3944] font-medium leading-[140%] max-w-[576px] mt-[40px] 3xl:text-[18px] 3xl:max-w-[530px]'>Kompaniya faoliyatini kengaytirib Yiwu shahrida zamonaviy omborlar ochdi</p>
                  </div>
              <div className='content-box pb-[80px] border-b border-b-[#C4C4C4] mt-[80px] 3xl:pb-[65px] 3xl:mt-[65px]'>
            <h2 className='text-[#AEB8C0] text-[80px] font-light tracking-[4px] leading-[110%] font-organetto 3xl:text-[74px]'>03</h2>
            <p className='text-[20px] text-[#2B3944] font-medium leading-[140%] max-w-[576px] mt-[40px] 3xl:text-[18px] 3xl:max-w-[530px]'>Ipost — bu Fast & Easy Cargo. Nomimizning o&apos;zi bizning va&apos;damiz: yuklaringizni tez, oson va ishonchli yetkazamiz</p>
                  </div>
              <div className='content-box pb-[80px] mt-[80px] 3xl:pb-[65px] 3xl:mt-[65px]'>
            <h2 className='text-[#AEB8C0] text-[80px] font-light tracking-[4px] leading-[110%] font-organetto 3xl:text-[74px]'>04</h2>
            <p className='text-[20px] text-[#2B3944] font-medium leading-[140%] max-w-[576px] mt-[40px] 3xl:text-[18px] 3xl:max-w-[530px]'>Kompaniya 250 dan ortiq muvaffaqiyatli loyihani amalga oshirdi, umumiy qiymati 15 million AQSH dollaridan ortiq miqdorga ega bo&apos;ldi.</p>
                  </div>
              </div>
          </div>
    </section>
  )
}

export default CompanyHistorySection