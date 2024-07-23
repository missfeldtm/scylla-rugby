import React from 'react';
import styled from 'styled-components';
import Form from './Form';
import HeroImg from '../HeroImg';

const JoinContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 760px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    height: 45.875em;
  }
  .join-block {
    margin: 1em auto 2em;
    text-shadow: 0.1em 0.1em 0.1em rgb(0 0 0 / 75%);
    p {
      text-align: center;
      @media (min-width: 760px) {
        font-size: 1.5em;
        text-align: left;
        margin: 0;
      }
    }
    @media (min-width: 760px) {
      width: 35%;

      margin: 0;
    }
  }
  textarea {
    height: 4em;
  }
  .join-block__heading {
    color: var(--white);
    text-transform: uppercase;
    text-align: center;
    font-size: 1.5em;
    @media (min-width: 760px) {
      font-size: 4em;
      text-align: left;
    }
  }
  h2 {
    /* margin: 0 0 1em; */
    /* align-self: flex-start; */
    font-size: 1.75em;

    @media (min-width: 760px) {
      font-size: calc(50em / 16);
    }
  }

  .hero-img {
    width: 100%;

    max-width: 1600px;

    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    /* &:nth-of-type(2) {
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
      } */
  }
`;

export default function JoinContent({ data }) {
  const hero = data.HeroImage;

  return (
    <JoinContainer>
      <HeroImg hero={hero} />

      
      <div className="join-block">
        <h2 className="join-block__heading">{data.header}</h2>
        <p>{data.subHeader}</p>
      </div>

      <Form formHeading={data.form.formHeading} formData={data.form.fields} />
    </JoinContainer>
  );
}
