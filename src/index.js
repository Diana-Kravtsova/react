import ReactDOM from 'react-dom/client';
import Provider from './store/';
import './index.css';
import App from './App';
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider>
        <App />
    </Provider>
);
