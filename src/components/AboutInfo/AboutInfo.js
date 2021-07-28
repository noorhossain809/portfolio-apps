import React from 'react';
import styled from 'styled-components';
import PText from '../HeroSection/PText';

const AboutInfoStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* gap: 3rem; */
  position: relative;
  margin-top: 3rem;
  .title {
    font-size: 2.4rem;
  }
  .items {
    display: flex;
    position: absolute;
    gap: 1.5rem;
    left: 18rem;
  }
  .item {
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
      position: initial;
      gap: 1rem;
    }
    .title {
      font-size: 2rem;
    }
  }
`;

const AboutInfo = ({ title = 'Title', items = ['HTML', 'CSS'] }) => (
  <AboutInfoStyles>
    <h1 className="title">{title}</h1>
    <div className="items">
      {items.map((item, index) => (
        <div className="item" key={index}>
          <PText>{item}</PText>
        </div>
      ))}
    </div>
  </AboutInfoStyles>
);

export default AboutInfo;
