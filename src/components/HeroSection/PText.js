import React from 'react';
import styled from 'styled-components';

const PStyles = styled.div`
  max-width: 500px;
  font-size: 1.8rem;
  line-height: 1.1em;

  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const PText = ({ children }) => (
  <PStyles className="para">
    <p>{children}</p>
  </PStyles>
);
export default PText;
