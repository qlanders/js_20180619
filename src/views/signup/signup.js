import { View } from '../view';
import template from './signup.pug';
import { getByElement } from '../../components';

export class SignupView extends View {
	get template() {
		return template;
	}

	onSignup() {
		if (this.passward.value !== this.passwardRepeat.value) {
			alert('Wrong password repeating');
			return;
		}

		console.log(this.passward.value);
	}

	onRenderComplete() {
		this.passward = getByElement(this.node.querySelector('[name=password]'));
		this.passwardRepeat = getByElement(this.node.querySelector('[name=password-repeat]'));
		this.login = getByElement(this.node.querySelector('[name=login]'));

		this.node.addEventListener('submit', event => {
			event.preventDefault();
			this.onSignup();
		});
	}
}
