"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/icons/logo.svg";
import banner1 from "@/assets/images/main-banner.webp";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Autoplay from "embla-carousel-autoplay";
import { ChevronDown } from "lucide-react";
export default function Header() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <header className="h-screen w-screen relative">
      <section className="flex justify-between items-center h-20 absolute z-10 border-b border-[#FFFFFF4D] w-full bg-[#FFFFFF1A] text-white uppercase">
        <Image src={logo} alt={""} />
        <nav className="flex items-center border-r border-l border-[#ffffff4d] h-[72px]">
          <ul className="flex items-center ">
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

        <a href="tel:+998951158080">+998 95 115 80 80</a>

        <Dialog onOpenChange={handleOpenChange} open={true}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="border border-[#FFFFFF33] rounded-[50px] px-5 uppercase h-[42px] flex items-center gap-2.5 cursor-pointer"
            >
              <span>Ariza qoldiring</span>{" "}
              <ChevronDown
                size={20}
                color="white"
                style={{
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </Button>
          </DialogTrigger>
          <DialogContent className=" px-20 pt-20 pb-14.5rounded-none border-none">
            <div className="flex items-end gap-[140px]">
              <div className="w-[500px]">
                <div className="">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value="Pedro Duarte"
                    className="col-span-3"
                  />
                </div>
                <div className="">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input
                    id="username"
                    value="@peduarte"
                    className="col-span-3"
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="bg-blue rounded-none h-20 text-white text-[13.13px] font-medium"
              >
                Ariza yuborish
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </section>

      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Image className="w-full object-contain" src={banner1} alt="" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </header>
  );
}
