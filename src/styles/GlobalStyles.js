import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #111;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
    --scyllaBlue:#1CBEFF;
    --scyllaBlueT:rgba(28, 190, 255, .7);
    --blackT:rgba(17,17,17, .87);
  }
  html {
    font-size:62.5%;
  }

  body {
    font-size: 4.2222vw;
    box-sizing:border-box;
    background-color:var(--black);
    margin: 0 auto !important;
    box-sizing:border-box;
    position: relative;
    @media (min-width: 760px) {
      font-size:1.111vw;
    }
    @media (min-width: 1440px) {
      font-size:16px;
      max-width:1440px;
      margin: 0 auto;
    }
  }
  


  /* .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  } */

//   /* Scrollbar Styles */
//   body::-webkit-scrollbar {
//     width: 12px;
//   }
//   html {
//     scrollbar-width: thin;
//     scrollbar-color: var(--red) var(--white);
//   }
//   body::-webkit-scrollbar-track {
//     background: var(--white);
//   }
//   body::-webkit-scrollbar-thumb {
//     background-color: var(--red) ;
//     border-radius: 6px;
//     border: 3px solid var(--white);
//   }

.mobile--only{
  display:inherit;
  @media (min-width: 760px) {
    display: none!important;
  }
}
.desktop--only{
  display:none;
  @media (min-width: 760px) {
    display: inherit;
  }
}

  img {
    max-width: 100%;
  }



`;

export default GlobalStyles;
