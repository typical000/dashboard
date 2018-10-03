import React from 'react';
import {ThemeProvider, JssProvider} from 'react-jss';
import GraphQLProvider from './GraphQLProvider';
import NormalizeCss from '../utils/NormalizeCss';
import theme from '../theme';
import Dashboard from './Dashboard';

/**
 * Main application setup. All providers and other global
 * stuff goes here.
 */
const App = () => (
  <GraphQLProvider>
    <ThemeProvider theme={theme}>
      <JssProvider>
        <NormalizeCss>
          <Dashboard />
        </NormalizeCss>
      </JssProvider>
    </ThemeProvider>
  </GraphQLProvider>
);

export default App;
