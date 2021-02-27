import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { FiPhoneCall } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";
import { ImSearch} from "react-icons/im";

const useStyles = makeStyles((theme) => ({
     title:{
        color:'white',
        marginLeft:"10px",
        display:"flex",
        fontFamily:"Arial,Helvetica,sans-serif",
        fontWeight:"bold",
        flexGrow:1
    },
    searchIcon: {
      height: '100%',
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      color:'black',
      marginLeft:'150px'
  },
      text1:{
        width:'100%',
        padding:'5px',
        borderRadius:'20px',
        border:'0px none',
        }
}));
export default function SearchBar() {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static">
                <Toolbar class="top-searchbar"> 
                    <div style={{display: "inherit",  transform: "translate(100%, 2%)"}}>
                    <div class="phone">
                        <FiPhoneCall fontSize="large"/>
                        <Typography className={classes.title}>Call Us +91 9108705205</Typography>
                    </div>                                            
                    <div class="email">
                        <BsEnvelope fontSize="large"/>
                        <Typography className={classes.title} > sales@digi-crop.com</Typography>
                    </div>                
                    <div class="search" style={{position:"relative"}}>
                            <div className={classes.searchIcon}>
                                <ImSearch/>
                            </div>
                            <input type="text" className={classes.text1}/>
                    </div>
                    </div>
                </Toolbar> 
            </AppBar>
        </div>
    )
}
