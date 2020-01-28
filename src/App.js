import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Col, Row } from 'react-flexbox-grid';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedConatiner from './containers/ForecastExtendedConatiner';

import './App.css';

const cities = [
  "Buenos Aires,ar",
  "Washington dc,us",
  "Bogota,col",
  "Ciudad de México,mx",
  "Madrid,es",
  "Lima,pe",
];

class App extends Component{
  
  render() {
    
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='inherit' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationListContainer 
              cities={cities} />
          </Col>
  
          <Col xs={12} md={6}>
            <Paper elevation={4}>
            <div className="details">
              {
                  <ForecastExtendedConatiner />
              }
            </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }

}

export default App;
