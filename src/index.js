import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createHashHistory } from 'history';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import Theme from "./theme";
import App from './Components/App';

const history = createHashHistory({ queryKey: false });

ReactDOM.render(
    <Router history={history}>
        <ThemeProvider theme={Theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </Router>
    , document.getElementById('root')
);


serviceWorker.unregister();