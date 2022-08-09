import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import LogoSVG from '../assets/images/logoSVG.svg';

const FooterStyles = styled.div`
  width: 100%;
  padding: 1em 0 1.5em;
  background-color: var(--scyllaBlue);

  display: flex;
  align-items: center;
  @media (min-width: 760px) {
    justify-content: space-between;
    padding: 1% 0;
  }

  footer {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    @media (min-width: 760px) {
      justify-content: space-between;
      padding: 0 3em;
    }
  }
  svg {
    width: calc(125em / 16);
    @media (min-width: 760px) {
      width: calc(93em / 16);
    }
  }
  .footer-navbar {
    @media (min-width: 760px) {
      width: 35%;
    }
  }

  ul {
    list-style: none;
    padding: 0;

    @media (min-width: 760px) {
      display: flex;
      justify-content: space-between;
    }
    li {
      font-size: 1.25em;
      font-family: 'Rubik';
      font-weight: 700;
      text-transform: uppercase;
      text-align: center;
      margin: 0.5em 0;
      letter-spacing: 0.06em;
      @media (min-width: 760px) {
        display: flex;
        justify-content: space-between;
      }
    }
  }

  p {
    width: 100%;
    text-align: right;
    margin: 1em 0 0.25em;
    font-size: 0.75em;
    color: #000;
  }
`;
export default function Footer() {
  return (
    <FooterStyles>
      <footer>
        <LogoSVG />
        <div className="footer-navbar">
          {/* <ul>
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
          </ul> */}
          <p>
            &copy; M.Missfeldt {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </footer>
    </FooterStyles>
  );
}
