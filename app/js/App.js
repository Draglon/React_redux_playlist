import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTracks } from './actions/tracks';

class App extends Component {
    addTrack() {
        this.props.onAddTrack(this.trackInput.value);
        this.trackInput.value = '';
    }

    findTrack() {
        console.log('findTrack');
        this.props.onFindTrack(this.searchInput.value);
    }

    render() {
        console.log(this.props.tracks);
        console.log(this.props.playlists);
        return(
            <div>
                <div className="form">
                    <div className="clearfix">
                        <div className="form_field">
                            <input type="text" className="" ref={(input) => { this.trackInput = input }} />
                        </div>
                        <div className="form_btns">
                            <button className="" onClick={this.addTrack.bind(this)}>Add Track</button>
                        </div>
                    </div>
                    <div className="clearfix">
                        <div className="form_field">
                            <input type="text" className="" ref={(input) => { this.searchInput = input }} />
                        </div>
                        <div className="form_btns">
                            <button className="" onClick={this.findTrack.bind(this)}>Find track</button>
                        </div>
                    </div>
                    <div className="clearfix">
                        <button onClick={this.props.onGetTracks}>Get tracks</button>
                    </div>
                </div>

                <ul className="list">
                    {this.props.tracks.map( (track, index) => 
                        <li className="" key={index}>{track.name}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({
        tracks: state.tracks.filter(track => track.name.includes(state.filterTracks)),
        playlists: state.playlists
    }),
    dispatch => ({
        onAddTrack: (name) => {
            const payload = {
                id: Date.now().toString(),
                name
            };
            dispatch({type: 'ADD_TRACK', payload });
        },
        onFindTrack: (name) => {
            dispatch({type: 'FIND_TRACK', payload: name});
        },
        onGetTracks: () => {
            dispatch(getTracks());
        }
    })
)(App);