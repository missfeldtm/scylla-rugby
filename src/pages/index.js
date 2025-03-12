import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import BrandRail from '../components/BrandRail';
import Hero from '../components/Hero';
import Instagram from '../components/Instagram';
import CoachMu from '../components/CoachMu';

const HPStyles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function HomePage({ data }) {
  const hpData = data.allSanityHomePage.edges[0].node;
  /* Sponsor Data */
  const { sponsors } = data.allSanityHomePage.edges[0].node;
  // console.log(data.allSanityHomePage.edges[0].node.sponsors);

  // const socialBG = socialQueryBG[0].image.asset.url;
  // console.log(socialBG);
  // console.log(data.allInstagramContent.edges);
  // const instaData = data.allInstagramContent.edges;
  const socialBG = hpData.instaBG;

  return (
    <HPStyles className="homepage">
      <Hero hpData={hpData} />
      <CoachMu />
      <BrandRail sponsors={sponsors} />
      
    </HPStyles>
  );
}

export const query = graphql`
  query ImgQuery {
    allSanityHomePage {
      edges {
        node {
          HeroImage {
            desktopHero {
              asset {
                url
                gatsbyImageData(
                  layout: CONSTRAINED

                  placeholder: BLURRED
                )
              }
            }
            mobileHero {
              asset {
                url
                gatsbyImageData(
                  layout: CONSTRAINED

                  placeholder: BLURRED
                )
              }
            }
          }
          heading
          button
          sponsors {
            _key
            _type
            name
            description
            sponsorLink
            image {
              asset {
                gatsbyImage(
                  width: 100
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                )
              }
            }
          }
          instaBG {
            desktopHero {
              asset {
                url
                gatsbyImage(
                  layout: CONSTRAINED
                  width: 100
                  placeholder: BLURRED
                )
              }
            }
            mobileHero {
              asset {
                url
                gatsbyImage(
                  layout: FULL_WIDTH
                  width: 100
                  placeholder: BLURRED
                )
              }
            }
          }
          subheading
        }
      }
    }

    # allInstagramContent {
    #   edges {
    #     node {
    #       permalink
    #       timestamp(fromNow: true)
    #       caption
    #       media_url
    #       localFile {
    #         childImageSharp {
    #           gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
    #         }
    #       }
    #       album {
    #         localFile {
    #           childImageSharp {
    #             gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
    #           }
    #         }
    #       }
    #     }
    #   }
    # }
  }
`;

// let screenSize =   screenSize = window.innerWidth > 760 ? 1 : 0;

// const { response, isLoading, error, fetchData } = useAxios(
//   `?fields=id,media_type,permalink,children,media_url,caption&limit=16&${process.env.REACT_APP_INS_TOKEN}`
// );
// console.log(response);
// <Instagram socialBG={socialBG} instaData={instaData} />