import * as React from 'react';
import * as ReactDOM from 'react-dom';

import 'customui/core/ui.css';

import './index.scss';

import { App } from './components/App/App';

const ROOT: HTMLElement = document.getElementById('root');

ReactDOM.render(<App />, ROOT);
