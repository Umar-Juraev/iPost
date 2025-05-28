import React from "react";
import Image from "next/image";
import Service1 from "@/assets/images/service-1.png";
import Service2 from "@/assets/images/service-2.png";
import Service3 from "@/assets/images/service-3.png";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/shared";
import ServiceBg from "@/assets/images/serviceBg.webp"
import { BsArrowUpRight } from "react-icons/bs";

const ServiceSection = () => {
  return (
    <section id="services">
      <div style={{backgroundImage: `url(${ServiceBg.src})`}} className="w-full h-[1300px]  flex items-start justify-center  bg-cover bg-center">
        <div className="relative z-10 container bg-opacity-80 p-6 mt-[150px] rounded ">
        <SectionTitle title="Xizmatlar" mode="light"/>
          <h2 className="text-[120px] text-white font-medium leading-[110%] tracking-[-6px] mt-20 3xl:text-[110px] 3xl:max-w-[80%]">
            Siz uchun quyidagi xizmatlarni taklif etamiz
          </h2>
          <div className="w-full flex justify-between gap-2 mt-20">
            <p className="text-[30px] text-white leading-[130%] max-w-[400px] 3xl:text-[26px]">
              Har bir bosqich — bizning javobgarligimizda.
            </p>
            <div className="max-w-[620px]">
              <p className="text-white text-[20px] font-normal leading-[130%] 3xl:text-[17px]">
                Biz mijozlarimizga qulay va tushunarli xizmatni taklif etamiz:
                yukni jo‘natuvchidan olib, bojxona va yetkazib berish
                jarayonlarini to‘liq nazorat qilamiz va uni manzilgacha ishonch
                bilan yetkazamiz.
              </p>
              <div className="mt-[40px] flex gap-3">
                <Button
                  size={"default"}
                  className="border border-white rounded-[30px] text-white h-[50px] px-[24px] text-[14px]"
                >
                  ISHONCHLI XIZMAT
                </Button>
                <Button
                  size={"default"}
                  className="border border-white rounded-[30px] text-white h-[50px] px-[24px] text-[14px]"
                >
                  SHAFFOF JARAJOY
                </Button>
                <Button
                  size={"default"}
                  className="border border-white rounded-[30px] text-white h-[50px] px-[24px] text-[14px]"
                >
                  KAFOLATNI NATIJA
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1450px] bg-[#0132C5] relative">
        <div className="absolute right-0 top-[-13%] bg-white p-10 flex flex-col gap-[40px]">
          <div className="flex gap-[80px] border-b border-b-[#C4C4C4] pb-20">
            <Image src={Service1} alt="Service Image" quality={100} />
            <div className="flex flex-col justify-between">
              <div className="max-w-[500px]">
                <h5 className="text-[#0132C5] text-[50px] font-medium leading-[120%] 3xl:text-[48px]">
                  Avtocargo
                </h5>
                <p className="text-[#2B3944] text-[20px]  leading-[130%] mt-5 3xl:text-[18px]">
                  yuklaringizni avtomobil orqali 10 – 15 kun ichida omborga
                  yetkazib beramiz.
                </p>
              </div>
              <div className="max-w-[500px] flex items-end justify-between">
                <span className="text-[#0132C5] text-[20px]">
                  Buyurtma berish
                </span>
                <button 
  className="relative flex items-center  justify-center cursor-pointer overflow-hidden rounded-full p-[10px] text-2xl w-[90px] h-[90px] border-2 border-[#0132C5] text-[#0132C5] bg-transparent group">
  <BsArrowUpRight className="text-[27px] relative z-10 group-hover:text-white transition-colors duration-300" />
  <span className="absolute inset-0 bg-[#0132C5] scale-0 group-hover:scale-150 transition-transform duration-500 rounded-full z-0 origin-center"></span>
</button>
              </div>
            </div>
          </div>
          <div className="flex gap-[80px] border-b border-b-[#C4C4C4] pb-20">
            <Image src={Service2} alt="Service Image" quality={100} />
            <div className="flex flex-col justify-between">
              <div className="max-w-[500px]">
                <h5 className="text-[#0132C5] text-[50px] font-medium leading-[120%] 3xl:text-[48px]">
                  Omborxona xizmatlari
                </h5>
                <p className="text-[#2B3944] text-[20px]  leading-[130%] mt-5 3xl:text-[18px]">
                  Xitoydagi omborimizga yetib kelgan yukingizni tekshirib,
                  rasmiy qabul qilamiz. Har bir partiya fotosuratga olinadi va
                  og‘irligi aniqlanadi.
                </p>
              </div>
              <div className="max-w-[500px] flex items-end justify-between">
                <span className="text-[#0132C5] text-[20px]">
                  Buyurtma berish
                </span>
                <button 
  className="relative flex items-center  justify-center cursor-pointer overflow-hidden rounded-full p-[10px] text-2xl w-[90px] h-[90px] border-2 border-[#0132C5] text-[#0132C5] bg-transparent group">
  <BsArrowUpRight className="text-[27px] relative z-10 group-hover:text-white transition-colors duration-300" />
  <span className="absolute inset-0 bg-[#0132C5] scale-0 group-hover:scale-150 transition-transform duration-500 rounded-full z-0 origin-center"></span>
</button>
              </div>
            </div>
          </div>
          <div className="flex gap-[80px]">
            <Image src={Service3} alt="Service Image" quality={100} />
            <div className="flex flex-col justify-between">
              <div className="max-w-[500px]">
                <h5 className="text-[#0132C5] text-[50px] font-medium leading-[120%] 3xl:text-[48px]">
                  Bojxona va sug‘urta xizmatlari
                </h5>
                <p className="text-[#2B3944] text-[20px]  leading-[130%] mt-5 3xl:text-[18px]">
                  Yukingiz uchun zarur bo‘lgan barcha bojxona deklaratsiyalari,
                  faktura va sertifikatlarni tayyorlaymiz hamda bojxona
                  to‘lovlarini hisoblab, rasmiy to‘lovlarni amalga oshiramiz.
                </p>
              </div>
              <div className="max-w-[500px] flex items-end justify-between">
                <span className="text-[#0132C5] text-[20px]">
                  Buyurtma berish
                </span>
                <button 
  className="relative flex items-center  justify-center cursor-pointer overflow-hidden rounded-full p-[10px] text-2xl w-[90px] h-[90px] border-2 border-[#0132C5] text-[#0132C5] bg-transparent group">
  <BsArrowUpRight className="text-[27px] relative z-10 group-hover:text-white transition-colors duration-300" />
  <span className="absolute inset-0 bg-[#0132C5] scale-0 group-hover:scale-150 transition-transform duration-500 rounded-full z-0 origin-center"></span>
</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServiceSection;
