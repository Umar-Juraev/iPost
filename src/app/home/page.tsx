import { AboutUsSection, ServiceSection } from '@/section';
import NewsSection from '@/section/NewsSection';
import React from 'react';

export default function HomePage() {
  return (
    <div>
      <AboutUsSection/>
      <ServiceSection />
      <NewsSection/>
    </div>
  );
} 
