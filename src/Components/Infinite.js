import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InfiniteScroll from 'react-infinite-scroller';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import './Infinite.css';

const api = {
    baseUrl: 'https://api.soundcloud.com',
    client_id: 'caf73ef1e709f839664ab82bef40fa96'
};

class Infinite extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imageList: [],
            hasMoreItems: true,
            nextHref: null,
            currentPage: 1
        };
    }

    loadItems(page) {
        console.log("loadItems")
        var self = this;
        /*
        qwest.base = 'https://nodejs-jeffreyho92.c9users.io:8081/api'
        qwest.get('/users',{
                id: 'test'
            },{
                cache:true
            })
            .then(function(xhr, resp){
                if(resp) {
                    console.log(resp);
                    /*
                    var tracks = self.state.tracks;
                    resp.collection.map((track) => {
                        if(track.artwork_url == null) {
                            track.artwork_url = track.user.avatar_url;
                        }
    
                        tracks.push(track);
                    });
                    */
                    /*
                    if(resp.next_href) {
                        self.setState({
                            tracks: tracks,
                            nextHref: resp.next_href
                        });
                    } else {
                        self.setState({
                            hasMoreItems: false
                        });
                    }
                    *//*
                }
        })*/
        
        /*
        var url = api.baseUrl + '/users/8665091/favorites';
        if(this.state.nextHref) {
            url = this.state.nextHref;
        }

        qwest.get(url, {
                client_id: api.client_id,
                linked_partitioning: 1,
                page_size: 10
            }, {
                cache: true
            })
            .then(function(xhr, resp) {
                if(resp) {
                    var tracks = self.state.tracks;
                    resp.collection.map((track) => {
                        if(track.artwork_url == null) {
                            track.artwork_url = track.user.avatar_url;
                        }

                        tracks.push(track);
                    });

                    if(resp.next_href) {
                        self.setState({
                            tracks: tracks,
                            nextHref: resp.next_href
                        });
                    } else {
                        self.setState({
                            hasMoreItems: false
                        });
                    }
                }
            });
        */
        var rows = ['https://scontent-kut2-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/16584974_1458979630788510_3806227282167595008_n.jpg',
                    'https://scontent-kut2-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c180.0.720.720/16229419_1847023965537374_6499156194618245120_n.jpg',
                    'https://scontent-kut2-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/16229149_1843308122554535_7112231577479806976_n.jpg'];
        
        var currentPage = self.state.currentPage;
        var api_url = ''
        if(this.props.name){
            api_url = `https://lawa-api.herokuapp.com/api/images?page=${currentPage}&cat=${this.props.name}`
        }else{
            api_url = `https://lawa-api.herokuapp.com/api/images?page=${currentPage}`
        }
        
        axios.get(api_url)
            .then(res => {
                var result = [];
                res.data.map((data)=>{
                    var arr = [data.id, data.images.low_resolution.url]
                    result.push(arr)
                })
                var hasMoreItems = true;
                if(result.length < 3){
                    hasMoreItems = false;
                }
                var imageList = self.state.imageList;
                imageList.push(result);
                self.setState({
                    imageList: imageList,
                    hasMoreItems: hasMoreItems,
                    currentPage: ++currentPage
                });
            });
    }
    
    componentWillMount(){
        this.loadItems(1);
    }
    
    render() {
        const loader = <div className="loader" id="loader"></div>;
    	console.log("render")
        var items = [];

        this.state.imageList.map((track, i) => {
            var content = (
                <Row className="show-grid img_row">
                  {track.map(function(row, i){
                    return (
                      <Col xs={6} md={4} key={i} className="img_box">
                        <a href={"/p/"+row[0]}>
                            <img src={row[1]} className="img" />
                        </a>
                      </Col>
                    )
                  })}
                </Row>
            );
            items.push(
                /*
                <div className="track" key={i}>
                    <a href={track.permalink_url} target="_blank">
                        <img src={track.artwork_url} width="150" height="150" />
                        <p className="title">{track.title}</p>
                    </a>
                </div>
                */
                content
            );
        });

        return (
            <InfiniteScroll
                pageStart={0}
                loadMore={this.loadItems.bind(this)}
                hasMore={this.state.hasMoreItems}
                loader={loader}>
                <div className="imageList">
                    {items}
                </div>
            </InfiniteScroll>
        );
    }
};

export default Infinite;
