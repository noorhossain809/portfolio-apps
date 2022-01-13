import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import PText from '../HeroSection/PText';
import aboutImg from '../../assets/images/hero1.jpg';
import AboutInfo from '../AboutInfo/AboutInfo';
import ContactBanner from '../ContactBanner/ContactBanner';

const AboutStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .about-img {
    flex: 2;
  }
  .about-img img {
    height: 70vh;
  }
  .about-img {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .sub-heading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .heading {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
  .about-info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .about-info-items {
    margin-top: 12rem;
  }
  .about-info-item {
    margin-bottom: 8rem;
  }
  .about-info-heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 3rem;
    }
    .sub-heading {
      font-size: 1.5rem;
    }
    .heading {
      font-size: 2rem;
    }
    .about-info-heading {
      font-size: 3rem;
    }
  }
`;

const About = () => (
  <AboutStyles>
    <div className="container">
      <div className="top-section">
        <div className="left">
          <p className="sub-heading">
            Hi, I am <span>Noor Hossain</span>
          </p>
          <h2 className="heading">A Full Stack web developer</h2>
          <div className="about-info">
            <PText>
              I am from chittagong, Bangladesh. A place of beauty and nature.
              Since my childhood, i love art and design. I always try to design
              stuff with my unique point of view. I also love to create things
              that can be usefull to others.
              <br /> <br />
              I started coding since I was in high school. Coding is also an art
              for me. I love it and now I have the opportunity to design along
              with the coding. I find it really interesting and I enjoyed the
              process a lot.
              <br />
              <br />
              My vision is to make the world a better place. Now almost
              everything is becoming better than ever. It is time for us to
              create more good stuff that helps the world to become a better
              place.
            </PText>
          </div>
          <Button btnText="Download CV" btnLink="#" outline />
        </div>
        <div className="about-img">
          <img src={aboutImg} alt="" />
        </div>
      </div>
      <div className="about-info-items">
        <div className="about-info-item">
          <h1 className="about-info-heading">Education</h1>
          <AboutInfo title="School" items={['Tanjimul Ummah Cadet Madrasah']} />
          <AboutInfo
            title="College"
            items={['Baitush Sharaf Adarshah Kamil Madrasah']}
          />
          <AboutInfo title="Versity" items={['University Of Dhaka']} />
        </div>
        <div className="about-info-item">
          <h1 className="about-info-heading">My Skills</h1>
          <AboutInfo
            title="FrontEnd"
            items={[
              'HTML',
              'CSS',
              'Javascript',
              'Typescript',
              'React',
              'Redux',
              'Material ui',
              'React Bootstrap',
              'Firebase',
              'React Router',
            ]}
          />
          <AboutInfo
            title="BackEnd"
            items={['Node.js', 'Express.js', 'MongoDB', 'Heroku']}
          />
        </div>
        <div className="about-info-item">
          <h1 className="about-info-heading">Experience</h1>
          <AboutInfo title="2020-2021" items={['Junior web developer']} />
          <AboutInfo title="2021-2021" items={['Frontend web developer']} />
          <AboutInfo title="2021-2021" items={['Backend web developer']} />
        </div>
      </div>
      <ContactBanner />
    </div>
  </AboutStyles>
);

export default About;
