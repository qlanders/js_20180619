import { View } from '../view';
import template from './login.pug';
import { getByElement } from '../../components';

export class LoginView extends View {
	get template() {
		return template;
	}

	onLogin() {
		console.log(this.passward.value);
	}

	onRenderComplete() {
		this.passward = getByElement(this.node.querySelector('[name=password]'));
		this.login = getByElement(this.node.querySelector('[name=login]'));

		this.node.addEventListener('submit', event => {
			event.preventDefault();
			this.onLogin();
		});
	}
}
