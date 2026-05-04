
const paragraph = document.querySelector('p');
paragraph.textContent = 'Привет, мир! Меня зовут Арина.';
paragraph.style.backgroundColor = 'LightCyan'; 
paragraph.style.color = 'Navy';                
paragraph.style.border = '2px solid DarkTurquoise'; 

const email = document.getElementById('email');
email.value = 'mail@mail.ru';
email.disalbed = true;

const Checkbox = document.getElementById('remember');
Checkbox.checked = true;

const Btn = document.getElementById('btn');
Btn.textContent = 'Войти';

const link = document.createElement('a');
link.textContent = 'ссылка на сайт';
link.href = 'https://midis.ru/'; 
link.target = '_blank';
document.body.appendChild(link);