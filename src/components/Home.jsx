import React, { Component } from 'react';
import '../stylesheets/Home.scss';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

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
                            <Grid item xs={12} sm={8} >
                                <Typography align={'center'} component="h1" variant="h4">Make Tough credit calls accurately and effortlessly </Typography>
                                <Typography align={'center'} variant="subtitle1" gutterBottom gutterBottom>Identify responsible borrowers from accurate banking transaction analysis</Typography>
                                <Typography align={'center'} component="h6" variant="subtitle1" gutterBottom>Sign up now to analyse  25 statements for free</Typography>
                                <Grid container justify={'center'}>
                                    <TextField id="outlined-basic" label="Enter your email" variant="outlined" />
                                    <Button variant="contained" color="primary">Get Started</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>



                <Container>
                    <Paper>
                        <Grid container justify={'center'}>
                            <Grid item xs={12} sm={8} >
                                <Typography align={'center'} component="h1" variant="h4">How does it works</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <Typography align={'left'} component="h6" variant="subtitle1" gutterBottom>Step 1</Typography>
                                <Typography align={'left'} component="h4" variant="h4" gutterBottom>Upload unlimited pages in a statement</Typography>
                                <Typography align={'left'} component="h6" variant="subtitle" gutterBottom>Choose your bank and upload your statement. There is no page limit for each statement</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography align={'left'} component="h6" variant="subtitle1" gutterBottom>Step 2</Typography>
                                <Typography align={'left'} component="h4" variant="h4" gutterBottom>Analyse Upto date financial behaviour of the browser</Typography>
                                <Typography align={'left'} component="h6" variant="subtitle" gutterBottom>Get a true picture of the finanlcial behaviour of the borrower with our algorithm</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>



                <Container>
                    <Paper>
                        <Grid container justify={'center'}>
                            <Grid item >
                                <Typography component="h1" variant="h4" gutterBottom>Pay only for what you use! Save a ton of money</Typography>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography align={'left'} component="h6" variant="subtitle" gutterBottom>No Lock in contract term</Typography>
                                        <Typography align={'left'} component="h6" variant="subtitle" gutterBottom>No Hidden Charges</Typography>
                                        <Typography align={'left'} component="h6" variant="subtitle" gutterBottom>No Sign-up free</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography align={'left'} component="h6" variant="subtitle" gutterBottom>No hefty upfront or integration fee</Typography>
                                        <Typography align={'left'} component="h6" variant="subtitle" gutterBottom>No annual maintainence contract/fee</Typography>
                                        <Typography align={'left'} component="h6" variant="subtitle" gutterBottom></Typography>
                                    </Grid>
                                </Grid>
                                <Grid container justify={'center'}>
                                    <TextField id="outlined-basic" label="Enter your email" variant="outlined" />
                                    <Button variant="contained" color="primary">Get Started</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>



                <Container>
                    <Paper>
                        <Grid container justify={'center'}>
                            <Grid item >
                                <Typography align={'center'} component="h1" variant="h4" gutterBottom >Why Inkredo</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>
                <Container>
                    <Grid container justify={'center'}>
                        <TextField id="outlined-basic" label="Enter your email" variant="outlined" />
                        <Button variant="contained" color="primary">Get Started</Button>
                    </Grid>
                </Container>
            </>
        )
    }
}