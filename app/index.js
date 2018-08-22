import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './js/App';
import './styles/style.less';

const initialState = {
    tracks: [
        "Smells like spirit",
        "Enter Sandman"
    ],
    playlists: [
        'My home playlist',
        'My work playlist'
    ]
}

function playlist(state = initialState, action) {
    if(action.type === 'ADD_TRACK') {
        return {
            ...state,
            tracks: [...state.tracks, action.payload]
        };
    }
    return state;
}

const store = createStore(playlist);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);