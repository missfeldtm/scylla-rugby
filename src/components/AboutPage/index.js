import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import ContentGen from './ContentGen';
import HeroImg from '../HeroImg';

const AboutStyles = styled.div`
  width: 100%;
  padding-bottom: 5%;
  .hero {
    width: 100%;
    height: calc(370em / 16);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media (min-width: 760px) {
      position: static;
      height: calc(670em / 16);
    }

    .hero-box {
      height: calc(90em / 16);
      width: 90%;
      margin-top: 3em;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      background-color: var(--scyllaBlue);
      box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.75);
      border-radius: 1px;

      @media (min-width: 760px) {
        width: calc(583em / 16);
        height: calc(186em / 16);
      }

      &__heading {
        text-transform: uppercase;
        color: var(--white);
        font-size: calc(28em / 16);
        margin: 0;

        @media (min-width: 760px) {
          font-size: calc(61em / 16);
        }
      }
      &__subheading {
        text-transform: uppercase;
        font-size: calc(14em / 16);
        text-align: center;
        padding: 0 1em;

        /* margin: 1em auto; */
        @media (min-width: 760px) {
          font-size: calc(23em / 16);
          /* margin: 0 0 0.5em; */
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
export default function AboutContent({ apData }) {
  const hero = apData.HeroImage;
  const apContent = apData.contentCreator;

  return (
    <AboutStyles>
      <section className="hero">
        <HeroImg hero={hero} />

        <div className="hero-box">
          <h2 className="hero-box__heading">{apData.header}</h2>
          <p className="hero-box__subheading">{apData.subHeader}</p>
        </div>
      </section>
      <ContentGen apContent={apContent} />
    </AboutStyles>
  );
}

// <GatsbyImage image={heroImg} alt="hero" className="hero-img" />
// <JoinModal hpData={hpData} />
