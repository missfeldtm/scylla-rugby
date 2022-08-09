import { createGlobalStyle } from 'styled-components';
import '@fontsource/rubik/700.css';
import '@fontsource/rubik/400.css';
import '@fontsource/roboto-mono';
import '@fontsource/roboto-mono/600.css';

const Typography = createGlobalStyle`
  html {
    font-family: "Roboto Mono";
    font-weight: normal;
    color: var(--black);
  }
  p, li {
    color: #fff;
    margin:0;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family:"Rubik";
    font-weight:700;
    margin: 0;
  }
  a {
    color: var(--black);
    text-decoration:none;
    /* text-decoration-color: var(--red); */
    /* Chrome renders this weird with this font, so we turn it off */
    /* text-decoration-skip-ink: none; */
  }
  .center {
    text-align: center;
  }

`;

export default Typography;
