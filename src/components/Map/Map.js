import React from 'react';
import styled from 'styled-components';
import PText from '../HeroSection/PText';
import mapImg from '../../assets/images/map.png';

const MapStyles = styled.div`
  background: url(${mapImg}) no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map-card {
    right: 10%;
    bottom: 10%;
    background: var(--deep-dark);
    position: absolute;
    padding: 2rem;
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map-card-heading {
    font-size: 3rem;
    margin-bottom: 3rem;
  }
  .map-card-link {
    font-size: 1.3rem;
    margin-top: 3rem;
    display: inline-block;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map-card {
      max-width: none;
      right: auto;
    }
  }
`;

const Map = () => (
  <MapStyles>
    <div className="container">
      <div className="map-card">
        <h3 className="map-card-heading">Here is me</h3>
        <PText>Halishahar Circle, Bangladesh</PText>
        <a
          className="map-card-link"
          href="https://www.google.com/maps/place/Halishahar,+Chattogram/@22.3117829,91.7481343,13z/data=!3m1!4b1!4m5!3m4!1s0x30acdec55dd23931:0xb4f7439c6623a22e!8m2!3d22.318119!4d91.7782267"
        >
          Open is Google
        </a>
      </div>
    </div>
  </MapStyles>
);

export default Map;
