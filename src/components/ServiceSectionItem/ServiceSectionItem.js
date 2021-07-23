import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import PText from '../HeroSection/PText';

const ItemStyles = styled.div`
  text-align: center;
  .servicesItem-icon {
    svg {
      width: 3rem;
    }
  }
  .servicesItem-title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
  }
  .para {
    margin-top: 2rem;
  }
`;

const ServiceSectionItem = ({
  icon = <MdDesktopMac />,
  title = 'web Design',
  description = 'Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys ok',
}) => (
  <ItemStyles>
    <div className="servicesItem-icon">{icon}</div>
    <div className="servicesItem-title">{title}</div>
    <PText>{description}</PText>
  </ItemStyles>
);

export default ServiceSectionItem;
