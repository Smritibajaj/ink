import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import '../stylesheets/Home.scss';
import logo from '../Vector-white.png'
export default class Footer extends Component {
    render() {
        const classes = makeStyles(theme => ({
            root: {
                flexGrow: 1,
            }
        }))
        return (
            <div className="background-600">
                    <Grid container className="sub-procedure pb-32">
                        <Grid item xs={6}>
                            <Grid container spacing={3}>
                                <Grid item xs={6} className="sub-procedure">Contact us at</Grid>
                                <Grid item xs={6}>Email us at</Grid>
                            </Grid>
                            <Grid container spacing={3} className="highlight">
                                <Grid item xs={6}>+91-9873420580</Grid>
                                <Grid item xs={6}>tanmay@inkredo.in</Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container spacing={3}>
                                <Grid item xs={4}>Home</Grid>
                                <Grid item xs={4}>Careers</Grid>
                                <Grid item xs={4}>Blog</Grid>
                            </Grid>
                            <Grid container spacing={3}>
                                <Grid item xs={4}>API</Grid>
                                <Grid item xs={4}>Legal</Grid>
                                <Grid item xs={4}>Contact Us</Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container justify={'center'} className="footer-text">
                    <img src={logo} />
                    <div >Inkredo</div>
                    </Grid>
                    <Grid container justify={'center'} className="footer-text">
                    <div className="sub-procedure">© 2019 Zodhana Mobile Solutions Pvt. Ltd.</div>
                    </Grid>
            </div>
        )

    }
}