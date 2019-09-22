import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const styles = {
  root: {
    height: '100%',
  },
  rootContainer: {
    height: '100%',
    minWidth: 1000,
    minHeight: 400,
  },
  leftContainer: {
    height: '100vh',
    alignItems: 'center',
  },
  rightContainer: {
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  archivesContainer: {
    padding: '10px',
  },
  paper: {
    backgroundColor: '#fff',
    color: '#000',
    padding: '10px',
    minHeight: 150,
  },
  splashScreen: {
    height: '100vh',
    background: `url(/static/images/catalogs.jpg)`,
    backgroundSize: 'auto auto',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
  },
  fab: {
    float: 'right',
    marginTop: -45,
    color: '#fff',
  },
};

const useStyles = makeStyles(styles);

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {' '}
      <Grid container className={classes.rootContainer} spacing={0}>
        <Grid container className={classes.leftContainer} item xs={6}>
          <Grid className={classes.archivesContainer} item xs={12}>
            <div className={classes.archivesContainer}>
              <Paper className={classes.paper}>
                <Typography variant="h1" component="h1">
                  ARCHIVES.
                </Typography>
                <Typography component="p">
                  catalog.of.[games.movies.books.music]
                </Typography>
                <Fab
                  color="primary"
                  aria-label="add"
                  className={classes.fab}
                  href="/dashboard"
                >
                  <AddIcon />
                </Fab>
              </Paper>
            </div>
          </Grid>
        </Grid>
        <Grid container className={classes.rightContainer} item xs={6}>
          <Grid className={classes.splashScreen} item xs={12} />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
