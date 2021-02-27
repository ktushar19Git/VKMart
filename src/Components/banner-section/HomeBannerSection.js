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

function HomeBannerSection(){
    const classes = useStyles();
    return(
    
        <div className={classes.root}>
            <Container maxWidth="sm" class="homebg-image" >                
                <div class="homebanner-content">
                <div class="hand-img"></div>
                <div class="homecontent">
                <h1>Land & <br/>Water Conservation</h1>
                <h4>In India, about 68.4% of the total lamd has been degraded By the water erosion process. Intensive agricultural practices accelerate the soil erosion process.</h4>
                </div>                
              </div>
            </Container>
        </div>
    )
}
export default HomeBannerSection