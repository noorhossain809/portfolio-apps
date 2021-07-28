import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import PText from '../HeroSection/PText';
import SectionTitle from './SectionTitle';
import aboutImg from '../../assets/images/about-sec-img.png';

const AboutSectionStyle = styled.div`
  padding: 10rem 0;

  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .section-left,
  .section-right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection-buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .section-left {
      flex: 4;
    }
    .section-right {
      flex: 3;
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .section-left,
    .section-right {
      width: 100%;
    }
    .section-right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection-buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

const AboutSection = () => (
  <AboutSectionStyle>
    <div className="container">
      <div className="section-left">
        <SectionTitle
          className="section-title"
          subheading="Let me introduce myself"
          heading="About Me"
        />
        <PText>
          I am a website designer and developer from Chittagong, Bangladesh. I
          create professional websites. I love art and always try to show unique
          views to the audience through my design.
        </PText>
        <div className="aboutSection-buttons">
          <Button btnLink="/projects" btnText="works" outline />
          <Button btnLink="/about" btnText="Read More" />
        </div>
      </div>
      <div className="section-right">
        <img src={aboutImg} alt="" />
      </div>
    </div>
  </AboutSectionStyle>
);

export default AboutSection;
