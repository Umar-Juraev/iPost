import { AboutUsSection, ServiceSection,OurValueSection } from '@/section';
import BotInfoSection from '@/section/BotInfoSection';
import NewsSection from '@/section/NewsSection';
import PartnersSection from '@/section/PartnersSection';
import React from 'react';

export default function HomePage() {
  return (
    <div>
      <AboutUsSection/>
      <OurValueSection/>
      <ServiceSection/>
      <NewsSection />
      <PartnersSection/>
      <BotInfoSection/>
    </div>
  );
} 
