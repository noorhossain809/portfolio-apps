import React, { useState } from 'react';
import styled from 'styled-components';

const FormStyles = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    border: none;
    border-radius: 8px;
    outline: none;
    padding: 1.2rem;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='button'] {
    color: var(--black);
    background-color: var(--gray-1);
    padding: 1rem 4rem;
    font-size: 2rem;
    border: none;
    border-radius: 8px;
    outline: none;
    display: inline-block;
    cursor: pointer;
  }
`;

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <div>
      <FormStyles>
        <div className="form-group">
          <label htmlFor="name">
            Your name
            <input
              type="text"
              value={name}
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Your Email
            <input
              type="text"
              value={email}
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Your Message
            <textarea
              type="text"
              value={message}
              id="message"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <button type="button">Send</button>
      </FormStyles>
    </div>
  );
};

export default ContactForm;
