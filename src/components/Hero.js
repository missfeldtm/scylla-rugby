import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link as GatsbyLink } from 'gatsby';
import JoinModal from './JoinModal';

// import { GatsbyImage, getImage } from 'gatsby-plugin-image';
const HeroStyles = styled.div`
  width: 100%;
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

      &:nth-of-type(2) {
        display: none;
      }
      &:first-of-type {
        display: block;
      }

      @media (min-width: 760px) {
        &:first-of-type {
          display: none;
        }
        &:nth-of-type(2) {
          display: block;
        }
      }
    }
  }
`;
function HeroImgGen({ newImgs }) {
  return (
    <>
      {newImgs.map((img) => (
        <GatsbyImage
          image={img.image.asset.gatsbyImage}
          alt="hero"
          className="hero-img"
          key={img.image.asset.filename}
        />
      ))}
    </>
  );
}

export default function HeroImg({ newImgs }) {
  return (
    <HeroStyles>
      <section className="hero">
        <HeroImgGen key={newImgs} newImgs={newImgs} />
        <div className="hero-box">
          <h2 className="hero-box__heading">Join Our team!</h2>
          <p className="hero-box__subheading">No experience required</p>
          <JoinModal />
        </div>
      </section>
    </HeroStyles>
  );
}
