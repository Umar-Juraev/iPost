import React from 'react'
import BotInfoIphoneImage from "@/assets/images/botInfoIphone.png"
import BotInfoLines from "@/assets/images/botInfoLines.png"
import Image from 'next/image'
import BotQrcode from '@/components/shared/BotQrCode'
import ArrowRight from "@/assets/svg/RightArrowBlue.svg"
const BotInfoSection = () => {
  return (
      <section id='contact' className='w-full relative h-[586px] mt-[160px] mb-2.5 overflow-hidden'>
      <div className='w-full absolute right-[-10%] top-0 rounded-[79px] z-10 h-full  bg-[#0132C5] py-[100px] px-[160px]'>
        <div className='max-w-[680px]'>
          <h4 className='text-[63px] text-white font-medium leading-[110%]'>Barcha savol va takliflaringiz uchun
            <div className=' flex items-center mt-5 gap-5'>
            <div className="w-full max-w-[470px] h-fit p-3 bg-gradient-to-r from-[#0132C5] via-[#009DFF] to-[#12FFAA] rounded-[80px] flex items-center justify-center gap-[31px]">
              <Image src={ArrowRight} alt='Arrow right'/>
                <a className='text-[47px] font-normal' href="https://t.me/Abusahiytez_bot" target='_blank'>@ipostuzbot</a>
              </div>
            <span>ga</span>
            </div>
            <p className='mt-5'>murojaat qiling</p>
          </h4>

        </div>
        <Image className='absolute right-[0%] top-0 object-contain z-[-1] h-[100%]' src={BotInfoLines} alt='Lines' />
          <div className='absolute right-[18.5%] bottom-0 h-[90%]'>
          <Image src={BotInfoIphoneImage} alt='Phone' className='h-full object-contain' />
         </div>
        <div className='rounded-[50%] p-[70px] bg-white z-10 absolute right-[16.5%] top-[25%] flex justify-center items-center'>
              <BotQrcode/>
          </div>
        </div>
    </section>
  )
}

export default BotInfoSection