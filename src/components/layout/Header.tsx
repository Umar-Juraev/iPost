"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/icons/logo.svg";
import banner1 from "@/assets/images/main-banner.webp";
import banner2 from "@/assets/images/main-banner2.webp";

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
  //   username: "",
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
    <header className="h-screen w-screen overflow-hidden relative">
      <section className="flex justify-center items-center h-20 absolute z-10 border-b border-[#FFFFFF4D] w-full bg-[#FFFFFF1A] text-white uppercase font-organetto text-xs">
        <Image src={logo} alt={""} className="mr-17" />
        <nav className="flex items-center border-r border-l border-[#ffffff4d] h-[72px] ">
          <ul className="flex items-center px-13">
            <li>
              <Link href="/about" className="pt-4 px-5">
                Biz haqimizda
              </Link>
            </li>
            <li>
              <Link href="/services" className="pt-4 px-5">
                Xizmatlar
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="pt-4 px-5">
                Narxlar
              </Link>
            </li>
            <li>
              <Link href="/news" className="pt-4 px-5">
                Yangiliklar
              </Link>
            </li>
            <li>
              <Link href="/contact" className="pt-4 px-5">
                Aloqa
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2.5 pl-5">
          <a href="tel:+998951158080" className="pl-5 text-sm font-light">
            +998 95 115 80 80
          </a>
          <Button
            variant="outline"
            className="border border-[#FFFFFF33] rounded-[50px] px-5 uppercase h-[42px] flex items-center gap-2.5 cursor-pointer"
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
            <span className="text-[10px] font-light">Ariza qoldiring</span>
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
      <div className="bg-blue w-screen rotate-[17deg] h-96 absolute z-20 right-60 -bottom-80"></div>
      <div className="bg-blue w-screen -rotate-[17deg] h-96 absolute z-20 left-60 -bottom-80"></div>
      <section className=" text-white absolute z-20 -left-1/2 transform translate-x-1/2 top-[10%]">
        <h1 className="text-[220px] mb-22">Oson va tez!</h1>
        <div className="flex items-start gap-72 mb-14">
          <p className="text-4xl font-medium w-[25%]">
            iPost cargo — yukingiz biz bilan ishonchli yo‘lda!
          </p>
          <p className="text-[22px] font-base w-[30%]">
            Biz – Xitoydan O‘zbekistonga tovarlar yetkazib berishga
            ixtisoslashgan cargo kompaniyasimiz.
          </p>
        </div>
        <div className="flex gap-5">
          <Button variant="primary">
            <span> Profilga kirish</span>
            <MoveUpRight />
          </Button>
          <Button variant="secondary">
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
              <Image className="w-full object-contain" src={item} alt="" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </header>
  );
}
