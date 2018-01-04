import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginForm from './views/loginForm/loginForm';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LoginForm />, document.getElementById("root"))
registerServiceWorker();
