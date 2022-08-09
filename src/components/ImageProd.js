import React from 'react';

function SingleImage({ img }) {
  return (
    <div>
      <h2>{img.name}</h2>
    </div>
  );
}

export default function ImageProd({ heroImgs }) {
  return <p>list of pizzas {heroImgs.length}</p>;
}
