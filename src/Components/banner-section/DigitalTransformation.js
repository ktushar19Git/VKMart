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

function DigitalTransformation(){
    const classes = useStyles();
    return(
    
        <div className={classes.root}>
            <Container maxWidth="sm" class="digibg-image" >
              <div class="digibanner-content">
                <div class="digi-title">
                <h1>Digital Transformation<br/> in Agriculture!</h1>
                </div>                
              </div>
            </Container>
            <Grid container>
        <Grid item xs={12} style={{padding: "30px 30px 30px 70px", textAlign: "left"}}>
          <Paper className={classes.paper}>
            <h3 class="title-content">Hand holding of each farmer in the village through Agripreneur </h3>

            <h3 class="title-content">Digitization of Farmers data with their farming activities </h3>

            <h3 class="title-content">Throughout support for cultivation cycle with GAP </h3>

            <h3 class="title-content">Actionable data insights for ecosystem players to serve farmers in a better way </h3>

            <h3 class="title-content">Supply chain management for Agri Businesses.</h3>

          </Paper>
        </Grid>
        <Grid item xs={6} style={{padding: "0px 15px 30px 70px"}}>
          <Paper className={classes.paper}>
            <div class="digiimg-1"></div>
          </Paper>
        </Grid>
        <Grid item xs={6} style={{padding: "0px 70px 30px 15px"}}>
          <Paper className={classes.paper}>
          <div class="digiimg-2"></div>
          </Paper>
        </Grid>
      </Grid>
        </div>
    )
}
export default DigitalTransformation