import React from 'react';
import styled from 'styled-components';

import PText from '../HeroSection/PText';
import FooterCol from './FooterCol';

const FooterStyles = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer-col-1 {
    flex: 2;
  }
  .footer-col-2,
  .footer-col-3,
  .footer-col-4 {
    flex: 1;
  }
  .footer-title {
    font-size: 3.2rem;
    margin-bottom: 1rem;
  }
  .copy-right {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
      font-size: 1.4rem;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer-col-1 .para {
      max-width: 100%;
    }
    .copy-right {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

const Footer = () => (
  <FooterStyles>
    <div className="container">
      <div className="footer-col-1">
        <h1 className="footer-title">Noor Hossain</h1>
        <PText>
          A web designer and developer from Chittagong, Bangladesh. I always
          make websites that have unique designs and also has a good performance
          rate.
        </PText>
      </div>
      <div className="footer-col-2">
        <FooterCol
          heading="Important Links"
          links={[
            {
              type: 'Link',
              title: 'Home',
              path: '/',
            },
            {
              type: 'Link',
              title: 'About',
              path: '/about',
            },
            {
              type: 'Link',
              title: 'Projects',
              path: '/project',
            },
            {
              type: 'Link',
              title: 'Contact',
              path: '/contact',
            },
          ]}
        />
      </div>
      <div className="footer-col-3">
        <FooterCol
          heading="Contact Info"
          links={[
            {
              title: '+88018112233',
              path: 'tel:+88012312',
            },
            {
              title: 'noorsan809@gmail.com',
              path: 'mailto:webcifar@gmail.com',
            },
            {
              title: 'Halishahar, Chittagong, Bangladesh',
              path: 'http://google.com/maps',
            },
          ]}
        />
      </div>
      <div className="footer-col-4">
        <FooterCol
          heading="Social Links"
          links={[
            {
              title: 'Facebook',
              path: 'http://facebook.com',
            },
            {
              title: 'Twitter',
              path: 'http://twitter.com',
            },
            {
              title: 'Instagram',
              path: 'http://instagram.com',
            },
          ]}
        />
      </div>
    </div>
    <div className="copy-right">
      <div className="container">
        <PText>© 2021 - Noor Hossain | Designed By web developer</PText>
      </div>
    </div>
  </FooterStyles>
);

export default Footer;
