import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import styled, { ThemeProvider } from 'styled-components';
import configureStore from '@/redux/configureStore';
import routes from '@/routes';
import theme from '@/common/theme';
import history from '@/common/routing';
import TabBar from './TabBar';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          <Wrapper>
            <Content>
              {routes}
            </Content>
            <TabBar />
          </Wrapper>
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${props => props.theme.color.canvas};
`;

const Content = styled.div`
  flex: 1;
  max-height: 100%;
  overflow: auto;
`;
