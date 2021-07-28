import React from 'react';
import AboutSection from '../AboutSection/AboutSection';
import ContactBanner from '../ContactBanner/ContactBanner';

import HeroSection from '../HeroSection/HeroSection';
import ProjectSection from '../ProjectSection/ProjectSection';
import ServiceSection from '../ServiceSection/ServiceSection';
import Testimonial from '../Testmonial/Testimonial';

const Home = () => (
  <div>
    <HeroSection />
    <AboutSection />
    <ServiceSection />
    <ProjectSection />
    <Testimonial />
    <ContactBanner />
  </div>
);

export default Home;
