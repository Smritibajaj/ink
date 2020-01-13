import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import '../stylesheets/Home.scss';
import Avatar from '@material-ui/core/Avatar';
import Rect from '../Rectangle.png';
export default class Careers extends Component {
    render() {
        return (
            <Container>
                <Container className="container2">
                    <Grid container justify={'center'}>
                        <Grid item xs={8} sm={6} >
                            <div className="procedure" style={{ textAlign: 'center' }}>Solving the conundrum of identifying lenders in bank statement</div>
                            <p style={{ textAlign: 'center' }}>Bank transactions are a treasure trove of up-to-date information, yet it remains under-utilised because it is tedious to extract every bit of information from lengthy and text-heavy abbreviations and numbers. At Inkredo, our mission is to empower innovators to determine financial health in the easiest and most efficient manner.</p>
                        </Grid>
                    </Grid>
                </Container>
                <Container className="container2">
                    <div>Open Positions</div>

                </Container>
                <Container className="container2">
                    <div>Culture at Inkredo</div>
                    <Grid container justify={'center'}>
                    <Grid item xs={4} sm={4} >
                            <div  style={{ textAlign: 'center' }}>Remote Based</div>
                            <p style={{ textAlign: 'center' }}> We have a remote working culture, meaning our employees can work wherever they want around the world as long as the job gets done.</p>
                    </Grid>
                    <Grid item xs={4} sm={4} >
                            <div  style={{ textAlign: 'center' }}>tock options </div>
                            <p style={{ textAlign: 'center' }}>We're all working towards the same goal, so it's only fair that everyone is invested in the success of their work</p>
                    </Grid>
                    <Grid item xs={4} sm={4} >
                            <div  style={{ textAlign: 'center' }}>Flexible working hours</div>
                            <p style={{ textAlign: 'center' }}>We empower our team with personal autonomy on team projects. We have an unlimited vacation policy and flexible working hours. That means you have to be self-directed and self-motivated to succeed.</p>
                    </Grid>

                    </Grid>
                    <p>If that seems awesome and if you like the idea of building values with us -- Build trust, Question assumptions, and Validate direction -- you'll fit right in.</p>
                    <h4>We are always open for founders </h4>
                    <div>Our doors are always open for founders who have moved on. We understand that most of the founders are generalists and we won't evaluate you for a specialist position. We love who keep pushing against the slope, so lets talk if we can build Inkredo together.</div>
                    
                </Container>

            </Container>
        )
    }
}