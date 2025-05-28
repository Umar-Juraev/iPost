import { AboutUsSection, ServiceSection } from '@/section';
import BotInfoSection from '@/section/BotInfoSection';
import CompanyHistorySection from '@/section/CompanyHistorySection';
import NewsSection from '@/section/NewsSection';
import OurAchievements from '@/section/OurAchievements';
import OurValues from '@/section/OurValues';
import PartnersSection from '@/section/PartnersSection';
import ServiceStagesSection from '@/section/ServiceStagesSection';
import TariffsSection from '@/section/TariffsSection';
import React from 'react';

export default function HomePage() {
  return (
    <div>
      <AboutUsSection />
      <OurValues/>
      <CompanyHistorySection/>
      <OurAchievements/>
      <ServiceSection />
      <TariffsSection />
      <ServiceStagesSection/>
      <NewsSection />
      <PartnersSection />
      <BotInfoSection/>
    </div>
  );
} 
