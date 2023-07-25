import './style.css';
import { Navigation } from './modules/nav.js';
import logoImage from './imgs/b-logo.png';
import burgerImage from './imgs/burger.png';

const logo = document.getElementById('logo');
const burger = document.getElementById('burger');
console.log(logoImage);

logo.firstChild.src = logoImage;
burger.firstChild.src = burgerImage;

const nav = new Navigation();


nav.showLogin();
nav.addRegLinkListener();
nav.addLoginSubmitListener();
nav.addBurgerMenuListener();