import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from './Logo';
import FacebookSVG from '../assets/images/facebook.svg';
import InstagramSVG from '../assets/images/instagram.svg';
import TwitterSVG from '../assets/images/twitter.svg';

const NavbarStyles = styled.nav`
  position: relative;
  z-index: 4;
  div.navbar {
    position: relative;
    width: 100%;
    height: 5em;
    background-color: var(--scyllaBlue);
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.75);

    @media (min-width: 760px) {
      height: calc(66em / 16);
      top: 3em;
      width: 90%;
      margin: 0 auto;

      .navbar-container {
        width: 100%;
      }
    }
  }
`;
const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--scyllaBlue);
  /* transform: translateX(100%); */
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  width: 100%;
  height: 100vh;
  text-align: left;
  // padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.35s ease-in-out;
  z-index: 7;

  @media (min-width: 760px) {
    position: relative;
    transform: translateX(0);
    height: auto;
    background-color: transparent;
    width: 100%;
    height: auto;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .nav-header {
    display: flex;
    flex-direction: column;

    .inner {
      position: static;
      width: auto;
      width: calc(143em / 16);
    }
    @media (min-width: 760px) {
      flex-direction: row;
      align-items: center;
      width: auto;
      margin-left: 1.5em;
    }
    p {
      color: #000;
      font-family: 'Rubik';
      font-size: 1.25em;
      margin-left: 1em;
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    align-content: space-evenly;
    list-style: none;
    display: none;
    li {
      margin: 1em 0;
      @media (min-width: 760px) {
        margin: 0;
      }
    }

    @media (min-width: 760px) {
      width: 40%;
      flex-direction: row;
      justify-content: space-between;
      padding: 0;
      height: auto;
    }
  }
  .nav-social {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin: 0 auto;

    svg {
      width: 100%;
      border-radius: 50%;
      box-shadow: 0.2em 0.2em 0.2em 0px rgba(0, 0, 0, 0.26);
    }
    a {
      width: 2em;
      padding: 0;
    }
    @media (min-width: 760px) {
      width: 10%;
      margin: 0 1.5em 0 0;

      justify-content: space-between;

      a {
        width: 1.625em;
      }

      svg {
        width: 100%;
      }
    }
  }

  a {
    font-size: 1.25em;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.1em;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.4s linear;
    font-family: 'Rubik';

    @media (min-width: 640px) {
      text-align: center;
      padding: 0;
      /* transform: scale(0.9);
      transition-duration: 0.3s; */
    }

    &:hover {
      display: inline-block;
      /* color: var(--yellow); */
    }
  }
  div.navbar {
    position: relative;
    width: 100%;
  }
`;

const StyledBurger = styled.button`
  // position: absolute;
  position: relative;
  top: 5%;
  right: 2rem;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 3rem;
  height: 3rem;
  background: transparent;
  box-shadow: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  @media (min-width: 760px) {
    display: none;
  }
  &:focus {
    outline: none;
  }

  div {
    width: 3rem;
    height: 0.5rem;
    background: ${({ open }) => (open ? '#0D0C1D' : '#111')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

// const useOnClickOutside = (ref, handler) => {
//   React.useEffect(() => {
//     const listener = (event) => {
//       if (!ref.current || ref.current.contains(event.target)) {
//         return;
//       }
//       handler(event);
//     };
//     document.addEventListener('mousedown', listener);

//     return () => {
//       document.removeEventListener('mousedown', listener);
//     };
//   }, [ref, handler]);
// };

const Menu = ({ open, setOpen }) => (
  <StyledMenu open={open}>
    <div className="nav-header">
      <Logo />
      <p>
        2017 DIVISION 2 <br aria-hidden="true" />
        NATIONAL CHAMPS
      </p>
    </div>

    <ul
      onClick={() => setOpen(!open)}
      onKeyDown={() => setOpen(!open)}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
      role="button"
      aria-hidden
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about/">About</Link>
      </li>
      <li>
        <Link to="/sponsors">sponsors</Link>
      </li>
      <li>
        <Link to="/contact">contact</Link>
      </li>
    </ul>
    <div className="nav-social">
      <a
        href="https://www.facebook.com/scyllarugby"
        target="_blank"
        rel="noreferrer"
      >
        <FacebookSVG />
      </a>

      <a
        href="https://www.instagram.com/scyllarugby/"
        target="_blank"
        rel="noreferrer"
      >
        <InstagramSVG />
      </a>

      <a
        href="https://twitter.com/scyllarugby"
        target="_blank"
        rel="noreferrer"
      >
        <TwitterSVG />
      </a>
    </div>
  </StyledMenu>
);

const Burger = ({ open, setOpen }) => (
  <StyledBurger open={open} onClick={() => setOpen(!open)}>
    <div />
    <div />
    <div />
  </StyledBurger>
);

export default function Nav() {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <NavbarStyles>
      <div className="navbar">
        <div className="mobile--only">
          <Logo />
        </div>

        <div ref={node} className="navbar-container">
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </div>
    </NavbarStyles>
  );
}
