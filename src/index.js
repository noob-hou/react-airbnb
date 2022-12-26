import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/APP';

import { HashRouter, } from "react-router-dom"

import { Provider } from "react-redux"
import store from './store';

import 'normalize.css'
import '@/assets/css/index.css'
import 'antd/dist/reset.css';
//主题颜色的使用
import { ThemeProvider } from 'styled-components'
import theme from './assets/theme';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    <Suspense fallback='loading'>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Suspense>
  </Provider>

);

