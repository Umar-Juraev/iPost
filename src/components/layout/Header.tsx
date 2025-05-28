"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/icons/logo.svg";
import banner1 from "@/assets/images/main-banner1.webp";
import banner2 from "@/assets/images/main-banner2.webp";
import BannerBottom from "@/assets/images/bannerBottom.png"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Autoplay from "embla-carousel-autoplay";
import { ChevronDown, MoveUpRight } from "lucide-react";
import { useEditorModal } from "@/hooks/use-modal";
import { LanguageSelector } from "../ui/languageSelector";

export default function Header() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );
  const [modal, showModal, isOpen] = useEditorModal();
  // const [formData, setFormData] = React.useState({
  //   name: "",
  //   username: "
  // });

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { id, value } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [id]: value,
  //   }));
  // };
 
  const carouselItems = [banner1, banner2];

  return (
    <header className="relative">
      <section className="flex justify-center items-center h-20 absolute z-10 border-b  border-[#FFFFFF4D] w-full bg-[#FFFFFF1A] text-white uppercase px-6 font-organetto 3xl:text-[11px] 2xl:text-[10px]  ">
        <Image src={logo} alt={""} className="mr-12" />
        <nav className="flex items-center border-r border-l border-[#ffffff4d] h-[72px] ">
          <ul className="flex items-center px-4">
            <li>
              <Link href="#about-us" className="pt-4 px-5 xl:text">
                Biz haqimizda
              </Link>
            </li>
            <li>
              <Link href="#services" className="pt-4 px-5">
                Xizmatlar
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="pt-4 px-5">
                Narxlar
              </Link>
            </li>
            <li>
              <Link href="#news" className="pt-4 px-5">
                Yangiliklar
              </Link>
            </li>
            <li>
              <Link href="#contact" className="pt-4 px-5">
                Aloqa
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2.5 2xl:pl-5">
          <a href="tel:+998951158080" className="pl-5 text-nowrap font-light text-sm 3xl:text-[13px] 2xl:text-[12px] lg:text-[10px]">
            +998 95 115 80 80
          </a>
          <Button
            variant="outline"
            className="border border-[#FFFFFF33] rounded-[50px] px-5 uppercase h-[42px] flex items-center gap-2.5 cursor-pointer 3xl:px-4 2xl:px-2 xl:px-1"
            onClick={() => {
              showModal("", (onClose) => (
                <div className="flex items-start gap-[140px] px-20 pt-20 pb-15">
                  <div className="w-[500px] flex flex-col gap-20">
                    <div className="">
                      <Label
                        htmlFor="name"
                        className="text-right text-[#9099A0] uppercase"
                      >
                        Ismingiz
                      </Label>
                      <Input
                        // value={formData.name}
                        // onChange={handleInputChange}
                        id="name"
                        className="col-span-3"
                      />
                    </div>
                    <div className="">
                      <Label
                        htmlFor="username"
                        className="text-right text-[#9099A0] uppercase"
                      >
                        Telefon raqamingiz
                      </Label>
                      <Input
                        // value={formData.username}
                        // onChange={handleInputChange}
                        id="username"
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <div className="max-w-[353px] flex flex-col">
                    <p className="pb-7.5 font-montserrat font-medium text-4xl">
                      Ariza qoldiring — siz bilan tez orada bog‘lanamiz
                    </p>
                    <p className="pb-10 font-montserrat font-normal text-lg">
                      Aloqa ma&apos;lumotlaringizni qoldiring va bizning
                      menejerimiz sizga ko‘proq qiziqarli tafsilotlarni aytib
                      beradi
                    </p>
                    <Button
                      type="submit"
                      className="bg-blue rounded-none h-20 text-white text-[13.13px] font-medium cursor-pointer"
                      onClick={() => {
                        onClose();
                      }}
                    >
                      Ariza yuborish
                    </Button>
                  </div>
                </div>
              ));
            }}
          >
            <span className="text-[10px]  font-light 3xl:text-[9px]">Ariza qoldiring</span>
            <ChevronDown
              size={20}
              color="white"
              style={{
                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </Button>
          <LanguageSelector />
        </div>
        {modal}
      </section>
      {/* <div className="bg-blue w-screen rotate-[17deg] h-96 absolute z-20 right-60 -bottom-80"></div>
      <div className="bg-blue w-screen -rotate-[17deg] h-96 absolute z-20 left-60 -bottom-80"></div> */}
      <section className=" text-white absolute z-20 left-[10%] transform  top-[15%]">
        <h1 className="3xl:text-[170px] 3xl:mb-2  2xl:160px xl:text-150px ">Oson va tez!</h1>
        <div className="flex items-start gap-72 mb-14">
          <p className="3xl:text-2xl 2xl:text-2xl font-medium w-[25%]">
            iPost cargo — yukingiz biz bilan ishonchli yo‘lda!
          </p>
          <p className="text-[22px] font-base w-[30%] 3xl:text-[20px] 2xl:text-[18px] xl:text-[16px]">
            Biz – Xitoydan O‘zbekistonga tovarlar yetkazib berishga
            ixtisoslashgan cargo kompaniyasimiz.
          </p>
        </div>
        <div className="flex gap-5">
          <Button className="3xl:h-[70px] 3xl:text-[14px]" variant="primary">
            <span> Profilga kirish</span>
            <MoveUpRight />
          </Button>
          <Button className="3xl:h-[70px] 3xl:text-[14px]" variant="secondary">
            <span>trek raqam qo&apos;shish</span>
             <MoveUpRight />
          </Button>
        </div>
      </section>
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselItem key={index}>
              <Image className="w-full object-cover h-[1000px]" src={item} alt="" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Image src={BannerBottom} alt="Banner bottom" className="w-screen object-cover h-96 absolute z-20 left-0 bottom-[0%]"/>
    </header>
  );
}
