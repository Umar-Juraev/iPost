import React from "react";
import Image from "next/image";
import Service1 from "@/assets/images/service-1.png";
import Service2 from "@/assets/images/service-2.png";
import Service3 from "@/assets/images/service-3.png";
import ArrowTopRight from "@/assets/icons/arrowTopRight.svg";
import { Button } from "@/components/ui/button";

const ServiceSection = () => {
  return (
    <section>
      <div className="w-full h-[1500px]  flex items-start justify-center bg-[url('@/assets/images/serviceBg.webp')] bg-cover bg-center">
        <div className="relative z-10 container bg-opacity-80 p-6 mt-[200px] rounded ">
          <div className="border-b border-b-[#FFFFFF80] w-full pb-4">
            <h3 className="text-white text-[20px] font-normal">XIZMATLAR</h3>
          </div>
          <h2 className="text-[150px] text-white font-medium leading-[110%] tracking-[-6px] mt-20">
            Siz uchun quyidagi xizmatlarni taklif etamiz
          </h2>
          <div className="w-full flex justify-between gap-2 mt-20">
            <p className="text-[32px] text-white leading-[130%] max-w-[400px]">
              Har bir bosqich — bizning javobgarligimizda.
            </p>
            <div className="max-w-[620px]">
              <p className="text-white text-[22px] font-normal leading-[130%]">
                Biz mijozlarimizga qulay va tushunarli xizmatni taklif etamiz:
                yukni jo‘natuvchidan olib, bojxona va yetkazib berish
                jarayonlarini to‘liq nazorat qilamiz va uni manzilgacha ishonch
                bilan yetkazamiz.
              </p>
              <div className="mt-[40px] flex gap-2.5">
                <Button
                  size={"default"}
                  className="border border-white rounded-[30px] text-white h-[60px] px-[40px]"
                >
                  ISHONCHLI XIZMAT
                </Button>
                <Button
                  size={"default"}
                  className="border border-white rounded-[30px] text-white h-[60px] px-[40px]"
                >
                  SHAFFOF JARAJOY
                </Button>
                <Button
                  size={"default"}
                  className="border border-white rounded-[30px] text-white h-[60px] px-[40px]"
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
                <h5 className="text-[#0132C5] text-[50px] font-medium leading-[120%]">
                  Avtocargo
                </h5>
                <p className="text-[#2B3944] text-[20px]  leading-[130%] mt-5">
                  yuklaringizni avtomobil orqali 10 – 15 kun ichida omborga
                  yetkazib beramiz.
                </p>
              </div>
              <div className="max-w-[500px] flex items-end justify-between">
                <span className="text-[#0132C5] text-[20px]">
                  Buyurtma berish
                </span>
                <Button
                  className="rounded-[50%] p-[10px] w-[90px] h-[90px] text-[#0132C5] border-2 border-[#0132C5] bg-transparent group"
                  size={"icon"}
                >
                  <Image alt="Arrow" src={ArrowTopRight} />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex gap-[80px] border-b border-b-[#C4C4C4] pb-20">
            <Image src={Service2} alt="Service Image" quality={100} />
            <div className="flex flex-col justify-between">
              <div className="max-w-[500px]">
                <h5 className="text-[#0132C5] text-[50px] font-medium leading-[120%]">
                  Omborxona xizmatlari
                </h5>
                <p className="text-[#2B3944] text-[20px]  leading-[130%] mt-5">
                  Xitoydagi omborimizga yetib kelgan yukingizni tekshirib,
                  rasmiy qabul qilamiz. Har bir partiya fotosuratga olinadi va
                  og‘irligi aniqlanadi.
                </p>
              </div>
              <div className="max-w-[500px] flex items-end justify-between">
                <span className="text-[#0132C5] text-[20px]">
                  Buyurtma berish
                </span>
                <Button
                  className="rounded-[50%] p-[10px] w-[90px] h-[90px] text-[#0132C5] border-2 border-[#0132C5] bg-transparent"
                  size={"icon"}
                >
                  <Image alt="Arrow" src={ArrowTopRight} />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex gap-[80px]">
            <Image src={Service3} alt="Service Image" quality={100} />
            <div className="flex flex-col justify-between">
              <div className="max-w-[500px]">
                <h5 className="text-[#0132C5] text-[50px] font-medium leading-[120%]">
                  Bojxona va sug‘urta xizmatlari
                </h5>
                <p className="text-[#2B3944] text-[20px]  leading-[130%] mt-5">
                  Yukingiz uchun zarur bo‘lgan barcha bojxona deklaratsiyalari,
                  faktura va sertifikatlarni tayyorlaymiz hamda bojxona
                  to‘lovlarini hisoblab, rasmiy to‘lovlarni amalga oshiramiz.
                </p>
              </div>
              <div className="max-w-[500px] flex items-end justify-between">
                <span className="text-[#0132C5] text-[20px]">
                  Buyurtma berish
                </span>
                <Button
                  className="rounded-[50%] p-[10px] w-[90px] h-[90px] text-[#0132C5] border-2 border-[#0132C5] bg-transparent"
                  size={"icon"}
                >
                  <Image alt="Arrow" src={ArrowTopRight} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServiceSection;
