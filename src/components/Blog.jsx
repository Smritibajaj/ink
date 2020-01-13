import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import '../stylesheets/Home.scss';
import Avatar from '@material-ui/core/Avatar';
import Rect from '../Rectangle.png';
export default class Blog extends Component {
    render() {
        return (
            <Container className="container2">
                <Grid container justify={'center'}>
                    <Grid item xs={12} sm={8} >
                        <div className="procedure" style={{textAlign: 'center'}}>We write ocassionally and share our knowledge.</div>
                    </Grid>
                </Grid>
                <Grid container spacing={5}>
                    <Grid item xs={6}>
                        <img src={Rect} />
                        <div>Solving the conundrum of identifying lenders in bank statement</div>
                        <div>Rating agencies have been too charitable in rewarding ratings</div>
                        <Avatar>H</Avatar>
                        <span>Kumar Tanmay</span>
                        <span>21 Dec 2019 6 days Ago</span>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={Rect}/>
                        <div>Solving the conundrum of identifying lenders in bank statement</div>
                        <div>Rating agencies have been too charitable in rewarding ratings</div>
                        <Avatar>H</Avatar>
                        <span>Kumar Tanmay</span>
                        <span>21 Dec 2019 6 days Ago</span>
                    </Grid>
                </Grid>
            </Container>

        )
    }
}