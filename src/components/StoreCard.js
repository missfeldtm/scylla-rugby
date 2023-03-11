import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import Background from '../assets/images/productBG.svg';

// import { GatsbyImage, getImage } from 'gatsby-plugin-image';
const ProductCardStyles = styled.div`
  width: 100vw;
  .product {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
  }
  .product-card {
    width: calc(165em / 16);
    height: calc(178em / 16);
    margin: 0.5em 0;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &__img {
      width: calc(97em / 16);
      /* max-height: calc(107em / 16); */
    }

    &:nth-of-type(2) {
      .product-card__img {
        width: calc(140em / 16);
      }
    }
    &:nth-of-type(3) {
      .product-card__img {
        width: calc(75em / 16);
      }
    }
    &:nth-of-type(5) {
      .product-card__img {
        width: calc(130em / 16);
      }
    }

    svg {
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
    }

    h3 {
      color: var(--scyllaBlue);
      font-size: 0.75em;
      font-family: 'Rubik';
      font-weight: 600;
      margin: 0.75em 0 0;
      line-height: 1;
    }
    p {
      font-size: calc(12em / 16);
      color: #000;
    }
  }
`;

function SingleItem({ product }) {
  return (
    <div className="product-card">
      <Background />
      <GatsbyImage
        image={product.image.asset.gatsbyImage}
        alt="product"
        className="product-card__img"
      />
      <h3>{product.name}</h3>
      <p>${product.price / 100}</p>
    </div>
  );
}

export default function StorePanel({ products }) {
  return (
    <div>
      <ProductCardStyles>
        <section className="product">
          {products.map((product) => (
            <SingleItem key={product.id} product={product} />
          ))}
        </section>
      </ProductCardStyles>
    </div>
  );
}
