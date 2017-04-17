import React, { Component } from 'react';
import logo from './logo.svg';
import img4 from '../../../public/img/img4.jpeg';
import img5 from '../../../public/img/img5.jpeg';
import './Home.css';
import { Grid, Jumbotron, Button, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

import NavBar from '../../Components/NavBar'
import Infinite from '../../Components/Infinite'
import FooterBar from '../../Components/FooterBar'

//var rows = [img4, img5, img4];
var rows = ['https://scontent-kut2-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/16584974_1458979630788510_3806227282167595008_n.jpg',
            'https://scontent-kut2-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c180.0.720.720/16229419_1847023965537374_6499156194618245120_n.jpg',
            'https://scontent-kut2-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/16229149_1843308122554535_7112231577479806976_n.jpg'];

class App extends Component {
  /*
    for (var i = 0; i < 9; i++) {
        rows.push(<img src={img4} className="img" />);
    }*/
  render() {
    return (
      <div>
        <NavBar active="home"/>
        <Jumbotron>
          <Grid>
          {/*
            <h1>Welcome to React</h1>
            <p>
              <Button
                bsStyle="success"
                bsSize="sm"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
                View React Bootstrap Docs
              </Button>

                <Button
                  bsStyle="primary"
                  bsSize="sm">
                  button1
                </Button>
                <Button
                  bsStyle="info"
                  bsSize="sm">
                  button1
                </Button>
                <Button bsStyle="danger">Danger</Button>
                <Button bsStyle="warning">warning</Button>
            </p>
            */}
            <Row>
                <Col md={12} className="title1">
                    <em>INSPIRATION</em>
                </Col>
            </Row>
            
            <Row className="cat_container">
                <Col xs={12} md={3} className="cat_col">
                    <div className="cat_box cat_local">
                        <a href="/d/local"><span>Local</span></a>
                    </div>
                </Col>
                <Col xs={12} md={3} className="cat_col">
                    <div className="cat_box cat_asia">
                        <a href="/d/asia"><span>Asia</span></a>
                    </div>
                </Col>
                <Col xs={12} md={3} className="cat_col">
                    <div className="cat_box cat_global">
                        <a href="/d/global"><span>Global</span></a>
                    </div>
                </Col>
                <Col xs={12} md={3} className="cat_col">
                    <div className="cat_box cat_girls">
                        <a href="/d/girls"><span>Girls</span></a>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col md={12} className="title2">
                    <em>Inspiration is the act or power of exercising an elevating.</em>
                </Col>
            </Row>
          </Grid>
        </Jumbotron>
        <Grid>
          <Infinite />
        </Grid>
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <FooterBar />
      </div>
    );
  }
}


/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
*/
export default App;
