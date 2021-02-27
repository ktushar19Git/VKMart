import { colors } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import {Container} from '@material-ui/core';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

function AboutUsBanner(){
    const classes = useStyles();
    return(
    
        <div className={classes.root}>                
              <Grid container>
        <Grid item xs={8} >
          <Paper className={classes.paper}>
          <div class="aboutbg-image"></div>
          </Paper>
        </Grid>
        <Grid item xs={4} >
          <Paper className={classes.paper}>
              <div class="bg-color">
            <h1 class="abouttitle">WHAT IS DIGICROP</h1>
            <div class="about-divider"></div>
            <h4 class="abouttitle-content">Our platform (Aiki) will help farmers to grow crops effectively with help of technology.
The IT platform will connect consumer with full information of harvested crops to till
Delivery at door step. Team is working with the moto to retain maximum nutrition value of crop for end consumer and give promised return to farmers.

            </h4>
            </div>
          </Paper>
        </Grid>
        </Grid>
        </div>
    )
}
export default AboutUsBanner