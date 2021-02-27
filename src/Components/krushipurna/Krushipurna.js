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

function Krushipurna(){
    const classes = useStyles();
    return(
    
        <div className={classes.root}>                
              <Grid container>
        <Grid item xs={6} >
          <Paper className={classes.paper}>
          <div class="krushilogo-image"></div>
          <div class="krushi-content">
          <h4 >SMS, Call with user friendly App</h4>
          <h4 >Autonomous Pump Control System</h4>
          <h4>Multiple User can operate pump set remotely Multiple<br/> Atuo Modes, Timer & Schedule</h4>
          </div>
          </Paper>
        </Grid>
        <Grid item xs={6} >
          <Paper className={classes.paper}>
              <div class="krushi-gadget"></div>
              
          </Paper>
        </Grid>
</Grid>
<Grid container class="krushi-iconimg">
          <Grid item xs={4} >
          <Paper className={classes.paper}>
          <div class="krushiicon1-image"></div>
          <h4 class="img-title">Ultimate pump care unit </h4>
          </Paper>
        </Grid>
        <Grid item xs={4} >
          <Paper className={classes.paper}>
          <div class="krushiicon2-image"></div>
          <h4 class="img-title" class="img-title" >Brings longer life </h4>
          </Paper>
        </Grid>
        <Grid item xs={4} >
          <Paper className={classes.paper}>
          <div class="krushiicon3-image"></div>
          <h4 class="img-title">Extend / upgrade to<br /> modern automation </h4>
          </Paper>
        </Grid>
        </Grid>
        </div>
    )
}
export default Krushipurna