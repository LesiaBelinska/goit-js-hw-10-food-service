import './styles.css';
import dishes from './menu.json';
import itemsTemplate from './template.hbs';

const menuRef = document.querySelector('.js-menu');

const menuMarkup = itemsTemplate(dishes);
menuRef.insertAdjacentHTML('beforeend', menuMarkup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};