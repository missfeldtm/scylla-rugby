import React from 'react';
import styled from 'styled-components';
import LogoSVG from '../assets/images/logoSVG.svg';

const LogoStyles = styled.div`
  .inner {
    display: block;
    position: relative;
    z-index: 6;
    left: 2rem;
    top: 1.65em;
    width: 5.25em;

    svg {
      width: 100%;
      height: auto;
    }
  }
`;

export default function Logo() {
  return (
    <LogoStyles className="logo">
      <div className="inner">
        <LogoSVG />
      </div>
    </LogoStyles>
  );
}
