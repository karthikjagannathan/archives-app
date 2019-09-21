import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Navbar from '../components/navigation/Navbar';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import Fab from '@material-ui/core/Fab';

const styles = {
  root: {
    height: '100%',
  },
  rootContainer: {
    height: '100%',
    minWidth: 1000,
    minHeight: 400,
  },
};

const useStyles = makeStyles(styles);

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <div>
        <Grid container className={classes.rootContainer} spacing={0}>
          catalog
        </Grid>
      </div>
    </div>
  );
};

export default Dashboard;
