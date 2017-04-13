import React, { Component } from 'react';
import logo from './logo.svg';
import './DiscoverListScene.css';
import { Grid, Jumbotron, Button, Row, Col } from 'react-bootstrap';

import NavBar from '../../Components/NavBar';
import FooterBar from '../../Components/FooterBar';

class DiscoverListScene extends Component {
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
            <Row className="cat_list">
                <Col xs={12} md={12} className="cat_list_col">
                    <div className="cat_list_box cat_local">
                        <a href="/d/local"><span>Local</span></a>
                    </div>
                </Col>
                <Col xs={12} md={12} className="cat_list_col">
                    <div className="cat_list_box cat_asia">
                        <a href="/d/asia"><span>Asia</span></a>
                    </div>
                </Col>
                <Col xs={12} md={12} className="cat_list_col">
                    <div className="cat_list_box cat_global">
                        <a href="/d/global"><span>Global</span></a>
                    </div>
                </Col>
                <Col xs={12} md={12} className="cat_list_col">
                    <div className="cat_list_box cat_girls">
                        <a href="/d/girls"><span>Girls</span></a>
                    </div>
                </Col>
            </Row>
        <FooterBar />
      </div>
    );
  }
}

export default DiscoverListScene;
