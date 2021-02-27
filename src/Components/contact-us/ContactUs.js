import { colors } from '@material-ui/core'
import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { Email, RadioButtonUncheckedSharp } from '@material-ui/icons';
import { Table } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useHistory } from "react-router-dom";

import firebase from '../../services/firebase';



import BannerSection from '../banner-section/BannerSection';
import Footer from '../Footer'
import ButtonAppBar from '../ButtonAppBar'
import Signup from '../register-page/Signup';
import TextField from "@material-ui/core/TextField";

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { isConstructorDeclaration } from 'typescript';
import SearchBar from '../searchbar/SearchBar';
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

class ContactUs extends Component {
    
    
    constructor(props)
    {
        super(props);
        this.fnCreateAccount = this.fnCreateAccount.bind(this);
        this.HandleChange = this.HandleChange.bind(this);
        this.state = {
            Email :"",
            Password:""
        }
    }
    HandleChange(e)
    {
        this.setState(
            {
                [e.target.name] : e.target.value
            }
        )
    }

    

    fnCreateAccount() {
        /*
        try {
          await signUp(
            "Tushar",
            "ktushar19@gmail.com",
            "Tushar@1909"
          );
          history.push("/");
        } catch (error) {
          alert(error.message);
        }
        */
       try
       {
           alert(this.state.Email)
        firebase.auth().createUserWithEmailAndPassword(this.state.Email,this.state.Password);
        alert("User Added");
       }
       catch (error) {
        alert(error.message);
      }

      }
      render()
      {

    return (

        <div>

            <div class="divMainCurve">
            
                <Table>
                    <TableBody>
                    <TableRow>
                            <TableCell >
                                <div class="DivMarginHeader">
                                    <SearchBar></SearchBar>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell >
                                <div class="DivMarginHeader">
                                    <ButtonAppBar></ButtonAppBar>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell >
                            <div class="banner-title">
                                    <h1>Farmer by</h1>
                                    <h1 class="titlebg-color">NATURE</h1>
                                </div>
                                <div class="regbg-image1"></div>
                                </TableCell>
                                </TableRow>
                                <Grid container>
        <Grid item xs={6} style={{padding: "155px 15px 30px 70px"}}>
          <Paper>
          <div class="regimg-3"></div>
            <div class="address">
                <h3>Address</h3>
                <h4>DigiCrop Agriculture Solutions Pvt. Ltd.</h4>
                <h4>+91 8867498767 | +91 9148705605</h4>
                <h4><a href="mailto:sales@digi-crop.com">sales@digi-crop.com</a></h4>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={6} style={{padding: "30px 70px 30px 0px"}}>
          <Paper>
          <div class="regimg-2"></div>
          </Paper>
        </Grid>
      </Grid>
                        <TableRow>
                            <TableCell >
                                <div class="DivMarginFooter">
                                    <Footer></Footer>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </div>
        </div>
    );
                                        }
                      
}
export default ContactUs