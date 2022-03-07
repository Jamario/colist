import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Routes from './routes';

import './styles.css';

var mountNode = document.getElementById('app');
ReactDOM.render(<Routes />, mountNode);
