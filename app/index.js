// import './styles/style.less';
// var ReactDOM = require('react-dom');
// var React = require('react');
// var MainComponent = require('./js/Main.js');
 
// ReactDOM.render(<MainComponent />, document.getElementById("app"))

import { createStore } from "redux";

function playlist(state = [], action) {
    if(action.type === 'ADD_TRACK') {
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}

const store = createStore(playlist);

const addTrackBtn = document.querySelectorAll('.addTrack')[0];
const trackInput = document.querySelectorAll('.trackInput')[0];
const list = document.querySelectorAll('.list')[0];

store.subscribe(() => {
    console.log('subscribe', store.getState());
    list.innerHTML = '';
    trackInput.value = '';
    store.getState().forEach(track => {
        const li = document.createElement('li');
        li.textContent = track;
        list.appendChild(li);
    });
});

addTrackBtn.addEventListener('click', () => {
    const trackName = trackInput.value;
    store.dispatch({ type: 'ADD_TRACK', payload: trackName });
});
