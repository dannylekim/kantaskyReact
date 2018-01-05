import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginForm from './views/loginForm/loginForm';
import SignupForm from './views/signUpForm/signUpForm';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SignupForm />, document.getElementById("root"))
registerServiceWorker();
