import React from 'react';
import styled from 'styled-components';
import heroImg from '../../assets/images/hero.png';
import Button from '../Button/Button';
import PText from './PText';
import socialMedia from '../../assets/images/social-media-arrow.svg';
import scrollDown from '../../assets/images/scroll-down-arrow.svg';

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
  }
  .hero-heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero-name {
      font-size: 7rem;
      font-family: 'Montserrat SemiBold';
      color: var(--white);
    }
  }
  .hero-img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero-info {
    margin-top: -18rem;
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
  }
  .scroll-icon {
    right: 50px;
  }
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

const HeroSection = () => {
  console.log();
  return (
    <HeroStyle>
      <div className="hero">
        <div className="container">
          <h1 className="hero-heading">
            <span>Hello, This is </span>
            <span className="hero-name">Noor Hossain</span>
          </h1>
          <div className="hero-img">
            <img src={heroImg} alt="" />
          </div>
          <div className="hero-info">
            <PText>
              I am working as a freelance web designer and developer for 4
              years. I love to design and make new web experiences for the
              people.
            </PText>
            <Button
              btnLink="/projects"
              btnText="see my works"
              outline="false"
            />
          </div>
          <div className="social-info">
            <div className="social-info-indicator">
              <p>Follow</p>
              <img src={socialMedia} alt="social-media-arrow" />
            </div>
            <div className="social-media">
              <ul>
                <li>
                  <a href="" target="_blank" rel="noreffer">
                    FB
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" rel="noreffer">
                    TW
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" rel="noreffer">
                    LI
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="scroll-icon">
            <p>scroll</p>
            <img src={scrollDown} alt="" />
          </div>
        </div>
      </div>
    </HeroStyle>
  );
};
export default HeroSection;
