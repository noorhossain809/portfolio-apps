import React from 'react';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from '../AboutSection/SectionTitle';
import ContactForm from '../ContactForm/ContactForm';
import ContactInfoItem from '../ContactInfoItem/ContactInfoItem';

const ContactSectionStyles = styled.div`
  padding: 10rem 0;
  .contact-wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    position: relative;
    justify-content: space-between;
  }
  .contact-wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    width: 100%;
    max-width: 500px;
  }
  @media only screen and (max-width: 768px) {
    .contact-wrapper {
      flex-direction: column;
    }
    .contact-wrapper::after {
      width: 100%;
      height: 2px;
      top: 40%;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
  @media only screen and (max-width: 900px) {
    .contact-wrapper::after {
      left: 58%;
    }
  }
`;

const ContactSection = () => (
  <ContactSectionStyles>
    <div className="container">
      <SectionTitle heading="Contact" subheading="Get in touch" />
      <div className="contact-wrapper">
        <div className="left">
          <ContactInfoItem icon={<MdLocalPhone />} info="+8801634835317" />
          <ContactInfoItem icon={<MdEmail />} info="noorsan809@gmail.com" />
          <ContactInfoItem info="Chattagram, Bangladesh" />
        </div>
        <div className="right">
          <ContactForm />
        </div>
      </div>
    </div>
  </ContactSectionStyles>
);

export default ContactSection;
