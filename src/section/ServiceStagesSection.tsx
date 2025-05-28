'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionTitle } from '@/components/shared'
import TrackIcon from "@/assets/svg/track.svg"
import Image from 'next/image'
gsap.registerPlugin(ScrollTrigger)

export default function ServiceStagesSection() {
  useEffect(() => {
    gsap.from('.service-content-box', {
      opacity: 0,
      y: 200,
      duration: 0.6,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.service-right-panel',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    })

    ScrollTrigger.refresh()
  }, [])

    return (
        <section id='schema' className='mt-[200px] relative z-20 '>
            <div className='w-full h-[500px] absolute z-[-2] bg-[#394854]' />
            <div className='pl-[100px]'>
                <div className='bg-[#0132C5] w-full py-[100px] px-[100px]'>
                    <SectionTitle title="Xizmat Ko'rsatish Bosqichlari" mode='light'/>
                     <section className="flex justify-between w-full gap-[60px]  py-20">
      <div className=" sticky top-16 h-fit max-w-[615px]">
        <h2 className='text-white text-[120px] font-medium tracking-[-6px] leading-[110%] 3xl:text-[100px]'>Ishlash tartibi</h2>
        <Image src={TrackIcon} alt='Track' className='max-w-[550px] h-[383px] object-contain mt-[50px]'/>
      </div>

      <div className=" service-right-panel space-y-6 max-w-[650px] flex flex-col gap-[150px]  pr-4 3xl:gap-[130px]">
          <div className="service-content-box flex items-start gap-[36px] pb-[120px] border-b border-b-[#FFFFFF4D]" >
                                <h4 className='font-organetto text-[60px] font-light leading-[110%] tracking-[-4px] text-[#00145ACC] 3xl:text-[50px]'>01</h4>
                                <div>
                                    <h6 className='text-white text-[26px] font-semibold 3xl:text-[22px]'>Hisob ochish va ID-kod olish</h6>
                                    <div className='flex flex-col gap-3.5 mt-3.5'>
                                    <p className='text-white text-[22px] leading-[130%] 3xl:text-[18px]'>Mijoz Telegram-boti @ipost_bot orqali ro‘yxatdan o‘tadi va hisob ochadi</p>
                                    <p className='text-white text-[22px] leading-[130%] 3xl:text-[18px]'>Ro‘yxatdan o‘tgach, tizim avtomatik tarzda noyob ID-kod yuboradi</p>
                                    <p className='text-white text-[22px] leading-[130%] 3xl:text-[18px]'>Ushbu ID-kodni saqlang — u barcha keyingi buyurtmalarda sizni identifikatsiya qilish uchun kerak bo‘ladi</p>
                                    </div>
                                </div>
          </div>
          <div className="content-box flex items-start gap-[36px] pb-[120px] border-b border-b-[#FFFFFF4D]" >
                                <h4 className='font-organetto text-[60px] font-light leading-[110%] tracking-[-4px] text-[#00145ACC] 3xl:text-[50px]'>02</h4>
                                <div>
                                    <h6 className='text-white text-[26px] font-semibold 3xl:text-[22px]'>Yukni topshirish</h6>
                                    <div className='flex flex-col gap-3.5 mt-3.5'>
                                    <p className='text-white text-[22px] leading-[130%] 3xl:text-[18px]'>Mijoz Xitoydagi yetkazib beruvchi manzilida yoki hududiy ofisimiz/omborda yukni topshiradi</p>
                                    <p className='text-white text-[22px] leading-[130%] 3xl:text-[18px]'>Ombor xodimlari yukni qabul qilib, tashqi ko‘rinishini va hujjatlarni tekshiradi, maxsus kod bilan belgilaydi</p>
                                    <p className='text-white text-[22px] leading-[130%] 3xl:text-[18px]'>Mijozga yuk qabul qilindi xabari va kuzatuv raqami yuboriladi</p>
                                    </div>
                                </div>
          </div>
          <div className="content-box flex items-start gap-[36px] pb-[120px] border-b border-b-[#FFFFFF4D]" >
                                <h4 className='font-organetto text-[60px] font-light leading-[110%] tracking-[-4px] text-[#00145ACC] 3xl:text-[50px]'>03</h4>
                                <div>
                                    <h6 className='text-white text-[26px] font-semibold 3xl:text-[22px]'>O‘zbekiston bo‘ylab 110 dan ortiq filiallarimiz bilan xizmat ko‘rsatamiz</h6>
                                    <div className='flex flex-col gap-3.5 mt-3.5'>
                                    <p className='text-white text-[22px] leading-[130%] 3xl:text-[18px]'>Kompaniyamiz respublika hududida 110 dan ortiq filial orqali faoliyat yuritadi. Har bir hududda mijozlarimizga tezkor, qulay va ishonchli xizmat ko‘rsatish imkoniyatini yaratganmiz.</p>
                                    </div>
                                </div>
          </div>
          <div className="content-box flex items-start gap-[36px] pb-[120px] border-b border-b-[#FFFFFF4D]" >
                                <h4 className='font-organetto text-[60px] font-light leading-[110%] tracking-[-4px] text-[#00145ACC] 3xl:text-[50px]'>04</h4>
                                <div>
                                    <h6 className='text-white text-[26px] font-semibold 3xl:text-[22px]'>Eshikdan eshikka yetkazish xizmati</h6>
                                    <div className='flex flex-col gap-3.5 mt-3.5'>
                                    <p className='text-white text-[22px] leading-[130%] 3xl:text-[18px]'>Mahsulot O‘zbekistondagi omborga yetib kelgach, mahalliy kuryer xizmati tomonidan uyiga yoki ofisiga yetkaziladi</p>
                                    <p className='text-white text-[22px] leading-[130%] 3xl:text-[18px]'>Mijoz ilovada yetkazib berildi xabarini oladi va kuzatuv raqami yopiladi</p>
                                    </div>
                                </div>
          </div>
          <div className="content-box flex items-start gap-[36px] pb-[120px] " >
                                <h4 className='font-organetto text-[60px] font-light leading-[110%] tracking-[-4px] text-[#00145ACC] 3xl:text-[50px]'>05</h4>
                                <div>
                                    <h6 className='text-white text-[26px] font-semibold 3xl:text-[22px]'>Feedback va qo‘llab-quvvatlash</h6>
                                    <div className='flex flex-col gap-3.5 mt-3.5'>
                                    <p className='text-white text-[22px] leading-[130%] 3xl:text-[18px]'>Mijoz ilovada yoki saytning Aloqa bo‘limida fikr-mulohaza qoldirishi mumkin</p>
                                    <p className='text-white text-[22px] leading-[130%] 3xl:text-[18px]'>Ro‘yxatdan o‘tgach, tizim avtomatik tarzda noyob ID-kod yuboradi</p>
                                    <p className='text-white text-[22px] leading-[130%] 3xl:text-[18px]'>24/7 call-markaz va onlayn chat orqali savollar va muammolar tezkor hal etiladi</p>
                                    </div>
                                </div>
          </div>
      </div>
    </section>
    </div>
    </div>  
      </section>
  )
}
