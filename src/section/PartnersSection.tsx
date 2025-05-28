import React from 'react'
import AlibabaLogo from "@/assets/svg/alibaba.svg"
import AliExpressLogo from "@/assets/svg/aliExpress.svg"
import PinduoduoLogo from "@/assets/svg/pinduoduo.svg"
import TaobaoLogo from "@/assets/svg/taobao.svg"
import WeChatLogo from "@/assets/svg/weChat.svg"
import ChinvakilLogo from "@/assets/svg/chinvakil.svg"
import AbusahiyLogo from "@/assets/svg/abuSahiy.svg"
import AbusahiyCargoLogo from "@/assets/svg/abuSahiyCargo.svg"
import NumberLogo from "@/assets/svg/1688.svg"
import Image from 'next/image'

const PartnersSection = () => {

    const logoBrands = [
        AlibabaLogo,
        AliExpressLogo,
        PinduoduoLogo,
        TaobaoLogo,
        WeChatLogo,
        ChinvakilLogo,
        AbusahiyLogo,
        AbusahiyCargoLogo,
        NumberLogo
      ]
  return (
      <section id='partners' className='grid grid-cols-5 border-t border-b border-[#39485426]'>
      <div className="w-full bg-[#0132C5] flex items-center justify-center h-[384px] relative overflow-hidden group">
  <div className="absolute top-0 left-0 h-full w-0 bg-[#2B3944] opacity-40 transition-all duration-500 group-hover:w-full z-0"></div>
  <h5 className="font-medium text-white text-[40px] z-10">Hamkorlar</h5>
          </div>
          {logoBrands.map((image, index) =>
              <div key={index} className='flex items-center justify-center h-[384px] w-full border border-[#39485426] group '>
                    <Image src={image} alt='Logo' className='w-[260px] h-[260px] object-contain grayscale duration-100 ease-in group-hover:grayscale-0 3xl:w-[240px] 3xl:h-[230px]'/>
                </div>
        )}

    </section>
  )
}

export default PartnersSection