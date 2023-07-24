import './style.css';
import { Navigation } from './modules/nav.js';
import logoImage from './imgs/b_logo.png';

const logo = document.querySelector('.logo');

logo.src = logoImage;
const nav = new Navigation();


nav.showLogin();