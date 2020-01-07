import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
export default class Footer extends Component {
    render() {
        const classes = makeStyles(theme => ({
            root: {
                flexGrow: 1,
            }
        }))
        return (
            <AppBar color="primary" position="static">
                    <Grid container>
                        <Grid item xs={6}>
                            <Grid container spacing={3}>
                                <Grid item xs={6}>Contact us at</Grid>
                                <Grid item xs={6}>Email us at</Grid>
                            </Grid>
                            <Grid container spacing={3}>
                                <Grid item xs={6}>+91-9953438126</Grid>
                                <Grid item xs={6}>simmybajaj1603@gmail.com</Grid>
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
            </AppBar>
        )

    }
}