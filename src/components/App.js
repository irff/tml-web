import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { ThemeProvider } from 'styled-components';
import configureStore from '@/redux/configureStore';
import routes from '@/routes';
import theme from '@/common/theme';
import history from '@/common/routing';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          {routes}
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
