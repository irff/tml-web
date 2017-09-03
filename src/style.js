import { injectGlobal } from 'styled-components';
import theme from './common/theme';

/* eslint-disable no-unused-expressions */
injectGlobal`
  body {
    font-size: 16px;
    background: ${theme.white};
    color: ${theme.black};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    min-height: 100vh;
  }
`;
/* eslint-enable */
