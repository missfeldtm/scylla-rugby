import React from 'react';
import styled from 'styled-components';
import { ParallaxProvider } from 'react-scroll-parallax';
import Typography from '../styles/Typography';
import Footer from './Footer';
import Nav from './Nav';

import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';

const SiteBorderStyles = styled.div`
  margin: 0 auto;

  // margin-top: clam(2rem, 10vw, 12rem);
`;

const ContentStyles = styled.div`
  /* background-color: var(--black); */
  overflow-x: hidden;
`;
export default function Layout({ children }) {
  return (
    <>
      <Typography />
      <GlobalStyles />
      <SiteBorderStyles>
        <ContentStyles>
          <ParallaxProvider>
            <Nav />

            {children}
          </ParallaxProvider>
          <Footer />
        </ContentStyles>
      </SiteBorderStyles>
    </>
  );
}
