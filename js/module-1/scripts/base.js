'use strict';

const adminLogin = 'admin';
/* const adminPassword = 'm4ng0h4ckz'; */
const adminPassword = '1';
const cancel = null;

let login = prompt (' Введите логин:');

/* const messages */

const badLoginMessage = 'Доступ запрещен, неверный логин!';
const badPassMessage = 'Доступ запрещен, неверный пароль!';
const welcomeMessage = 'Добро пожаловать, ' + login + '!';
const cancelMessage = 'Отменено пользователем!';

if (login === cancel ) {
    alert (cancelMessage);
  } else 
    if (login === adminLogin) { 
      const pass = prompt (' Введите пароль:'); /* ввод пароля только если логин совпал */
      if (pass === adminPassword) {
        alert (welcomeMessage);
      } else {
        alert (badPassMessage);
      }
    } else {
      alert (badLoginMessage);
    }
  ;