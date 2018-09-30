import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import tracks from './tracks';
import playlists from './playlists';
import filterTracks from './filterTracks';

const App = combineReducers({
  routing,
  tracks,
  playlists,
  filterTracks
});

 export default App;