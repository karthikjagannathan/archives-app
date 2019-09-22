import React from 'react';
import { Grid } from '@material-ui/core';
import ItemCard from './ItemCard';

const Music = () => {
  return (
    <div style={{ height: '100vh', overflow: 'auto' }}>
      MUSIC
      <Grid container spacing={2} style={{ overflow: 'auto' }}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => (
          <Grid key={value} item>
            <ItemCard />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Music;
