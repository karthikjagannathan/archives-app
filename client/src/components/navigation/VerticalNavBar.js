import React from 'react';
import { Grid, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import HomeIcon from '@material-ui/icons/Home';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import BookIcon from '@material-ui/icons/Book';
import GamesIcon from '@material-ui/icons/Games';
import MovieIcon from '@material-ui/icons/Movie';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  button: {
    height: 95,
  },
  label: {
    flexDirection: 'column',
    fontSize: '12px !important',
  },
  icon: {},
}));

const CustomIconButton = props => {
  const classes = useStyles();
  const { id, name, onClickHandler } = props;

  let icon;
  if (name === 'Home') {
    icon = <HomeIcon />;
  } else if (name === 'Catalogs') {
    icon = <LibraryAddIcon />;
  } else if (name === 'Books') {
    icon = <BookIcon />;
  } else if (name === 'Games') {
    icon = <GamesIcon />;
  } else if (name === 'Movies') {
    icon = <MovieIcon />;
  } else if (name === 'Music') {
    icon = <MusicNoteIcon />;
  }

  return (
    <IconButton
      classes={{ root: classes.button, label: classes.label }}
      style={{ backgroundColor: 'transparent' }}
      color="secondary"
      aria-label={name}
      id={id}
      onClick={onClickHandler}
    >
      {icon}
      {name}
    </IconButton>
  );
};

const VerticalNavBar = props => {
  const { onClickHandler } = props;
  return (
    <Grid container spacing={2} direction="column">
      <CustomIconButton id={-1} name="Home" onClickHandler={onClickHandler} />
      <CustomIconButton
        id={0}
        name="Catalogs"
        onClickHandler={onClickHandler}
      />
      <CustomIconButton id={1} name="Games" onClickHandler={onClickHandler} />
      <CustomIconButton id={2} name="Movies" onClickHandler={onClickHandler} />
      <CustomIconButton id={3} name="Books" onClickHandler={onClickHandler} />
      <CustomIconButton id={4} name="Music" onClickHandler={onClickHandler} />
    </Grid>
  );
};

CustomIconButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default VerticalNavBar;
