import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function DigitizedTech() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={6} style={{padding: "30px 20px 20px 30px", textAlign: "left"}}>
          <Paper className={classes.paper}>
            <h1 class="title">MAKING AGRICULTURE<br /> DIGITALLY TRANSFORMED</h1>
            <h3 class="title-content">DigiCrop is a one stop solutions<br/> that integrates cutting edge digitized<br /> technologies for transformation<br /> in Agriculture.
</h3>
          </Paper>
        </Grid>
        <Grid item xs={6} style={{padding: "30px 30px 20px 0px"}}>
          <Paper className={classes.paper}>
            <div class="img-1"></div>
          </Paper>
        </Grid>
        <Grid item xs={6} style={{padding: "0px 20px 30px 30px"}}>
          <Paper className={classes.paper}>
          <div class="img-2"></div>
          </Paper>
        </Grid>
        <Grid item xs={6} style={{padding: "0px 30px 30px 0px"}}>
          <Paper className={classes.paper}>
          <div class="img-3"></div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

