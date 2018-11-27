'use strict';

const adminLogin = 'admin';
/* const adminPassword = 'm4ng0h4ckz'; */
const adminPassword = '1';

const login = prompt (' Введите логин:');


const badLoginMessage = 'Доступ запрещен, неверный логин!';
const badPassMessage = 'Доступ запрещен, неверный пароль!';
const welcomeMessage = 'Добро пожаловать, ' + login + '!';

if (login === adminLogin) { 
  const pass = prompt (' Введите пароль:'); /* ввод пароля только если логин совпал */
  if (pass === adminPassword) {
    alert (welcomeMessage);
  } else {
    alert (badPassMessage);
  }
} else {
  alert (badLoginMessage);
};