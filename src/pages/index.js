import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import BrandRail from '../components/BrandRail';
import JoinModal from '../components/JoinModal';

const HPStyles = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  .hero {
    width: 100%;
    height: calc(455em / 16);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media (min-width: 760px) {
      position: static;
      height: calc(670em / 16);
    }

    .hero-box {
      height: calc(217em / 16);
      width: 93%;
      margin: 0 auto;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      background-color: var(--scyllaBlueT);
      box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.75);
      border-radius: 4px;

      @media (min-width: 760px) {
        width: calc(583em / 16);
        height: calc(186em / 16);
      }

      &__heading {
        text-transform: uppercase;
        color: var(--white);
        font-size: calc(32em / 16);

        @media (min-width: 760px) {
          font-size: calc(61em / 16);
        }
      }
      &__subheading {
        text-transform: uppercase;
        font-size: calc(18em / 16);
        margin: 1em auto;
        @media (min-width: 760px) {
          font-size: calc(23em / 16);
          margin: 0 0 0.5em;
        }
      }
    }

    .hero-img {
      width: 100%;
      max-width: 1440px;

      height: auto;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
  }
`;
// let screenSize =   screenSize = window.innerWidth > 760 ? 1 : 0;

export default function HomePage({ data }) {
  const heroImgs = data.allSanityImageDump;

  const sponsors = data.allSanitySponsors.nodes;

  console.log(heroImgs);
  return (
    <HPStyles className="homepage">
      <section className="hero">
        <GatsbyImage
          image={heroImgs.nodes[0].image.asset.gatsbyImage}
          alt="hero"
          className="hero-img mobile--only"
        />
        <GatsbyImage
          image={heroImgs.nodes[1].image.asset.gatsbyImage}
          alt="hero"
          className="hero-img desktop--only"
        />

        <div className="hero-box">
          <h2 className="hero-box__heading">Join Our team!</h2>
          <p className="hero-box__subheading">No experience required</p>
          <JoinModal />
        </div>
      </section>

      <BrandRail sponsors={sponsors} />
    </HPStyles>
  );
}

// export const query = graphql`
//   query {
//     mobileHero: file(relativePath: { eq: "mobile-hero.png" }){
//       childImageSharp {
//         fluid(max-width: 640){
//           ...GatsbyImageSharpFluid;
//         }
//       }
//     };
//   }
// `;

export const query = graphql`
  query ImgQuery {
    allSanityImageDump {
      nodes {
        image {
          asset {
            gatsbyImage(layout: FULL_WIDTH, width: 100)
          }
        }
      }
    }

    allSanitySponsors {
      nodes {
        id
        image {
          asset {
            gatsbyImage(width: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
