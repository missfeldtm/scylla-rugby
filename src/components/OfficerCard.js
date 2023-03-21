import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link as GatsbyLink } from 'gatsby';

// import { GatsbyImage, getImage } from 'gatsby-plugin-image';
const OfficerCardStyles = styled.div`
  .officer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    /* align-items: center; */
    @media (min-width: 760px) {
      width: 95%;
      margin: 0 auto;
    }
  }
  .officer-card {
    width: 45%;
    margin: 1em 0;
    @media (min-width: 760px) {
      width: 28%;
    }
    h3 {
      color: #fff;
      font-size: 0.875em;
      font-family: 'Rubik';
      margin: 0.75em 0 0;
      line-height: 1;
      @media (min-width: 760px) {
        font-size: calc(28em / 16);
      }
    }
    p {
      font-size: calc(12em / 16);
      @media (min-width: 760px) {
        font-size: calc(22em / 16);
      }
    }
    &__tags {
      display: flex;
      width: 100%;
      margin: 0.25em 0;
      p {
        font-size: calc(9em / 16);
        background-color: var(--scyllaBlue);
        border-radius: calc(2em / 16);
        padding: 0.25em 0.5em;
        margin: 0.25em 0.75em 0.5em 0;
        white-space: nowrap;
        &:last-child {
          display: none;
        }

        @media (min-width: 760px) {
          font-size: calc(12em / 16);

          &:last-child {
            display: inherit;
          }
        }
      }
    }

    a {
      color: #fff;
      font-size: 0.75em;
      background-color: var(--white);
      color: var(--scyllaBlue);
      text-transform: uppercase;
      font-weight: 600;
      padding: 0.25em 1em;
      border-radius: calc(2em / 16);
    }
  }
`;

function SingleOfficer({ officer }) {
  const mailTo = 'mailTo:';
  return (
    <div className="officer-card">
      <GatsbyImage
        image={officer.image.asset.gatsbyImage}
        alt="officer"
        className="officer-card__img"
      />

      <h3>{officer.name}</h3>
      <p>{officer.position}</p>
      <div className="officer-card__tags">
        {officer.tags.map((tag, x) => (
          <p key={x}>{tag}</p>
        ))}
      </div>
      <a href={mailTo + officer.email} target="_blank" rel="noreferrer">
        Contact
      </a>
    </div>
  );
}

export default function OfficerPanel({ od }) {
  return (
    <div>
      <OfficerCardStyles>
        <section className="officer">
          {od.map((officer, x) =>
            officer._type !== null ? (
              <SingleOfficer key={x} officer={officer} />
            ) : null
          )}
        </section>
      </OfficerCardStyles>
    </div>
  );
}
