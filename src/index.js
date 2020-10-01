import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import './index.css';

// Render our app
ReactDOM.render(<App />, document.getElementById('root'));

// HMR
if(process.env.NODE_ENV === 'development') {
    module.hot.accept();
}