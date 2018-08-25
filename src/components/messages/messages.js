import {Component} from '../component';
import './messages.scss';
import template from './messages.pug';

export class Messages extends Component {
	static get bemName() {
		return 'messages';
	}

	get template() {
		return template;
	}
}
