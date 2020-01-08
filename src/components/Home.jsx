import React, { Component } from 'react';
import '../stylesheets/Home.scss';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import img from '../image2.png';

export default class Home extends Component {

    render() {
        const classes = makeStyles(theme => ({
            root: {
                flexGrow: 1,
            },
            menuButton: {
                marginRight: theme.spacing(1),
            },
            title: {
                flexGrow: 1,
            },
            paper: {
                padding: theme.spacing(2),
                textAlign: 'center',
                color: theme.palette.text.secondary,
            },
            paper1: {
                padding: theme.spacing(2),
                margin: 'auto',
                maxWidth: 500,
            },
            content: {
                justifyContent: 'center'
            }
        }));
        return (
            <>
                <Container className="container1">
                    <Paper>
                        <Grid container justify={'center'}>
                            <Grid item xs={12} >
                                <h1 className="header1">Make Tough credit calls accurately and effortlessly </h1>
                                <h6 className="subheader">Identify responsible borrowers from accurate banking transaction analysis</h6>
                                <h6 className="subheader1">Sign up now to analyse  <span>25 statements for free </span></h6>
                                <Grid container justify={'center'}>
                                    <TextField id="outlined-basic" label="Enter your email" variant="outlined" />
                                    <Button variant="contained" color="primary" className="input-feild">Get Started</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>



                <Container className="container2">
                    <Grid container justify={'center'}>
                        <Grid item xs={12} sm={8} >
                            <div className="why">How does it works ?</div>
                            <img src={img} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <div className="steps">Step 1</div>
                            <div className="procedure">Upload unlimited pages in a statement</div>
                            <div className="sub-procedure">Choose your bank and upload your statement. There is no page limit for each statement</div>
                        </Grid>
                        <Grid item xs={6}>
                            <div className="steps">Step 2</div>
                            <div className="procedure">Analyse Upto date financial behaviour of the browser</div>
                            <div className="sub-procedure">Get a true picture of the finanlcial behaviour of the borrower with our algorithm</div>
                        </Grid>
                    </Grid>
                </Container>



                <Container className="pb-32">

                    <Grid container justify={'center'} >
                        <Grid item >
                        <div className="why">Pay only for what you use!</div>
                        <div className="why">Save a ton of money</div>
                            <Grid container className="list-item">
                                <Grid item xs={6}>
                                    <div>No Lock in contract term</div>
                                    <div>No Hidden Charges</div>
                                    <div>No Sign-up free</div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div>No hefty upfront or integration fee</div>
                                    <div>No annual maintainence contract/fee</div>
                                    <div></div>
                                </Grid>
                            </Grid>
                            <Grid container justify={'center'}>
                                <TextField id="outlined-basic" label="Enter your email" variant="outlined" />
                                <Button variant="contained" color="primary" className="input-feild">Get Started</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>



                <Container className="container2">

                    <Grid container justify={'center'}>
                        <Grid item >
                        <div className="why">Why Inkredo ?</div>
                        </Grid>
                    </Grid>

                </Container>
                <Container className="pb-32">
                <h6 className="subheader1">Sign up now to analyse  <span>25 statements for free </span></h6>
                    <Grid container justify={'center'}>
                        <TextField id="outlined-basic" label="Enter your email" variant="outlined" />
                        <Button variant="contained" color="primary" className="input-feild">Get Started</Button>
                    </Grid>
                </Container>
            </>
        )
    }
}