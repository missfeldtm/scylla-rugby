import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import BrandRail from '../components/BrandRail';
import Hero from '../components/Hero';

const HPStyles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
// let screenSize =   screenSize = window.innerWidth > 760 ? 1 : 0;

export default function HomePage({ data }) {
  const heroImgs = data.allSanityImageDump.nodes;
  const newImgs = heroImgs.filter((img) =>
    img.image.asset.filename.includes('hero')
  );
  console.log(newImgs);

  const sponsors = data.allSanitySponsors.nodes;

  return (
    <HPStyles className="homepage">
      <Hero newImgs={newImgs} />
      <BrandRail sponsors={sponsors} />
    </HPStyles>
  );
}

// export const query = graphql`
//   query {
//     mobileHero: file(relativePath: { eq: "mobile-hero.png" }){
//       childImageSharp {
//         fluid(max-width: 640){
//           ...GatsbyImageSharpFluid;
//         }
//       }
//     };
//   }
// `;

export const query = graphql`
  query ImgQuery {
    allSanityImageDump {
      nodes {
        image {
          asset {
            filename
            gatsbyImage(layout: FULL_WIDTH, width: 100)
          }
        }
      }
    }

    allSanitySponsors {
      nodes {
        id
        image {
          asset {
            gatsbyImage(width: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
