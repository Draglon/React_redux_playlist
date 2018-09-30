import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Router, Switch, Route, browserHistory } from 'react-router';
// import Routes from './js/routes';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';

import './styles/style.less';
import reducer from './js/redusers';
import About from './js/About';
import App from './js/App';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)) );
const history = syncHistoryWithStore(createBrowserHistory(), store);

history.listen(location => analyticsService.track(location.pathname));

const navigation = (
    <Provider store={store} >
      <Router history={history}>
          <Switch>
                <Route exact path="/" component={App} />
                <Route path="/about" component={About} />
                {/* <Route component={NotFound} /> */}
          </Switch>
      </Router>
    </Provider>
);

ReactDOM.render(
    navigation,
    document.getElementById("app")
);