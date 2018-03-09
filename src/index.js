import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'

import './index.css';
import Route from './route';
import registerServiceWorker from './registerServiceWorker';

class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Route />
        </ConnectedRouter>
      </Provider>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
