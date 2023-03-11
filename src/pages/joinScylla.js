import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import JoinPage from '../components/JoinPage';
import InfoBanner from '../components/JoinPage/InfoBanner';

const JoinStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: url(${(props) => props.image}); */
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: top center;
  padding: 2em 0 2em;
  @media (min-width: 760px) {
    padding: 4em 0 0;

    align-items: center;

    /* height: 70vw; */
  }

  h1 {
    margin: 0 auto 1em;
    font-size: calc(36 / 16);
    color: #f4f4f4;
    width: 70%;
    text-align: center;
    @media (min-width: 760px) {
      font-size: calc(88em / 16);
      width: 35%;
      text-align: left;
      margin: 0;
    }
  }
`;

export default function JoinScylla({ data }) {
  return (
    <JoinStyles>
      <JoinPage data={data.allSanityInquiryPage.edges[0].node} />
      <InfoBanner />
    </JoinStyles>
  );
}

export const InquiryQuery = graphql`
  query InquiryQuery {
    allSanityInquiryPage {
      edges {
        node {
          header
          subHeader
          HeroImage {
            desktopHero {
              asset {
                gatsbyImageData(
                  layout: CONSTRAINED

                  placeholder: BLURRED
                )
                url
              }
            }
            mobileHero {
              asset {
                gatsbyImageData(
                  layout: CONSTRAINED

                  placeholder: BLURRED
                )
                url
              }
            }
          }
          form {
            formHeading
            fields {
              fieldLabel
              fieldType
              placeholder
              slug {
                current
              }
            }
          }
        }
      }
    }
  }
`;
