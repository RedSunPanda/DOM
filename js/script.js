/* быбрать элемент на странице*/ 
//1.1 выбрать элемент по id
let header = document.getElementById('title');
console.log(header);
//выбрать  один элемент по селектору
const container =document.querySelector('.container');
console.log(container)
//выбрать несколько жлементов по селектору
const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);

//Работа с контентом 
console.log(header.textContent);//извлекаем только  текст из тегов
console.log(header.innerHTML);//извлекаем и текст и теги
console.log(header.outerText);//текст без тегов
console.log(header.innerText);//текст без тегов
console.log(header.outerHTML);//звлекаем все и текст и теги
//изменить текст (теги воспринемаются как текст)
header.textContent='Новый заголовок<i class="bi bi-piggy-bank"></i>';
//меняем html теги востринемаются как теги
header.innerHTML='Новый заголовок<i class="bi bi-piggy-bank"></i>';
//полностью перезаписываем содержимое
header.outerHTM='<h3>Новый заголовок<i class="bi bi-piggy-bank"></i></h3>';


//работа с классами (с атрибутом class)
const h2 = document.querySelector('h2');
//добавление классов
h2.classList.add('big');
h2.classList.add('pink');
//удаление5 классов
h2.classList.remove('big');
//проверить есть ли класс по элементам
console.log(h2.classList.contains('pink'))
//перелючатель классов
for (let elem of paragraphs){
  // elem.classList.toggle('text');
    if (elem.classList.contains('text')){
        elem.classList.remove('text')
    }
    else{
        elem.classList.add('text')
    }
}
//работа с стилями  style
const btn = document.querySelector('input[type=Submit]');
console.log(btn);
//добавление стилей
btn.style.color='red';
btn.style.background='pink';
btn.style.fontSize = '24px';
btn.style.border='2px solid red';

//работа с атрибутами 

let link = document.querySelector('li:nth-child(2) a')
console.log(link);
//считываем атрибут
console.log(link.getAttribute('href'));
//усьановить или изменить атрибут
link.setAttribute('href','https://icons.getbootstrap.com/');
link.setAttribute('target','_blank')
//удалить атрибут 
btn.removeAttribute('style');
//создание нового элемента(тега) потомка
const block = document.createElement('div');
block.classList.add('block');
block.innerHTML='новый блок';
container.append(block);
const image = document.createElement('img');
image.setAttribute('src','img/1.jpg');
image.alt = 'arara'//еще один спосо добавть атрибут
//container.append(image);//добавить элемент в конец
//container.pretend(image);//добавить элемент в ничало
//container.before(image);//добавть перед контейнера
container.after(image);//добавь после контейнера
//выбор дочерних элементов
//выбираем все параграфы на странице
const Lorems = document.querySelectorAll('p');
console.log('lorems');
const content = document.querySelector('.content');
const loremsInContent = content.querySelectorAll('p');
console.log(loremsInContent);
//выбор предков
let form =btn.closest('form');
form.style.border ='2px dotted orange';
//обработка событи (клик по кнопке)
btn.addEventListener('click',function(event){
    event.preventDefault();//отменяем поведение по умолчанию - обновление страницы
    console.log('click');
    const body = document.querySelector('body');
    body.style.background = 'darkred';
    body.style.color = 'white';
    const pass = document/querySelector('input[type=password]').value;
    console.log(pass);


});
