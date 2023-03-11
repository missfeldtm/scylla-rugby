import React from 'react';
import styled from 'styled-components';
import Checkbox from '../../assets/images/checkbox.svg';

const BannerStyles = styled.section`
  width: 100%;
  background-color: var(--scyllaBlue);
  padding: 3% 0;
  margin: 1em auto;

  @media (min-width: 760px) {
    width: 90%;
    margin: 2em auto;
  }

  h2 {
    text-transform: uppercase;
    text-align: center;
  }

  .banner-checklist {
    width: 90%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;

    .banner-checklist__box {
      /* width: 45%; */
      display: flex;
      align-items: center;
      margin: 0.5em 0;
    }

    svg {
      width: 1em;
    }

    p {
      font-size: 0.75em;
      color: var(--black);
      margin-left: 0.5em;
    }
  }

  .banner-link {
    margin: 0.5em auto;
    display: block;
    font-size: 0.75em;
    text-align: center;
    font-weight: 600;
    text-decoration: underline;
  }
`;

export default function InfoBanner() {
  return (
    <BannerStyles>
      <div className="banner-container">
        <h2>Rugby Checklist</h2>

        <div className="banner-checklist">
          <div className="banner-checklist__box">
            <Checkbox /> <p>Soccer/Rugby Cleats</p>
          </div>
          <div className="banner-checklist__box">
            <Checkbox /> <p>Mouthguard</p>
          </div>
          <div className="banner-checklist__box">
            <Checkbox /> <p>Water Bottle</p>
          </div>
          <div className="banner-checklist__box">
            <Checkbox /> <p>Active Clothing</p>
          </div>
        </div>
        <a href="#01" className="banner-link">
          New to rugby? Click here to learn more!
        </a>
      </div>
    </BannerStyles>
  );
}
