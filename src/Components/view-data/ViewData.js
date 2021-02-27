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

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';



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
// import DateFnsUtils from '@date-io/date-fns';
// import {
//     MuiPickersUtilsProvider,
//     KeyboardTimePicker,
//     KeyboardDatePicker,
//   } from '@material-ui/pickers';  
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(10),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

class ViewData extends Component {   
    
    constructor(props)
    {
        super(props);   
        this.fnFetchData = this.fnFetchData.bind(this);      
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
        db.collection("InputData").get()
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
      render()
      {

    return (

        <div>

            <div class="divMainCurve">
                <Table  class="TableParent" >
                    <TableBody>
                        <TableRow>
                            <TableCell >
                                <div class="DivMarginHeader">
                                    <ButtonAppBar></ButtonAppBar>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>

                            <table class="TableParent">
                                <tr>
                                    <td class="tdHalf">
                                        <div class='GridSection1'>    
                                <div class='GridSection'>
                                                    Existing Data
                                                    <Grid container  xs={18} >
                                                    <Grid item xs={2}>
                  <Paper >Date/Time</Paper>
                </Grid>
                <Grid item xs={1}>
                  <Paper >PlotNo</Paper>
                </Grid>                
                <Grid item xs={2}>
                  <Paper >SoilMoisture</Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper >SoilTemperature</Paper>
                </Grid>
                <Grid item xs={1}>
                  <Paper >SoilPH</Paper>
                </Grid>
                <Grid item xs={2}>
                  <Paper >SunLight</Paper>
                </Grid>
                <Grid item xs={1}>
                  <Paper >EnvTemp</Paper>
                </Grid>
                
              </Grid>
                                                    {
          this.state.InputData &&
          this.state.InputData.map(InputData=> {
            return(
              <Grid container  xs={18} >
                  <Grid item xs={2}>
                  <Paper >{InputData.posted_datetime}</Paper>
                </Grid>
                <Grid item xs={1}>
                  <Paper >{InputData.PlotNo}</Paper>
                </Grid>
                <Grid item xs={2}>
                  <Paper >{this.fnFetchSoilMoisture(InputData.SoilMoisture)}</Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper >{InputData.SoilTemperature}</Paper>
                </Grid>
                <Grid item xs={1}>
                  <Paper >{InputData.SoilpH}</Paper>
                </Grid>
                <Grid item xs={2}>
                  <Paper >{this.fnFetchSunLight(InputData.SunLight)}</Paper>
                </Grid>
                <Grid item xs={1}>
                  <Paper >{InputData.EnvTemp}</Paper>
                </Grid>
                
              </Grid>
            )
          })
        }
                                                </div>
                                            </div>

                                        </td>

                                </tr>
                            </table>
                        </TableCell>
                       </TableRow>
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
export default ViewData