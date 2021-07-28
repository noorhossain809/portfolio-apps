import React from 'react';
import { MdPlace } from 'react-icons/md';
import styled from 'styled-components';
import PText from '../HeroSection/PText';

const ContactInfoItemStyles = styled.div`
  padding: 2rem;
  background-color: var(--deep-dark);
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  .icon {
    color: var(--white);
    background-color: var(--gray-2);
    padding: 1.3rem;
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius: 50%;
  }
  svg {
    width: 3rem;
  }
`;

const ContactInfoItem = ({ icon = <MdPlace />, info = 'I need info' }) => (
  <ContactInfoItemStyles>
    <div className="icon">{icon}</div>
    <div className="info">
      <PText>{info}</PText>
    </div>
  </ContactInfoItemStyles>
);

export default ContactInfoItem;
