import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

const ContentStyles = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .about-block {
    width: 95%;
    display: flex;
    flex-direction: column;

    @media (min-width: 760px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 90%;
      margin-bottom: 2em;
    }

    &:first-child {
      flex-direction: row-reverse;
      .about-block__img {
        position: relative;
        top: 2em;
        left: 0;
        margin: 0;

        @media (min-width: 760px) {
          top: 0;
        }
      }
    }
  }
  h2 {
    color: var(--white);
    font-size: calc(22em / 16);
    @media (min-width: 760px) {
      font-size: calc(22em / 16);
    }
  }

  h3 {
    font-size: 0.75em;
    color: var(--white);
    font-style: italic;
    font-weight: normal;
    @media (min-width: 760px) {
      font-size: calc(18em / 16);
      margin: 0.5em 0;
    }
  }
  p {
    font-size: 0.75em;
    color: var(--white);
    margin: 0.5em 0;
    line-height: 1.5;
    @media (min-width: 760px) {
      font-size: 1em;
      line-height: 1.75;
    }
  }
  .about-block__copy {
    @media (min-width: 760px) {
      width: 60%;
    }
  }

  .about-block__img {
    align-self: flex-end;
    width: calc(90em / 16);
    position: relative;
    margin: 1em 0 0.5em;
    position: relative;
    right: 0.25em;
    @media (min-width: 760px) {
      width: calc(370em / 16);
      right: 0;
      margin: 0;
    }
  }
`;
function Paragraphs({ section }) {
  return (
    <>
      {section.map((para, x) => (
        <p key={x}>{para}</p>
      ))}
    </>
    //
  );
}
export default function ContentGen({ apContent }) {
  return (
    <ContentStyles>
      {apContent.map((section) => (
        <div className="about-block" key={section._key}>
          <GatsbyImage
            image={section.image.asset.gatsbyImage}
            alt="hero"
            className="about-block__img"
          />

          <div className="about-block__copy">
            <h2>{section.pTitle}</h2>
            {section.subheading !== null ? <h3>{section.subheading}</h3> : null}
            <Paragraphs section={section.paragraphs} />
          </div>
        </div>
      ))}
    </ContentStyles>
  );
}
