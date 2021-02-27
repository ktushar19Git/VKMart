import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from "react-router-dom";

import GroupIcon from '@material-ui/icons/Group';
import HomeIcon from '@material-ui/icons/Home';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';

import Avatar from '@material-ui/core/Avatar';
import logo from '../images/Logo.png';
import Avatar1 from '../images/Avatar.jpeg';
import Grid from '@material-ui/core/Grid';

import './Styles.css';
import './ProfileStyles.css';


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

export default function ButtonAppBar() {
  const classes = useStyles();

  const history = useHistory();

  async function onRegister() {
    
      history.push("/CreateAccount");
    
  }
  async function onLoginPage() {
    
	history.push("/LoginPage");
  
}
async function fnSignOut()
{
  localStorage.removeItem("g_user_id");
  alert("You are logged Out.");
}

  return (
    <div >
      <div class="log-section">
      <Grid container>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
          <div class="digicrop-logo"></div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Paper className={classes.paper} style={{padding: "7px"}}>
            <h3 class="logotitle"><span><em>VK</em></span> <em>Mart</em></h3>
          </Paper>
        </Grid>
        </Grid>
        </div>     
      
      
      <AppBar position="static" class="DivMarginHeaderInner"  >
      <div class="appbar-menu">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          
          </IconButton>
          <Typography className={classes.title}>
          <div class="menu-bar menu-item" style={{float: "right",}}>
		<ul>
      
			<li><a href="HomePage">HOME</a></li>
			<li><a href="AboutUs">ABOUT US</a></li>
			<li><a href="#">CLOTHING</a>
				<div class="sub-menu-1">
					<ul>
						<li><a href="SubmitData">MEN</a></li>
            <li><a href="SubmitData">WOMEN</a></li>
					</ul>
					
				</div>

			</li>
      <li><a href="#">ELECTONICS</a>
				<div class="sub-menu-1">
					<ul>
						<li><a href="SubmitData">TV</a></li>
            <li><a href="SubmitData">KITCHEN</a></li>
					</ul>
					
				</div>

			</li>
			
			<li><a href="CustomersPage">CUSTOMERS</a>
				
			</li>
			<li><a href='ContactUs'>CONTACT US</a></li>
			<li style={{marginright:"15px"}}><a href="#">CAREER</a></li>
		</ul>
	</div>
          </Typography>
		  
          <Button color="primary" id="regmenu-btn" variant="outlined"
                                        style={{
                                          padding: "0px 10px 0px 0px !important",
                                          width: "280px !important",
                                        }} onClick={() => {
                onRegister();
              }}
			  ><GroupIcon></GroupIcon>Register</Button>
          <Button color="primary" id="regmenu-btn" variant="outlined"
                                        style={{
                                          padding: "0px 10px 0px 0px !important",
                                          width: "280px !important",
                                        }} onClick={() => {
                onLoginPage();
              }}><ExitToAppIcon></ExitToAppIcon>Login</Button>
            <div class="menu-bar_Profile">
             <ul>
                <li><a href="#"><Avatar alt="Tushar Kashid" src={Avatar1} /></a>

                  <div class="sub-menu-1">
                    <ul>
                      <li><a href="#">Update your personal details</a></li>
                      <li><a href="#">Profile Settings</a></li>
                      <li class="signout-btn"><a href="#"  onClick={() => {
                fnSignOut();
              }}>Sign Out</a></li>
                      
                    </ul>
                    
                  </div>

                  </li>
              </ul>   
              </div>

		  
        </Toolbar>
        </div>
      </AppBar>
    </div>
  );
}