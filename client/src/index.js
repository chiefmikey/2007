import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

import App from './components/App.jsx';

const history = createBrowserHistory();

ReactDOM.render(<App history={history} />, document.getElementById('app'));
