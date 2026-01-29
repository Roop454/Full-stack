import React from 'react';
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';

function Products() {
  return (
    <div className="container mt-5">
      <h2>Our Products</h2>

      <div className="row mt-4">

        <div className="col-md-4">
          <Card>
            <CardContent>
              <Typography variant="h5">Pipes</Typography>
              <Typography>
                Durable PVC and GI pipes suitable for all plumbing needs.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">View More</Button>
            </CardActions>
          </Card>
        </div>

        <div className="col-md-4">
          <Card>
            <CardContent>
              <Typography variant="h5">Taps</Typography>
              <Typography>
                Modern and stylish taps for bathrooms and kitchens.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">View More</Button>
            </CardActions>
          </Card>
        </div>

        <div className="col-md-4">
          <Card>
            <CardContent>
              <Typography variant="h5">Fittings</Typography>
              <Typography>
                Wide range of sanitary and plumbing fittings.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">View More</Button>
            </CardActions>
          </Card>
        </div>

      </div>
    </div>
  );
}

export default Products;
