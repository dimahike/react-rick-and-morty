import React from 'react';
import { Box, Button, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  headTable: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingInlineStart: theme.spacing(1),
    color: theme.palette.common.white,
  },
  bodyTable: {
    borderBottom: '1px solid black',
  },
}));

const WatchList = ({ list }) => {
  const classes = useStyles();
  return (
    <Box>
      <Box>
        <Typography variant="h5"> Watch List :</Typography>
      </Box>
      <Box mt={2}>
        <Box display={{ xs: 'none', sm: 'block' }} bgcolor="primary.light">
          <Grid container>
            <Grid item xs={2} className={classes.headTable}>
              <Typography variant="body2">Watched</Typography>
            </Grid>
            <Grid item xs={3} className={classes.headTable}>
              <Typography variant="body2">Episode</Typography>
            </Grid>
            <Grid item xs={5} className={classes.headTable}>
              <Typography variant="body2">Name</Typography>
            </Grid>
            <Grid item xs={2} className={classes.headTable}>
              <Typography variant="body2">Ation</Typography>
            </Grid>
          </Grid>
        </Box>
        {list &&
          list.results.map((watchEpisode) => (
            <Grid
              key={watchEpisode.id}
              container
              direction="row"
              alignItems="center"
              className={classes.bodyTable}>
              <Grid item xs={12} sm={2}>
                <Box p={2} display={{ xs: 'flex', sm: 'block' }} justifyContent="center">
                  <Box display={{ xs: 'block', sm: 'none' }} mr={2} color="primary.dark">
                    <Typography variant="h6">Watched :</Typography>
                  </Box>
                  <Box>
                    <Typography variant="h6">{watchEpisode.watched ? 'Yes' : 'No'}</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box p={2} display={{ xs: 'flex', sm: 'block' }} justifyContent="center">
                  <Box display={{ xs: 'block', sm: 'none' }} mr={2} color="primary.dark">
                    <Typography variant="h6">Episode :</Typography>
                  </Box>
                  <Box>
                    <Typography variant="h6">{watchEpisode.id}</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={5}>
                <Box p={2} display={{ xs: 'flex', sm: 'block' }} justifyContent="center">
                  <Box display={{ xs: 'block', sm: 'none' }} mr={2} color="primary.dark">
                    <Typography variant="h6">Name :</Typography>
                  </Box>
                  <Box>
                    <Typography variant="h6">{watchEpisode.name}</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Box p={2} display={{ xs: 'flex', sm: 'block' }} justifyContent="center">
                  <Box display={{ xs: 'block', sm: 'none' }}>
                    <Button variant="contained" color="secondary">
                      remove
                    </Button>
                  </Box>
                  <Box display={{ xs: 'none', sm: 'block' }}>
                    <IconButton aria-label="delete" color="secondary">
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          ))}
      </Box>
    </Box>
  );
};

export default WatchList;
