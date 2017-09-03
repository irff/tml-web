import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import App from '@/components/App';
import './style';

render(<App />, document.getElementById('app'));
