import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InfiniteScroll from 'react-infinite-scroller';
import qwest from 'qwest';
import { Row, Col } from 'react-bootstrap';

const imageList = [];
const api = {
    baseUrl: 'https://api.soundcloud.com',
    client_id: 'caf73ef1e709f839664ab82bef40fa96'
};

class Infinite extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tracks: [],
            hasMoreItems: true,
            nextHref: null
        };
    }

    loadItems(page) {
        var self = this;
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


        var tracks = self.state.tracks;
        tracks.push(rows);
        tracks.push(rows);
        self.setState({
            tracks: tracks,
            nextHref: ''
        });
    }

    render() {
        const loader = <div className="loader">Loading ...</div>;

        var items = [];
        if(this.props.name){}

        this.state.tracks.map((track, i) => {
            var content = (
                <div>
                  {track.map(function(row, i){
                    return (
                      <Col xs={6} md={4} key={i} className="img_box">
                        <a href="/p/{i}">
                            <img src={row} className="img" />
                        </a>
                      </Col>
                    )
                  })}
                </div>
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
            <Row className="show-grid img_row">
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadItems.bind(this)}
                    hasMore={this.state.hasMoreItems}
                    loader={loader}>
                    <div className="tracks">
                        {items}
                    </div>
                </InfiniteScroll>
            </Row>
        );
    }
};

export default Infinite;
