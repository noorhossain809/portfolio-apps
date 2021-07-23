import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyleBtn = styled.div`
  margin-top: 2rem;
  margin-bottom: 20px;
  .button {
    font-size: 1.8rem;
    background-color: ${(props) =>
      props.outline ? 'var(--gray-1)' : 'transparent'};
    padding: 0.4em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    color: ${(props) => (props.outline ? 'black' : 'var(--gray-1)')};
    display: inline-block;
  }
`;

const Button = ({ btnLink, btnText, outline }) => (
  <StyleBtn outline={outline} className="button-wrapper">
    <Link className="button" to={btnLink}>
      {btnText}
    </Link>
  </StyleBtn>
);
export default Button;
