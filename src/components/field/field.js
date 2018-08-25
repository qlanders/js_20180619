import {Component} from '../component';
import './field.scss';
import template from './field.pug';

export class Field extends Component {
	static get bemName() {
		return 'field';
	}

	get template() {
		return template;
	}

	get value() {
		return this.node.value;
	}
}