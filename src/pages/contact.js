import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import OfficerCard from '../components/OfficerCard';

const ContactStyles = styled.div`
  .contact-header {
    width: 100%;
    margin: 1em auto;

    h2 {
      text-align: center;
      font-size: 1.125em;
      color: #fff;
      text-transform: uppercase;
      line-height: 1.5;
    }
    p {
      font-size: 0.69em;
      text-align: center;
      line-height: 1.2;
    }
  }
  .hero {
    position: relative;

    p {
      position: absolute;
      left: 0;
      bottom: 7%;
      border-radius: 0 0.1em 0.1em 0;
      box-shadow: 3px 3px 7px 0px rgba(0, 0, 0, 0.75);
      background-color: var(--yellow);
      font-size: calc(10em / 16);
      padding: 0.5em 1em;
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
  const img = data.allSanityImageDump.nodes[2].image.asset.gatsbyImage;
  console.log(img);
  return (
    <ContactStyles>
      <div>
        <div className="hero">
          <GatsbyImage image={img} alt="hero" className="hero-img" />
          <p>
            JESSICA “CASHEW” GOLD <br aria-hidden="true" />
            SCYLLA PRESIDENT
          </p>
        </div>

        <div className="contact-header">
          <h2>Meet the Officer Board</h2>
          <p>
            Meet the people that keep Scylla Rugby <br aria-hidden="true" />
            One of the best in the midwest!
          </p>
        </div>

        <OfficerCard officers={officer} />
      </div>
    </ContactStyles>
  );
}

export const query1 = graphql`
  query OfficerQuery {
    allSanityOfficer {
      nodes {
        name
        position
        email
        Tags
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
            gatsbyImage(layout: FULL_WIDTH, width: 100)
          }
        }
      }
    }
  }
`;
