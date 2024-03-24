import React from 'react';
import styled from 'styled-components';
import ContactSection from '../ContactSection/ContactSection';
import Map from '../Map/Map';

const Contact = () => (
  <div style={{ background: 'var(--dark-bg)' }}>
    <div className="container" style={{ paddingBottom: '5rem' }}>
      <ContactSection />
      <Map />
    </div>
  </div>
);

export default Contact;
