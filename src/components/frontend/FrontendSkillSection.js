import React from 'react';
import styled from 'styled-components';
import PText from '../HeroSection/PText';

const FrontendInfoStyles = styled.div`
  display: flex;
  margin-top: 3rem;
  gap: 60px;
  .title {
    font-size: 2.4rem;
    margin-top: 20px;
  }
  .items {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 1.5rem;
    margin-top: 10px;
  }
  .item {
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;
    font-size: 14px;
    text-align: center;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
      display: flex;
      flex-direction: column;
      position: initial;
      gap: 1rem;
      font-size: 14px;
    }
    .item {
      text-align: start;
    }
    .title {
      font-size: 1.5rem;
    }
  }
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
      flex-direction: column;
      position: initial;
      gap: 1rem;
    }
    .item {
      font-size: 20px;
    }
    .title {
      font-size: 2rem;
    }
  }
`;

const FrontendSkillSection = ({ title = 'Title', items = [''] }) => (
  <FrontendInfoStyles>
    <h1 className="title">{title}</h1>
    <div className="items">
      {items.map((item, index) => (
        <div className="item" key={index}>
          <PText>{item}</PText>
        </div>
      ))}
    </div>
  </FrontendInfoStyles>
);

export default FrontendSkillSection;
