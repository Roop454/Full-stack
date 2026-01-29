import React from 'react';
import { Typography } from '@mui/material';

function Services() {
  return (
    <div className="services-section">
      <div className="container">
        <Typography variant="h4" gutterBottom>
          Our Services
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 4 }}>
          Reliable sanitary solutions trusted by customers and contractors
        </Typography>

        <div className="service-item">
          <span className="service-dot"></span>
          <span>Retail and wholesale sanitary products</span>
        </div>

        <div className="service-item">
          <span className="service-dot"></span>
          <span>Bulk supply for contractors</span>
        </div>

        <div className="service-item">
          <span className="service-dot"></span>
          <span>Expert plumbing guidance</span>
        </div>

        <div className="service-item">
          <span className="service-dot"></span>
          <span>Affordable pricing</span>
        </div>
      </div>
    </div>
  );
}

export default Services;
