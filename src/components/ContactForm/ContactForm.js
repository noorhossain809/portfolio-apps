/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import emailjs from '@emailjs/browser';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from 'react-hook-form';

const FormStyles = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
    width: 100%;
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
    min-height: 200px;
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

  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();
    console.log('submit', event);

    emailjs
      .sendForm('service_0i9u80y', 'template_s2sr759', form.current, {
        publicKey: 'auRSYwpgJxtciQqzA',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div>
      <FormStyles>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">
              Your name
              <input
                type="text"
                value={name}
                id="name"
                name="user_name"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Your Email
              <input
                type="email"
                value={email}
                id="email"
                name="user_email"
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
          <button type="submit">Send</button>
        </form>
      </FormStyles>
    </div>
  );
};

export default ContactForm;
