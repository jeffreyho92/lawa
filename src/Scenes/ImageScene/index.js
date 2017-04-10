import React, { Component } from 'react';
import NavBar from '../../Components/NavBar';
import FooterBar from '../../Components/FooterBar';
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';
import img4 from '../../../public/img/img4.jpeg';
import './ImageScene.css';

class ImageScene extends Component {
  render() {
    return (
      <div>
        <NavBar active=""/>
        <Grid>
          <Row className="imageContent" >
            <Row className="equal">
                <Col xs={6} md={8} className="leftBox">
                    <img src={'https://scontent-kut2-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/16584974_1458979630788510_3806227282167595008_n.jpg'}
                        className="img" />
                </Col>
                <Col xs={6} md={4} className="rightBox">
                    <Row style={{display: 'flex', alignItems: 'center'}}>
                        <Col md={8}>
                            <Image src={img4} style={{width: 50, height: 50}} circle/>
                            <span className="username">Alkarus</span>
                        </Col>
                        <Col md={4}>
                            <Button bsStyle="success" bsSize="sm" className="pull-right">follow</Button>
                        </Col>
                    </Row>
                    <hr/>
                    <Row className="likesBox">
                        <Col md={10}>
                            2,130 likes
                        </Col>
                        <Col md={2} className="pull-right">
                            2w
                        </Col>
                    </Row>
                    <Row className="commentsBox">
                        <Col md={12}>
                            <ul className="list-unstyled">
                                <li>
                                    <a className="name">1</a> &emsp;
                                    <span>Abc</span>
                                </li>
                                <li>
                                    <a className="name">2</a> &emsp;
                                    <span>Def</span>
                                </li>
                                <li>
                                    <a className="name">3</a> &emsp;
                                    <span>Ghi</span>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className="inputBox">
                        <Col md={12}>
                            <hr/>
                            <input type="text" id="input_comment" placeholder="add a comment" />
                        </Col>
                    </Row>
                </Col>
            </Row>
          </Row>
        </Grid>
        <FooterBar />
      </div>
    );
  }
}

export default ImageScene;
