import { injectGlobal } from 'styled-components';
import WebFont from 'webfontloader';
import theme from './common/theme';

WebFont.load({
  custom: {
    families: ['Cerebri'],
  },
});

/* eslint-disable no-unused-expressions */
injectGlobal`
  @font-face {
    font-family: Cerebri;
    src: url('/fonts/CerebriSans-Regular.woff') format('woff');
  }

  @font-face {
    font-family: Cerebri;
    src: url('/fonts/CerebriSans-ExtraBold.woff') format('woff');
    font-weight: bold;
  }

  html {
    font-size: 10px;
  }

  body {
    font-family: Cerebri;
    font-size: 1.6rem;
    background: ${theme.white};
    color: ${theme.black};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    min-height: 100vh;
  }
`;
/* eslint-enable */
