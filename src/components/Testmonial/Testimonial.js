import React, { useState } from 'react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import styled from 'styled-components';
import SectionTitle from '../AboutSection/SectionTitle';
import PText from '../HeroSection/PText';
import testimonials from '../../assets/data/testimonials';

const TestimonialStyles = styled.div`
  padding: 10rem 0;
  text-align: center;
  .testimonial-wrapper {
    position: relative;
    max-width: 700px;
    margin: 0 auto;
  }
  .testimonial-info {
    width: 100%;
    height: fit-content;
    background-color: var(--deep-dark);
    padding: 3rem;
    border-radius: 12px;
    margin-top: 5rem;
  }
  .testimonial-desc {
    .para {
      text-align: center;
    }
  }
  .testimonial-name {
    margin-top: 5rem;
    font-family: 'Montserrat Bold';
    font-size: 2.2rem;
  }
  .testimonial-title {
    font-size: 1.2rem;
    margin-top: 0.3rem;
  }
  .arrows {
    margin-top: 2rem;
    align-items: center;
    justify-content: center;
    display: flex;
    svg {
      width: 30px;
      pointer-events: none;
    }
    .next,
    .prev {
      margin: 0 0.5rem;
      width: fit-content;
      background-color: var(--deep-dark);
      padding: 0.5rem 2rem;
      border-radius: 8px;
      cursor: pointer;
    }
  }
  .fade-enter {
    opacity: 0;
    transform: scale(0.96);
    z-index: 1;
  }
  .fade-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: 250ms ease-in;
    transition-property: transform, opacity;
    z-index: 1;
  }
  .fade-exit {
    opacity: 1;
    transform: scale(1);
  }
  .fade-exit-active {
    opacity: 0;
    transform: scale(0.96);
    transition: 250ms ease-in;
    transition-property: transform, opacity;
  }
`;

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const activeSlides = testimonials[activeIndex];

  function handleNext() {
    if (activeIndex >= testimonials.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((oldIndex) => oldIndex + 1);
    }
  }
  function handlePrev() {
    if (activeIndex <= 0) {
      setActiveIndex(testimonials.length - 1);
    } else {
      setActiveIndex((oldIndex) => oldIndex - 1);
    }
  }
  return (
    <TestimonialStyles>
      <div className="container">
        <div
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-duration="1000"
        >
          <SectionTitle
            subheading="see what our clients about us"
            heading="Testimonial"
          />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-duration="1000"
          className="testimonial-wrapper"
        >
          <SwitchTransition component={null}>
            <CSSTransition
              key={activeSlides.id}
              timeout={300}
              classNames="fade"
            >
              <div className="testimonial-info">
                <div className="testimonial-desc">
                  <PText>
                    <p>{activeSlides.desc}</p>
                  </PText>
                </div>
                <h2 className="testimonial-name">{activeSlides.name}</h2>
                <p className="testimonial-title">{activeSlides.title}</p>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className="arrows">
          <div
            className="prev"
            onClick={handlePrev}
            role="button"
            tabIndex={0}
            onKeyDown={handlePrev}
          >
            <MdArrowBack />
          </div>
          <div
            className="next"
            onClick={handleNext}
            role="button"
            tabIndex={0}
            onKeyDown={handleNext}
          >
            <MdArrowForward />
          </div>
        </div>
      </div>
    </TestimonialStyles>
  );
};

export default Testimonial;
