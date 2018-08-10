import template from "./app.pug";
import {wrap, getByElement} from './components'


window.addEventListener('DOMContentLoaded', function () {
  document.body.innerHTML = template();
  wrap(document.body);

  console.log(document.body.querySelector('.messages'));

  let messages = getByElement(document.body.querySelector('.messages'));

  console.log(messages);
});