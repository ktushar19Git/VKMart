import { colors } from '@material-ui/core'
import React,{Component} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { RadioButtonUncheckedSharp } from '@material-ui/icons';
import { Table } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import HomeBannerSection from '../banner-section/HomeBannerSection';
import Footer from '../Footer';
import ButtonAppBar from '../ButtonAppBar';
import Signup from '../register-page/Signup';
import SearchBar from '../searchbar/SearchBar'
import DigitalTransformation from '../banner-section/DigitalTransformation';
import Krushipurna from '../krushipurna/Krushipurna';

class CustomersPage extends Component {
    render()
    {
    return (

        <div  >

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
                        <TableRow>
                            <TableCell >
                                <div class="digi-section">
                                    <DigitalTransformation></DigitalTransformation>
                                </div>
                            </TableCell>
                        </TableRow>
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
export default CustomersPage