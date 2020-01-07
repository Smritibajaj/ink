import React, { Component } from 'react';
import Logo from '../logo.svg';
import '../stylesheets/Header.scss';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import '../stylesheets/modules/fonts.scss';


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: 'tab1',
    }
  }
  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };

  render() {
    const classes = makeStyles(theme => ({
      root: {
        flexGrow: 1,
        backgroundColor: 'white',
        color: '#2A59FF'
      },
      colored: {
        background: 'red[500]'
      }
    }));

    return (
      <div className="Headers">
        <AppBar className="Header classes" position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton}>
              <img className="App-logo" src={Logo} />
              <Typography variant="h6" className={'title'}>
                Inkredo
          </Typography>
            </IconButton>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              fullWidth={false}
              className="Tab"
            >
              <Tab  label="HOME" />
              <Tab  label="API" />
              <Tab  label="CAREERS" />
              <Tab  label="BLOG" />
              <Tab  label="SECURITY" />
            </Tabs>
            <Button className="App-button">Signup</Button>
            <Button className="App-button">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }

}