/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import InstagramSVG from '../assets/images/ig2.svg';
import Web from '../assets/images/web.svg';

const MuStyles = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 93%;
  margin: 1em auto;
  h2 {
    color: var(--yellow);
    font-size: 1em;
    text-transform: uppercase;
    margin: 1em auto 2em;

    @media (min-width: 760px) {
      font-size: 3em;
    }
  }
  h3 {
    color: var(--white);
    font-size: 1em;
    @media (min-width: 760px) {
      font-size: 3em;
    }
  }
  h4 {
    color: var(--white);
    font-size: 0.68em;
    margin: 0.25em 0 1em 0;
    @media (min-width: 760px) {
      font-size: 1.25em;
    }
  }
  p {
    font-size: 0.6em;
    line-height: 1.75;
    @media (min-width: 760px) {
      font-size: 1em;
      line-height: 2.25;
    }
  }
  .coach-mu {
    display: flex;
    flex-direction: column-reverse;
    position: relative;
    @media (min-width: 760px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
  .coach-mu__social {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    h4 {
      width: 100%;
      margin: 1em 0 0.5em;
    }
    @media (min-width: 760px) {
      margin: 2em 0;

      h4 {
        margin: 0 0 1em;
      }
    }
  }

  .coach-mu__link {
    display: block;
    height: 2em;
    @media (min-width: 760px) {
      height: calc(82em / 16);
      margin: 0 1em 0 0;
    }
  }
  svg {
    height: 100%;
    margin: 0.5em 1em 0 0;
  }
  svg path {
    fill: #1cbeff;
  }
  .coach-mu__copy {
    @media (min-width: 760px) {
      width: 75%;
    }
  }
  .coach-mu__img {
    width: auto;
    position: absolute;
    top: -20%;
    right: 0;
    @media (min-width: 760px) {
      position: relative;
      top: 0;
      right: 0;
    }
  }
  .coach-mu__img img {
    width: 5em;
    @media (min-width: 760px) {
      width: 22em;
    }
  }
`;

function CoachMu() {
  return (
    <MuStyles>
      <div className="scylla-spotlight">
        <h2>Scylla Spotlight</h2>
      </div>
      <div className="coach-mu">
        <div className="coach-mu__copy">
          <h3>MEET COACH MU</h3>
          <h4>Director of Athletic Performance</h4>
          <p>
            Coach Ajamu “Mu” Olaniyan is a three-time National Champion, and
            seven-time All-American in the triple jump. He is a UW-La Crosse
            Wall of Fame member as well as WIAC All-Time team selection. As a
            sports performance engineer, Coach Olaniyan has enhanced speed,
            explosiveness, and agility for numerous athletes at the high school,
            college, and professional levels in baseball, basketball, football,
            soccer, rugby, and volleyball.
          </p>
          <div className="coach-mu__social">
            <h4>Learn More:</h4>
            <a
              href="https://www.instagram.com/topflightone/?hl=en"
              target="_blank"
              rel="noreferrer"
              className="coach-mu__link"
            >
              <InstagramSVG />
            </a>
            <a
              href="https://www.topflightone.com"
              target="_blank"
              rel="noreferrer"
              className="coach-mu__link"
            >
              <Web />
            </a>
          </div>
        </div>
        <div className="coach-mu__img">
          <StaticImage src="../assets/images/coach.png" alt="Top Flight" />
        </div>
      </div>
    </MuStyles>
  );
}

export default CoachMu;
