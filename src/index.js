import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import { Provider } from 'react-redux';
import App from './components/App';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const to = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
,to);