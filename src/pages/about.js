import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import AboutContent from '../components/AboutPage';

const AboutStyles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function AboutPage({ data }) {
  const apData = data.allSanityAboutPage.edges[0].node;

  return (
    <AboutStyles>
      <AboutContent apData={apData} />
    </AboutStyles>
  );
}

export const query4 = graphql`
  query AboutPageQuery {
    allSanityAboutPage {
      edges {
        node {
          HeroImage {
            desktopHero {
              asset {
                gatsbyImageData(
                  layout: CONSTRAINED

                  placeholder: BLURRED
                )
              }
            }
            mobileHero {
              asset {
                gatsbyImageData(
                  layout: CONSTRAINED

                  placeholder: BLURRED
                )
              }
            }
          }

          header
          subHeader
          contentCreator {
            _key
            _type
            pTitle
            paragraphs
            subheading
            image {
              asset {
                gatsbyImage(layout: FULL_WIDTH, width: 100)
              }
            }
          }
        }
      }
    }
  }
`;
