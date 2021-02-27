import { colors } from '@material-ui/core'
import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { RadioButtonUncheckedSharp } from '@material-ui/icons';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Facebook, Twitter, LinkedIn } from '@material-ui/icons'; 

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

function Footer(){
    const classes = useStyles();
    return(
    
        <div className={classes.root}>
      <AppBar position="static" class="DivMarginFooterInner" >
        <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <div class="DivFooterCopyright1"><h5>@Copyright 2021, This site is produced and maintained by Tushar Kashid</h5></div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <div class="DivFooterCopyright2"><h5> @copyright: 2020-2021 </h5> 
          <div class="socialicon">
                    <a href="#"> <Facebook style={{color: "#fff",}}/></a>
                     </div>
                
                    <div class="socialicon">
                     <a href="#"><Twitter style={{color: "#fff",}}/></a>
                      </div>
                
                        <div class="socialicon">
                        <a href="#"> <LinkedIn style={{color: "#fff",}}/></a>

                         </div>
          </div> 
          </Paper>
        </Grid>
        </Grid>
        </AppBar>
        </div>
    )
}
export default Footer