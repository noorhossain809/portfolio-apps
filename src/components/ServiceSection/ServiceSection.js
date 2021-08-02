import React from 'react';
import styled from 'styled-components';
import { MdCode, MdDesktopMac, MdPhonelinkSetup } from 'react-icons/md';
import AOS from 'aos';
import SectionTitle from '../AboutSection/SectionTitle';
import ServiceSectionItem from '../ServiceSectionItem/ServiceSectionItem';
import 'aos/dist/aos.css';

AOS.init();

const IconStyles = styled.div`
  padding: 10rem 0;
  .service-all-item {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  .services-head {
    /* animation: moveservice 1.5s linear 1;
    animation-delay: 8s;
    visibility: hidden;
    animation-fill-mode: forwards; */
  }
  /* @keyframes moveservice {
    from {
      transform: translateY(-700px);
      visibility: visible;
    }
    to {
      transform: translateY(0);
      visibility: visible;
    }
  } */
  @media only screen and (max-width: 768px) {
    .service-all-item {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

const ServiceSection = () => (
  <IconStyles>
    <div className="container">
      <div data-aos="fade-down" data-aos-offset="200" data-aos-duration="1000">
        <SectionTitle
          className="services-head"
          subheading="what I will do for you"
          heading="Services"
        />
      </div>

      <div className="service-all-item">
        <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-duration="1000"
        >
          <ServiceSectionItem
            icon={<MdDesktopMac />}
            title="website Design"
            description="I do ui/ux design for the website that helps website to get a unique look."
          />
        </div>
        <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
          <ServiceSectionItem
            icon={<MdCode />}
            title="web Dev"
            description="I also develop the websites. I create high performance website with blazing fast speed."
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-duration="1000"
        >
          <ServiceSectionItem
            icon={<MdPhonelinkSetup />}
            title="app Dev"
            description="I develop mobile application. I create mobile app with eye catching ui."
          />
        </div>
      </div>
    </div>
  </IconStyles>
);
export default ServiceSection;
