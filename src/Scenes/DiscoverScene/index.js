import React, { Component } from 'react';
import logo from './logo.svg';
import './DiscoverScene.css';
import { Grid, Jumbotron, Button, Row, Col } from 'react-bootstrap';

import NavBar from '../../Components/NavBar'
import Infinite from '../../Components/Infinite'

var rows = ['https://scontent-kut2-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/16584974_1458979630788510_3806227282167595008_n.jpg',
            'https://scontent-kut2-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c180.0.720.720/16229419_1847023965537374_6499156194618245120_n.jpg',
            'https://scontent-kut2-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/16229149_1843308122554535_7112231577479806976_n.jpg'];

class DiscoverScene extends Component {
  render() {
    var name = this.props.match.params.name;
    var img_class = null;
    switch (name) {
        case 'local':
            img_class = 'img_cat_local';
            break;
        case 'asia':
            img_class = 'img_cat_asia';
            break;
        case 'global':
            img_class = 'img_cat_global';
            break;
        case 'girls':
            img_class = 'img_cat_girls';
            break;
        default:
            img_class = null;
    }
    return (
      <div>
        <NavBar active="discover"/>
          <div className="title">
            <div className={"title_img "+img_class}>
                <em>{name.toUpperCase()}</em>
            </div>
            <div className="title_spacing">&emsp;</div>
          </div>
        <Grid>
          <Infinite name={name} />
        </Grid>
      </div>
    );
  }
}

export default DiscoverScene;
