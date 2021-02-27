import { colors } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import {Container} from '@material-ui/core';

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

function BannerSection(){
    const classes = useStyles();
    return(
    
        <div className={classes.root}>
            <Container maxWidth="sm" class="bg-image" >
              <div class="banner-content">
                <div class="content">
                <h1>Smart Farming</h1>
                <h3>RISK REDUCTION OF FARM <br/>& FARMER</h3>
                </div>                
              </div>
            </Container>
        </div>
    )
}
export default BannerSection