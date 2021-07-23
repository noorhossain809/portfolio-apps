import React from 'react';
import styled from 'styled-components';
import { MdCode, MdDesktopMac, MdPhonelinkSetup } from 'react-icons/md';
import SectionTitle from '../AboutSection/SectionTitle';
import ServiceSectionItem from '../ServiceSectionItem/ServiceSectionItem';

const IconStyles = styled.div`
  padding: 10rem 0;
  .service-all-item {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
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
      <SectionTitle subheading="what I will do for you" heading="Services" />
      <div className="service-all-item">
        <ServiceSectionItem
          icon={<MdDesktopMac />}
          title="website Design"
          description="I do ui/ux design for the website that helps website to get a unique look."
        />
        <ServiceSectionItem
          icon={<MdCode />}
          title="web Dev"
          description="I also develop the websites. I create high performance website with blazing fast speed."
        />
        <ServiceSectionItem
          icon={<MdPhonelinkSetup />}
          title="app Dev"
          description="I develop mobile application. I create mobile app with eye catching ui."
        />
      </div>
    </div>
  </IconStyles>
);
export default ServiceSection;
