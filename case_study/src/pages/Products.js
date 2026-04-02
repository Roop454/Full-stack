import React from 'react';
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';


function Products() {
  return (
    <div className="products-page">
      <h1 className="products-title">Our Products</h1>

      <div className="products-container">

        <div className="product-card">
          <img src="/images/pipe.png" alt="Pipes" />
          <h3>Pipes</h3>
          <p>Durable PVC and GI pipes suitable for all plumbing needs.</p>
          <button>View More</button>
        </div>

        <div className="product-card">
          <img src="/images/tap.png" alt="Taps" />
          <h3>Taps</h3>
          <p>Modern and stylish taps for bathrooms and kitchens.</p>
          <button>View More</button>
        </div>

        <div className="product-card">
          <img src="/images/fitting.png" alt="Fittings" />
          <h3>Fittings</h3>
          <p>Wide range of sanitary and plumbing fittings.</p>
          <button>View More</button>
        </div>

      </div>
    </div>
  );
}

export default Products;