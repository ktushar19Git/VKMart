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
import { db } from '../../services/firebase';

import firebase from '../../services/firebase';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';




import Footer from '../Footer'
import ButtonAppBar from '../ButtonAppBar'
import Signup from '../register-page/Signup';
import TextField from "@material-ui/core/TextField";
//import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SearchBar from '../searchbar/SearchBar';
import BannerSection from '../banner-section/BannerSection'



const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(10),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

class SubmitData extends Component {   
    
    constructor(props)
    {
        super(props);
        this.fnSubmitData = this.fnSubmitData.bind(this);        
        this.fnFetchData = this.fnFetchData.bind(this);
        this.HandleChange = this.HandleChange.bind(this);        
        this.fnFetchSoilMoisture = this.fnFetchSoilMoisture.bind(this);
        this.fnFetchSunLight = this.fnFetchSunLight.bind(this);
        
        this.state = {
            SoilMoisture :"",
            SoilTemperature:"",
            SoilpH:"",
            SunLight:"",
            EnvTemp:"",
            PlotNo:"1",
            posted_datetime:"11/01/2020 11:02:0025",
            InputData: []


        }
        this.fnFetchData();
    }
    HandleChange(e)
    {
        this.setState(
            {
                [e.target.name] : e.target.value
            }
        )
    }
    fnFetchSunLight(e)
    {
        let localSunLight = "";        
        if(e == 1)
        {
            localSunLight = "Low-";
        }
        else if(e == 2)
        {
            localSunLight = "Low";
        }
        else if(e == 3)
        {
            localSunLight = "Low+";
        }
        else if(e == 4)
        {
            localSunLight = "Nor-";
        }
        else if(e == 5)
        {
            localSunLight = "Nor";
        }
        else if(e == 6)
        {
            localSunLight = "Nor+";
        }
        else if(e == 7)
        {
            localSunLight = "High-";
        }
        else if(e == 8)
        {
            localSunLight = "High";
        }
        else if(e == 9)
        {
            localSunLight = "High+";
        }
        return localSunLight;
    }
    fnFetchSoilMoisture(e)
    {
        let localSoilMosture = "";        
        if(e == 1)
        {
            localSoilMosture = "Dry";
        }
        else if(e == 2)
        {
            localSoilMosture = "Dry+";
        }
        else if(e == 3)
        {
            localSoilMosture = "Nor";
        }
        else if(e == 4)
        {
            localSoilMosture = "Wet";
        }
        else if(e == 5)
        {
            localSoilMosture = "Wet+";
        }
        return localSoilMosture;
    }
    fnFetchData() {
        //db.collection('InputData').doc(uid).get()
        
        

        db.collection("InputData").where("uid", "==", localStorage.getItem("g_user_id")).get()
          .then(querySnapshot => {
              console.log(querySnapshot.docs);
            const InputData = []
            querySnapshot.forEach(doc => {
              const data = doc.data()
              InputData.push(data)
            });
            this.setState({InputData: InputData})
          });
      }

