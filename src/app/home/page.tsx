import { AboutUsSection, ServiceSection,OurValueSection } from '@/section';
import React from 'react';

export default function HomePage() {
  return (
    <div className=" mx-auto">
      <AboutUsSection/>
      <OurValueSection/>
      <ServiceSection/>
    </div>
  );
} 
