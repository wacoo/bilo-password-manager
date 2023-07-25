const register = document.querySelector('.register');
const login = document.querySelector('.login');
const userHome = document.querySelector('.user_home');
const note_register = document.querySelector('.notes_reg')
const linkToRegister = document.getElementById('link_register');
const frmRegister = document.getElementById('frm_register');
const frmLogin = document.getElementById('frm_login');
const burger = document.getElementById('burger');
const modalSideMenu = document.getElementById('side_menu');

export class Navigation {
    showLogin() {
        login.style.display = 'flex';
        register.style.display = 'none';
        userHome.style.display = 'none';
        note_register.style.display = 'none';
    }
    
    showRegister() {
        login.style.display = 'none';
        register.style.display = 'flex';
        userHome.style.display = 'none';
        note_register.style.display = 'none';
    }
    
    showHome() {
        login.style.display = 'none';
        register.style.display = 'none';
        userHome.style.display = 'flex';
        note_register.style.display = 'none';
    }
    
    showNoteRegister() {
        login.style.display = 'none';
        register.style.display = 'none';
        userHome.style.display = 'none';
        note_register.style.display = 'flex';
    }

    addRegLinkListener = () => {
        linkToRegister.addEventListener('click', (event) => {
            event.preventDefault();
            this.showRegister();
        });
    }

    addLoginSubmitListener = () => {
        frmLogin.addEventListener('submit', (event) => {
            event.preventDefault();
            this.showHome();
        });
    }

    addBurgerMenuListener = () => {
        burger.addEventListener('click', (event) => {
            event.preventDefault();
            modalSideMenu.show();
        });
    }
}
