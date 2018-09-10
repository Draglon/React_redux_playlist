import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
    addTrack() {
        this.props.onAddTrack(this.trackInput.value);
        this.trackInput.value = '';
    }

    render() {
        console.log(this.props.tracks);
        console.log(this.props.playlists);
        return(
            <div>
                <div className="form">
                    <div className="form_field">
                        <input type="text" className="" ref={(input) => { this.trackInput = input }}/>
                    </div>
                    <div className="form_btns">
                        <button className="" onClick={this.addTrack.bind(this)}>Add Track</button>
                    </div>
                </div>

                <ul className="list">
                    {this.props.tracks.map( (track, index) => 
                        <li className="" key={index}>{track}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({
        tracks: state.tracks,
        playlists: state.playlists
    }),
    dispatch => ({
        onAddTrack: (trackName) => {
            dispatch({type: 'ADD_TRACK', payload: trackName })
        }
    })
)(App);