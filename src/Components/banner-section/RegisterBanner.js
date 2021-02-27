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

function RegisterBanner(){
    const classes = useStyles();
    return(
    
        <div className={classes.root}>
            <Container maxWidth="sm" class="regbg-image" >
              <div class="regbanner-content">
                <div class="reg-title">
                <h1>Farmer by</h1>
                <h1>NATURE</h1>
                </div>                
              </div>
            </Container>
            
        </div>
    )
}
export default RegisterBanner