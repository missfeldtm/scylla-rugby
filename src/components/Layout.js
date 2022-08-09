import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Nav from './Nav';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import stripes from '../assets/images/stripes.svg';

const SiteBorderStyles = styled.div`
  margin: 0 auto;

  // margin-top: clam(2rem, 10vw, 12rem);
`;

const ContentStyles = styled.div`
  /* background-color: var(--black); */
`;
export default function Layout({ children }) {
  return (
    <>
      <Typography />
      <GlobalStyles />
      <SiteBorderStyles>
        <ContentStyles>
          <Nav />

          {children}

          <Footer />
        </ContentStyles>
      </SiteBorderStyles>
    </>
  );
}
