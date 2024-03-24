/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdMenu, MdClose } from 'react-icons/md';

const NavMenuStyles = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  padding: 1rem 0;
  width: 100%;
  background: var(--dark-bg);
  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;

    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0ms.3s ease background-color;
      &:hover {
        background-color: var(--deep-dark);
      }
    }
    a {
      display: inline-block;
      padding: 1rem 2rem;
      font-size: 2rem;
      font-family: 'RobotoMono Regular';
      color: var(--gray-1);
      outline: none;
    }
    .active {
      color: var(--white);
    }
  }
  .hide-item {
    /* animation: movedown 1.5s linear 1;
    animation-delay: 0.5s;
    visibility: hidden;
    animation-fill-mode: forwards; */
  }
  /* @keyframes movedown {
    0% {
      transform: translateY(-100px);
      visibility: visible;
    }
    100% {
      transform: translateY(0);
      visibility: visible;
    }
  } */
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    display: none;
    outline: none;
    cursor: pointer;
    * {
      pointer-events: none;
    }
  }
  .close-icon {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
      animation: moveup 1.5s;
      animation-delay: 1s;
      visibility: visible;
      animation-fill-mode: forwards;
    }
    @keyframes moveup {
      0% {
        transform: translateY(-100px);
        visibility: hidden;
      }
      100% {
        transform: translateY(0);
        visibility: hidden;
      }
    }
    .mobile-menu-icon {
      display: block;
    }
    .nav-item {
      --top: 1rem;
      transition: 0.3s ease transform;
      background-color: var(--deep-dark);
      padding: 1rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      right: 1rem;
      position: absolute;
      top: var(--top);

      .close-icon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
`;

const NavMenu = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <NavMenuStyles>
      <div
        className="mobile-menu-icon"
        onClick={() => setShowNav(!showNav)}
        role="button"
        onKeyDown={() => setShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>
      <ul className={!showNav ? 'nav-item hide-item' : 'nav-item'}>
        <div
          className="close-icon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
        <div data-aos="fade-down">
          <li>
            <NavLink
              to="/"
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              Contact
            </NavLink>
          </li>
        </div>
      </ul>
    </NavMenuStyles>
  );
};

export default NavMenu;
