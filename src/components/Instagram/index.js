import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ParallaxBanner } from 'react-scroll-parallax';
import FacebookSVG from '../../assets/images/fb2.svg';
import InstagramSVG from '../../assets/images/ig2.svg';
import TiktokSVG from '../../assets/images/tiktok.svg';
import Crest from '../../assets/images/logoSVG.svg';

const InstaStyles = styled.section`
  width: 100%;
  /* background-image: url(${(props) => props.backgroundImage}); */
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3% 0 2%;
  svg {
    width: 2em;
  }
  .insta-posts {
    width: 93%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (min-width: 1024px) {
      width: 95%;
    }
  }

  /* .insta-posts div {
    margin: 1em 0;
  } */
  .insta-posts__header {
    width: 100%;
    margin: 0 0 0.5em;
    position: relative;

    @media (min-width: 768px) {
      margin: 0 0 2em;
    }
    @media (min-width: 1024px) {
      /* width: 35%; */
      /* width: calc(((310em / 16) * 4) / 100%); */
    }
    .insta-posts__content {
      margin: 0 auto;
      padding: 1em 0;
      width: 60%;
      /* background: rgb(34, 34, 34);
      background: linear-gradient(
        90deg,
        rgba(34, 34, 34, 0.7) 33%,
        rgba(34, 34, 34, 0.2) 64%
      ); */
    }
    h3 {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      text-align: center;
      font-size: calc(36em / 16);
      font-weight: 300;
      color: #fff;
      letter-spacing: 0.01em;

      span {
        font-style: italic;
        font-size: calc(40em / 36);
        color: var(--scyllaBlue);
        padding-right: 0.1em;
      }
      span:last-of-type {
        padding-left: 0.15em;
        height: calc(40em / 36);
      }
      span svg {
        height: 100%;
        width: 100%;
      }
      @media (min-width: 768px) {
        font-size: 5em;
      }
    }
  }

  div.insta-posts__social-bar {
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    margin: 0.5em auto;
    @media (min-width: 768px) {
      margin: 2em auto;
    }
  }
  div.insta-posts__svg {
    svg {
      height: calc(25em / 16);
      fill: var(--scyllaBlue);
      @media (min-width: 768px) {
        height: 3em;
        width: auto;
      }
    }
  }

  .insta-posts__card {
    position: relative;
    width: calc(170em / 16);
    height: calc(170em / 16);
    margin: 0.5em 0;
    box-shadow: 0.2em 0.2em 0.2em 0px rgba(0, 0, 0, 0.26);
    @media (min-width: 768px) {
      margin: 1.75em 0;
      width: calc(310em / 16);
      height: calc(310em / 16);
    }
    /* @media (min-width: 1024px) {
      margin: 1em 0;
      width: calc(210em / 16);
      height: calc(210em / 16);
    } */
  }
  .insta-posts__img {
    object-fit: cover;
    height: 100%;
  }
  div.insta-posts__bar {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: rgba(17, 17, 17, 0.8);
    height: 1.5em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;

    @media (min-width: 768px) {
      height: 2em;
      /* bottom: -1em; */
    }
    svg {
      fill: #fff;
      width: 0.875em;
      margin-left: 0.5em;
      @media (min-width: 768px) {
        width: 1.25em;
      }
    }

    p {
      color: var(white);
      font-size: 0.5em;
      margin-right: 0.5em;
      @media (min-width: 768px) {
        font-size: 0.75em;
      }
    }
  }

  .parallax-ig {
    z-index: -1;
  }
`;

export default function Instagram({ socialBG, instaData }) {
  // console.log(instaData);
  const galleryArr = instaData.slice(0, 16);
  const bgImg = socialBG.mobileHero.asset.url;
  console.log(socialBG.mobileHero.asset.url);
  return (
    <ParallaxBanner
      layers={[
        {
          image: bgImg,
          speed: -10,
        },
      ]}
      className="aspect-[2/1] parallax-ig"
    >
      <InstaStyles backgroundImage={socialBG}>
        <div className="insta-posts">
          <div className="insta-posts__header">
            <div className="insta-posts__content">
              <h3>
                <span>#</span>ScyllaRugby
                <span>
                  <Crest />
                </span>
              </h3>
              <div className="insta-posts__social-bar">
                <div className="insta-posts__svg">
                  <a
                    href="https://www.facebook.com/scyllarugby"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FacebookSVG />
                  </a>
                </div>
                <div className="insta-posts__svg">
                  <a
                    href="https://www.instagram.com/scyllarugby/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <InstagramSVG />
                  </a>
                </div>
                <div className="insta-posts__svg">
                  <a
                    href="https://www.tiktok.com/@milwaukeescylla"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TiktokSVG />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {galleryArr.map((img, x) => (
            <a
              href={img.node.permalink}
              target="_blank"
              key={x}
              className="insta-posts__card"
              rel="noreferrer"
            >
              <GatsbyImage
                image={img.node.localFile.childImageSharp.gatsbyImageData}
                alt="sponsor"
                className="insta-posts__img"
              />
              <div className="insta-posts__bar">
                <InstagramSVG />
                <p>{img.node.timestamp}</p>
              </div>
            </a>
          ))}
        </div>
      </InstaStyles>
    </ParallaxBanner>
  );
}

// <Gallery
// token={process.env.REACT_APP_INS_TOKEN}
// limit={16}
// instaData={instaData}
// />
