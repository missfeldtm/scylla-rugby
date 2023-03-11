import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import OfficerCard from '../components/OfficerCard';
import HeroImg from '../components/HeroImg';

const ContactStyles = styled.div`
  @media (min-width: 760px) {
    margin: 0 auto 2em;
  }
  .contact-header {
    width: 100%;
    margin: 1em auto;

    h2 {
      text-align: center;
      font-size: 1.125em;
      color: #fff;
      text-transform: uppercase;
      line-height: 1.5;
      @media (min-width: 760px) {
        font-size: calc(40em / 16);
      }
    }
    h3 {
      font-size: 0.69em;
      text-align: center;
      line-height: 1.2;
      color: #fff;
      font-weight: normal;
      width: 60%;
      margin: 0 auto;
      @media (min-width: 760px) {
        font-size: calc(22em / 16);
      }
    }
  }
  .hero {
    position: relative;
    @media (min-width: 760px) {
      height: calc(600em / 16);
    }
    p {
      position: absolute;
      left: 0;
      bottom: 15%;
      border-radius: 0 0.1em 0.1em 0;
      box-shadow: 3px 3px 7px 0px rgba(0, 0, 0, 0.75);
      background-color: var(--yellow);
      font-size: calc(10em / 16);
      padding: 0.5em 1em;
      @media (min-width: 760px) {
        font-size: 1em;
      }
    }
  }
  .hero-img {
    @media (min-width: 760px) {
      width: 100%;
      max-width: 1600px;

      height: auto;
      position: absolute;
      top: -11%;
      left: 0;
      z-index: -1;
    }
  }
`;

// function ImgProd({ imgs }) {
// imgs.assets.find(img=>{
//     <p className="tag">img</p>
// })
// }

export default function ContactPage({ data }) {
  const officer = data.allSanityOfficer.nodes;
  const oData = data.allSanityOfficerPage.edges[0].node;
  const officerData = oData.officers;

  return (
    <ContactStyles>
      <div>
        <div className="hero">
          <HeroImg hero={oData.HeroImage} />
          <p>
            JESSICA “CASHEW” GOLD <br aria-hidden="true" />
            SCYLLA PRESIDENT
          </p>
        </div>

        <div className="contact-header">
          <h2>{oData.header}</h2>
          <h3>{oData.subHeader}</h3>
        </div>
        <OfficerCard officers={officer} od={officerData} />
      </div>
    </ContactStyles>
  );
}

export const query1 = graphql`
  query OfficerQuery {
    allSanityOfficer(sort: { fields: [_createdAt], order: ASC }) {
      nodes {
        name
        position
        email
        tags
        image {
          asset {
            gatsbyImage(width: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
    allSanityImageDump {
      nodes {
        image {
          asset {
            filename
            gatsbyImage(layout: CONSTRAINED, width: 100, placeholder: BLURRED)
          }
        }
      }
    }

    allSanityOfficerPage {
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
          officers {
            name
            position
            tags
            email
            image {
              asset {
                gatsbyImage(layout: FULL_WIDTH, width: 100)
              }
            }
            _key
          }
        }
      }
    }
  }
`;
