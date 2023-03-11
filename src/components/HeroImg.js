import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function HeroImg({ hero }) {
  const heroLG = hero.desktopHero.asset.gatsbyImageData;
  const heroSM = hero.mobileHero.asset.gatsbyImageData;
  let browserWidth = 0;
  const isBrowser = typeof window !== 'undefined';
  if (isBrowser) {
    browserWidth = window.innerWidth;
  }
  const heroImg = browserWidth >= 768 ? heroLG : heroSM;
  return (
    <>
      <GatsbyImage image={heroImg} alt="hero" className="hero-img" />
    </>
  );
}
