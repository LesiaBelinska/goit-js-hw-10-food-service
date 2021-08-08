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

const themeSwitchItem = document.querySelector('#theme-switch-toggle');
themeSwitchItem.addEventListener('change', onThemeSwitchToggle);
const savedTheme = localStorage.getItem('pageTheme');
const bodyEl = document.querySelector('body');

if (savedTheme) {
  bodyEl.classList.add(savedTheme);
  if (savedTheme === Theme.DARK) {
    themeSwitchItem.checked = true;
  }
}

function onThemeSwitchToggle(evt) {
if (evt.currentTarget.checked) {
    bodyEl.classList.remove(Theme.LIGHT);
    bodyEl.classList.add(Theme.DARK);
    localStorage.setItem('pageTheme', Theme.DARK);
    
} else {
    bodyEl.classList.remove(Theme.DARK);
    bodyEl.classList.add(Theme.LIGHT);
    localStorage.setItem('pageTheme', Theme.LIGHT);
}
}