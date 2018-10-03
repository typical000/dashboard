/* global document */

import React from 'react';
import {render} from 'react-dom';
import App from './containers/App';

/**
 * Maybe, if someone add SSR to this app we can
 * add 'hydration' of DOM and other 'initialization' stuff
 */
render(<App />, document.getElementById('app'));
