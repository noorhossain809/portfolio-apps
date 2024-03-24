import React from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import heroImg from '../../assets/images/hero2.jpg';
import hero from '../../assets/images/hero.png';
import Button from '../Button/Button';
import PText from './PText';
import socialMedia from '../../assets/images/social-media-arrow.svg';
import scrollDown from '../../assets/images/scroll-down-arrow.svg';
import 'aos/dist/aos.css';

AOS.init();

const HeroStyle = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: var(--dark-bg);
  }
  
  .hero-heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    
    span {
      display: inline-block;
      width: 100%;
    }
    .hero-title{
      position: absolute;
       top: -60px; /* Adjust as needed */
      left: 50%;
      transform: translateX(-50%);
    }
    .hero-name {
  font-size: 7rem;
  font-family: 'Montserrat SemiBold';
  color: var(--white);
  position: absolute;
  top: -45px; /* Adjust as needed */
  left: 50%;
  transform: translateX(-50%);
   z-index: 1
}

  }
  .head{
    /* animation: moveheading 1.5s linear 1;
    animation-delay: 3s;
    visibility: hidden;
    animation-fill-mode: forwards; */
  }
  /* @keyframes moveheading {
    from {
      transform: translateX(-700px);
      visibility: visible;
    }
    to {
      transform: translateX(4);
      visibility: visible;
    }
  } */
  .hero-img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    z-index: -1
    
    border: 2px solid var(--gray-1);
    /* animation: movezoom 1.5s linear 1;
    animation-delay: 4s;
    visibility: hidden;
    animation-fill-mode: forwards; */

    img{
        opacity: 0.5
    }
    
  }
  /* @keyframes movezoom {
    from {
      transform: scale(0);
      visibility: visible;
    }
    to{
      transform: scale(1);
      visibility: visible;
      
    }
  } */
  .hero-info {
    margin-top: -18rem;
    animation: moveinfo 1.5s linear 1;
    animation-delay: 1s;
    visibility: hidden;
    animation-fill-mode: forwards;
    
  }
  @keyframes moveinfo {
    from {
      transform: translateX(700px);
      visibility: visible;
    }
    to{
      transform: translateX(0);
      visibility: visible;
      
    }
  }
    
  p{
    color: var(--white);
  }
  
  }
  .social-info,
  .scroll-icon {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    bottom: 20px;
    width: 50px;
    position: absolute;
  }
  .social-info {
    left: 50px;
    /* animation: movesocial 1.5s linear 1;
    animation-delay: 6s;
    visibility: hidden;
    animation-fill-mode: forwards; */
  }
  /* @keyframes movesocial {
    from {
      transform: translateY(-700px);
      visibility: visible;
    }
    to{
      transform: translateY(0);
      visibility: visible;
      
    }
  } */
  .scroll-icon {
    right: 50px;
    /* animation: movescrool 1.5s linear 1;
    animation-delay: 6s;
    visibility: hidden;
    animation-fill-mode: forwards; */
  }
  
  /* @keyframes movescrool {
    from {
      transform: translateX(700px);
      visibility: visible;
    }
    to{
      transform: translateX(0);
      visibility: visible;
      
    }
  } */
  .social-info-indicator,
  .scroll-icon {
    width: 50px;
    p {
      font-size: 1.5rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .scroll-icon {
    img {
      max-height: 70px;
    }
  }
  .social-media {
    ul {
      li {
        margin-bottom: 20px;
      }
      a {
        font-size: 1.5rem;
        transform: rotate(-90deg);
        display: inline-block;
        letter-spacing: 5px;
        margin-bottom: 1.3rem;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero-heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero-name {
        font-size: 4.5rem;
        top: -30px
      }
    }
    .hero-img {
      height: 300px;
    }
    .hero-info {
      margin-top: 3rem;
      
    }
    .social-info {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .social-info-indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .social-media {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .scroll-icon {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

const HeroSection = () => (
  <HeroStyle>
    <div className="hero">
      <div className="container">
        <div
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-duration="1000"
          className="head"
        >
          <h1 className="hero-heading">
            <span className="hero-title">Hello, This is </span>
            <span className="hero-name">Noor Hossain</span>
          </h1>
        </div>
        <div
          data-aos="zoom-in-down"
          data-aos-offset="200"
          data-aos-duration="1000"
        >
          <div className="hero-img">
            <img src={heroImg} alt="" />
          </div>
        </div>
        <div className="hero-info">
          <div className="hero-para">
            <PText>
              <p>
                I am working as a web designer and developer for 1 year. I love
                to design and make new web experiences for the people.
              </p>
            </PText>
          </div>
          {/* <Button
            btnLink="https://drive.google.com/file/d/1svBOC0OCde7mHFcjNAYvtcJUpnpN4lGp/view"
            btnText="Download Resume"
            outline="true"
          /> */}

          {/* <Button outline="true" btnText="Download Resume">
            <a href="https://drive.google.com/file/d/1svBOC0OCde7mHFcjNAYvtcJUpnpN4lGp/view">
              Download Resume
            </a>
          </Button> */}
          <a href="https://drive.google.com/file/d/1svBOC0OCde7mHFcjNAYvtcJUpnpN4lGp/view">
            <button
              style={{
                borderRadius: '5px',
                padding: '15px',
                margin: '10px',
                cursor: 'pointer',
                color: 'black',
                width: '250px',
                border: '2px solid gray',
              }}
              type="button"
            >
              <h2 style={{ color: 'black' }}>Download Resume</h2>
            </button>
          </a>
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1000"
          className="social-info"
        >
          <div className="social-info-indicator">
            <p>Follow</p>
            <img src={socialMedia} alt="social-media-arrow" />
          </div>
          <div className="social-media">
            <ul>
              <li>
                <a href="https://www.facebook.com/noor.hosain.3745?mibextid=ZbWKwL">
                  FB
                </a>
              </li>
              <li>
                <a href="https://twitter.com/NoorHos89857851">TW</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/noor-hossain-172175211/">
                  LI
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-duration="1000"
          className="scroll-icon"
        >
          <p>scroll</p>
          <img src={scrollDown} alt="" />
        </div>
      </div>
    </div>
  </HeroStyle>
);
export default HeroSection;
