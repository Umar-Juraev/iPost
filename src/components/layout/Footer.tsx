"use client"
import React from 'react';
import logo from "@/assets/icons/logo-dark.svg";
import Image from 'next/image';
import TelegramIcon from "@/assets/svg/telegram.svg"
import InstagramIcon from "@/assets/svg/instagram.svg"
import FacebookIcon from "@/assets/svg/facebook.svg"
import YoutubeIcon from "@/assets/svg/youtube.svg"
import { Button } from '../ui/button';
import { ChevronUp } from 'lucide-react';
import Link from 'next/link';
export default function Footer() {
  const TopScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <footer className="container-fluid mt-[100px] mb-[40px]">
      <div className='flex items-start justify-around gap-[120px]'>
        <div className='flex flex-col gap-[50px]'>
          <Image src={logo} alt='Logo' className='w-[300px] h-[48px] object-contain' />
          <div className='flex flex-col gap-2.5'>
            <a href='tel:+998951154747'  className='font-normal text-[26px] text-[#2b3944] tracking-[1px] 3xl:text-[22px]'>+99895-115-47-47</a>
            <a href='tel:+998951158080'  className='font-normal text-[26px] text-[#2b3944] tracking-[1px] 3xl:text-[22px]'>+99895-115-80-80</a>
          </div>
        </div>
      <div className='flex flex-col gap-2 text-[17px] 3xl:text-[16px]'>
        <Link href="#about-us" className='text-[#394854]  tracking-[-0.32px] '>Biz haqimizda</Link>
        <Link href="#pricing" className='text-[#394854]  tracking-[-0.32px] '>Tariflar</Link>
        <Link href="#services" className='text-[#394854]  tracking-[-0.32px] '>Xizmatlar</Link>
        <Link href="#schema" className='text-[#394854]  tracking-[-0.32px] '>Ishlash sxemasi</Link>
        <Link href="#" className='text-[#394854]  tracking-[-0.32px] '>Savol-javob</Link>
        <Link href="#partners" className='text-[#394854]  tracking-[-0.32px] '>Hamkorlar</Link>
        <Link href="#contact" className='text-[#394854]  tracking-[-0.32px] '>Aloqa</Link>
        </div>
        <div className='flex flex-col gap-[30px]'>
          <strong className='text-[#2B3944] font-normal text-[15px] tracking-[-0.32px]'>Ijtimoiy tarmoqlar:</strong>
          <div className='flex items-start gap-[26px]'>
            <a href='#'>
              <Image src={TelegramIcon} alt='Telegram' className='w-[32px] h-[28px] object-cover'/>
            </a>
            <a href='#'>
              <Image src={InstagramIcon} alt='Instagram' className='w-[32px] h-[28px] object-cover'/>
            </a>
            <a href='#'>
              <Image src={FacebookIcon} alt='Facebook' className='w-[32px] h-[28px] object-cover'/>
            </a>
            <a href='#'>
              <Image src={YoutubeIcon} alt='Youtube' className='w-[32px] h-[28px] object-cover'/>
            </a>
          </div>
        </div>
        <Button onClick={TopScroll} size={'icon'} className='bg-[#F8F8F9] w-[57px] h-[57px]'>
        <ChevronUp />
          </Button>
      </div>

      <div className='flex items-center gap-[200px] border-t border-t-[#39485426] pt-[40px] w-full mt-[100px]'>
      <p className='font-normal text-[#4B5760] text-[14px]'> &copy; {new Date().getFullYear()} iPost cargo. Barcha huquqlar himoyalangan.</p> 
      <p className='font-normal text-[#4B5760] text-[14px]'>Maxfiylik siyosati | Foydalanish shartlari</p>
      </div>  
    </footer>
  );
} 

