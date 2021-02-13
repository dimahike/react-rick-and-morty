import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
const CardUI = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const onClickHandle = () => {
    history.push(`/character/1`);
  };

  return (
    <Card className={classes.root} onClick={onClickHandle}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Rick Sanchez
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Human
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardUI;
