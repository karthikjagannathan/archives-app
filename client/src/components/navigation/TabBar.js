import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const TabBar = props => {
  // const classes = useStyles();
  const { tabValue, onTabChange } = props;

  return (
    <Tabs
      value={tabValue}
      onChange={onTabChange}
      style={{ marginLeft: 50 }}
      aria-label="tab menu"
    >
      <Tab
        label="CATALOGS"
        id={a11yProps(0).id}
        aria-controls={a11yProps(0)['aria-controls']}
      />
      <Tab
        label="GAMES"
        id={a11yProps(1).id}
        aria-controls={a11yProps(1)['aria-controls']}
      />
      <Tab
        label="MOVIES"
        id={a11yProps(2).id}
        aria-controls={a11yProps(2)['aria-controls']}
      />
      <Tab
        label="BOOKS"
        id={a11yProps(3).id}
        aria-controls={a11yProps(3)['aria-controls']}
      />
      <Tab
        label="MUSIC"
        id={a11yProps(4).id}
        aria-controls={a11yProps(4)['aria-controls']}
      />
    </Tabs>
  );
};

export default TabBar;
