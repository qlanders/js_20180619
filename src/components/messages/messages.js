import {Component} from '../component';
import style from './messages.scss';
import template from './message.pug';

export class Messages extends Component {
  static get bemName() {
    return 'messages'
  }


  // TODO эту функцию нужно перенести в Component
  render() {
    // Создаем родительский элемент, который нужен только
    // для преобразование строки в Element
    let parent = document.createElement('div');

    // преобразуем
    parent.innerHTML = template(this.data);

    // получаем наш элемент из parent
    let el = parent.firstElementChild;

    // заменяем корневой узел, но только что отрендереный
    this.node.replaceWith(el);

    // меняем ссылку, так чтобы находить в Map
    this.node = el;

  }

  addMessage(message) {
    this.data.messages.push(message);
    this.render();
  }

}
