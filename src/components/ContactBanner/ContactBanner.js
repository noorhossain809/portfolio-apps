import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import PText from '../HeroSection/PText';

const ContactStyles = styled.div`
  padding: 10rem 0;
  .contact-wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contact-heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .contact-heading {
      font-size: 2.8rem;
    }
  }
`;

const ContactBanner = () => (
  <ContactStyles>
    <div
      data-aos="flip-left"
      data-aos-offset="200"
      data-aos-duration="1000"
      className="container"
    >
      <div className="contact-wrapper">
        <PText>Have a project in mind</PText>
        <h3 className="contact-heading">Let me help you</h3>
        <Button btnText="Contact Now" btnLink="/contact" outline />
      </div>
    </div>
  </ContactStyles>
);

export default ContactBanner;
