import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Navbar from '../components/navigation/NavBar';
import VerticalNavBar from '../components/navigation/VerticalNavBar';
import Home from '../components/Home';
import Catalogs from '../components/Catalogs';
import Games from '../components/Games';
import Movies from '../components/Movies';
import Books from '../components/Books';
import Music from '../components/Music';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    overflow: 'hidden',
  },
  grid: {
    flexFlow: 'row nowrap',
    marginTop: '0px',
  },
  verticalBar: {
    minWidth: '72px',
  },
  tabPanel: {
    flexGrow: 1,
  },
}));

const TabPanel = props => {
  const { value } = props;
  const tabArray = [Catalogs, Games, Movies, Books, Music];
  const TabName = tabArray[value];
  return <TabName />;
};

const Dashboard = () => {
  const classes = useStyles();
  const [tabValue, setTabValue] = React.useState(0);
  const [isHome, setIsHome] = React.useState(true);

  function handleTabChange(event, newTabValue) {
    setIsHome(false);
    setTabValue(newTabValue);
  }

  function handleMenuClick(event) {
    if (event.currentTarget.id < 0) {
      setIsHome(true);
    } else {
      setIsHome(false);
      setTabValue(Number(event.currentTarget.id));
    }
  }

  return (
    <div className={classes.root}>
      <Navbar
        isHome={isHome}
        tabValue={tabValue}
        onTabChange={handleTabChange}
      />
      <Grid container className={classes.grid} spacing={2}>
        <Grid item className={classes.verticalBar}>
          <VerticalNavBar onClickHandler={handleMenuClick} />
        </Grid>
        <Grid item className={classes.TabPanel}>
          {isHome ? <Home /> : <TabPanel value={tabValue} />}
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
