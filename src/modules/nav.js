const register = document.querySelector('.register');
const login = document.querySelector('.login');
const userHome = document.querySelector('.user_home');
const note_register = document.querySelector('.notes_reg')
const linkToRegister = document.getElementById('link_register');

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
            //this.showRegister();
        });
    }
}