    fnSubmitData() {
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

        let strErr = "";
        if (this.state.SoilMoisture == "") {
            strErr = strErr + "Please select Soil Moisture\n";

        }
        if (this.state.SoilTemperature == "") {
            strErr = strErr + "Please enter Soil Temperature\n";

        }
        else
        {
            if(this.state.SoilTemperature < -9 || this.state.SoilTemperature > 50)
            {
                strErr = strErr + "Please select correct Soil Temperature (-9 to 50)\n";
            }
            
        }
        if (this.state.SoilpH == "") {
            strErr = strErr + "Please enter Soil PH\n";

        }
        else
        {
            if(this.state.SoilpH < 3.5 || this.state.SoilpH > 9)
            {
                strErr = strErr + "Please select correct SoilpH (3.5 to 9)\n";
            }
            
        }
        if (this.state.SunLight == "") {
            strErr = strErr + "Please select SunLight\n";

        }
        if (this.state.EnvTemp == "") {
            strErr = strErr + "Please enter Environmental Temperature\n";

        }
        else
        {
            if(this.state.SoilTemperature < -9 || this.state.SoilTemperature > 50)
            {
                strErr = strErr + "Please select correct Environmental Temperature (-9 to 50)\n";
            }
            
        }

        if (strErr != "") {
            alert(strErr);
        }
        else {
            try {
                if(localStorage.getItem("g_user_id") == null)
                {
                    alert("You are not logged in. Please Login.");
                }
                else
                {
                //alert(this.state.SoilMoisture + "\n" + this.state.SoilTemperature + "\n" + this.state.SoilpH + "\n" + this.state.SunLight + "\n" + this.state.EnvTemp);
                //firebase.auth().createUserWithEmailAndPassword(this.state.Email,this.state.Password);
                const db = firebase.firestore();
                //alert(document.getElementById("posted_datetime-local").value);
                //alert(localStorage.getItem("g_user_id"));
                db.collection("InputData").add({
                    PlotNo:this.state.PlotNo,
                    SoilMoisture: this.state.SoilMoisture,
                    SoilTemperature: this.state.SoilTemperature,
                    SoilpH: this.state.SoilpH,
                    SunLight: this.state.SunLight,
                    EnvTemp: this.state.EnvTemp,
                    posted_datetime: document.getElementById("posted_datetime-local").value,
                    uid: localStorage.getItem("g_user_id")
                })

                alert("Record Added Successfully");
                this.fnFetchData();
                }
            }
            
            catch (error) {
                alert(error.message);
            }
        }

    }
      render()
      {

    return (

        <div>

            <div class="divMainCurve">
            <TableRow>
                            <TableCell >
                                <div class="">
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
                        
                        <Grid container>
        
        <Grid item xs={12}>
          <Paper >
            <td class="tdHalf">
                                                    <h3 style={{paddingBottom:"15px", color: "#034e9f", fontsize: "x-large",}}>Existing Data</h3>
                                                    <Table aria-label=" table" size="small" >
                                <TableHead>
                                <TableRow>
                                    <TableCell  align="left">Items</TableCell>
                                    
                                </TableRow>
                                </TableHead>
                                <TableBody>
          {
              this.state.InputData &&
              this.state.InputData.map(InputData=> {
                return(
                    <TableRow key={InputData.name} class="no-padding-spacing">
                        <TableCell class="no-padding-spacing">
                            <table class="item-table">
                                <TableRow>
                                    <TableCell class="no-padding-spacing">
                                    
                                          <div class="item-image"></div>
                                    </TableCell>
                                    <TableCell class="no-padding-spacing">
                                        <div class="item-content">
                                            <div class="item-title">Parle G</div>
                                            <div class="item-price">1.5 per kg</div>
                                            <div class="item-in-stock">In Stock</div>
                                            <div class="item-discount"> 0% Discount</div>
                                        </div>
                                            
                                    </TableCell>
                                    <TableCell class="no-padding-spacing">
                                    <Button color="primary" id="addtocart-btn" variant="outlined"
                                            style={{
                                            padding: "0px 10px 0px 0px !important",
                                            width: "100px !important",
                                            }} ><ExitToAppIcon></ExitToAppIcon>Add to Cart</Button>

                                    </TableCell>
                                </TableRow>
                                
                            </table>  
                        </TableCell>
                        <TableCell class="no-padding-spacing">
                            <table class="item-table">
                                <TableRow>
                                    <TableCell class="no-padding-spacing">
                                    
                                          <div class="item-image"></div>
                                    </TableCell>
                                    <TableCell class="no-padding-spacing">
                                        <div class="item-content">
                                            <div class="item-title">Parle G</div>
                                            <div class="item-price">1.5 per kg</div>
                                            <div class="item-in-stock">In Stock</div>
                                            <div class="item-discount"> 0% Discount</div>
                                        </div>
                                            
                                    </TableCell>
                                    <TableCell class="no-padding-spacing">
                                    <Button color="primary" id="addtocart-btn" variant="outlined"
                                            style={{
                                            padding: "0px 10px 0px 0px !important",
                                            width: "100px !important",
                                            }} ><ExitToAppIcon></ExitToAppIcon>Add to Cart</Button>

                                    </TableCell>
                                </TableRow>
                                
                            </table>  
                        </TableCell>

                    
                  </TableRow>
                )
              })
            
          }
          
        </TableBody>
      </Table>
                                        </td>
          </Paper>
        </Grid>
        
      </Grid>
      <Table>
                    <TableBody>
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
export default SubmitData