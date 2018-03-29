import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import { ThemeProvider, injectGlobal } from 'styled-components';

injectGlobal `
  @font-face{
  }

  html * {

  }
`

const theme = {
  fg: 'white',
  bg: 'black',
  nav: 'purple',
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root'));
registerServiceWorker();
