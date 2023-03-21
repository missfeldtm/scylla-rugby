import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

// import { GatsbyImage, getImage } from 'gatsby-plugin-image';
const SponsorStyles = styled.div`
  background-color: var(--scyllaBlue);
  width: 100vw;
  max-width: 1440px;
  .brand-rail {
    width: 100%;
    margin: 2em auto;
    padding: 1.25em 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    max-width: 1440px;
  }
  .brand-rail__heading {
    font-size: 1.4em;
    color: var(--white);
    width: 100%;
    margin: 0 auto 0.5em;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    @media (min-width: 760px) {
      font-size: calc(32em / 16);
      margin: 0;
    }
  }
  .brand-rail__box {
    width: 40%;
    margin: 0 0 0.5em;
    @media (min-width: 760px) {
      width: 13%;
    }
  }
  /* .brand-rail__box:last-of-type {
    width: 22%;
    @media (min-width: 760px) {
      width: 10%;
    }
  } */
`;

function SingleSponsor({ sponsor }) {
  // console.log(sponsor);
  return (
    <div className="brand-rail__box">
      <a href={sponsor.sponsorLink} target="_blank" rel="noreferrer">
        <GatsbyImage
          image={sponsor.image.asset.gatsbyImage}
          alt="sponsor"
          className="brand-rail__img"
        />
      </a>
    </div>
  );
}

export default function BrandRail({ sponsors }) {
  return (
    <div>
      <SponsorStyles>
        <section className="brand-rail">
          <h2 className="brand-rail__heading">Proud Sponsors:</h2>
          {sponsors.map((sponsor, x) => (
            <SingleSponsor key={x} sponsor={sponsor} />
          ))}
        </section>
      </SponsorStyles>
    </div>
  );
}
