import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles({
  card: {
    maxWidth: 200,
  },
  media: {
    width: 200,
    height: 200,
  },
  iconButton: {
    float: 'right',
    marginTop: '-50px',
    marginRight: '-10px',
  },
  icon: {
    fontSize: '14px',
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cardImage.webp"
          title="stick man"
        />
      </CardActionArea>
      <CardContent>
        <Typography variant="subtitle2" color="textSecondary" component="p">
          Title
        </Typography>
        <Typography variant="caption" color="textSecondary" component="p">
          Artist
        </Typography>
        <IconButton aria-label="settings" className={classes.iconButton}>
          <MoreVertIcon className={classes.icon} />
        </IconButton>
      </CardContent>
    </Card>
  );
}
