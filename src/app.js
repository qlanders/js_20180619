import template from './app.pug';
import './static/styles/styles.scss';
import { Router } from './modules/router';

import { LoginView } from './views/login/login';
import { SignupView } from './views/signup/signup';

window.addEventListener('DOMContentLoaded', function () {
	document.body.innerHTML = template();
	let router = new Router();
	const loginView = new LoginView(document.querySelector('.login-view'));
	const signupView = new SignupView(document.querySelector('.signup-view'));

	router
		.register('login', loginView)
		.register('signup', signupView);

	router.start();
});