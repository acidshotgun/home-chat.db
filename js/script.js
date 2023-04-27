'use strict';

// const { default: axios } = require("axios");

const btnSubmit = document.querySelector('.submit'),
      form = document.querySelector('.form__selector'),
      input = document.querySelector('.input'),
      theme = document.querySelector('.theme');


btnSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    postData();
    input.value = '';
});

const postData = (event) => {
    axios.post('http://localhost:3000/posts', {
        theme: theme.value,
        description: input.value,
    })
    .then(response => console.log(response.data))
    .then(new Post(post, 'test', 'descr').render())
    .catch(() => {
        alert('ERROR');
    })
    .finaly(console.log('End'));
}

const post = document.querySelector('.post__container');

class Post {
    constructor(parentSelector, name, descr) {
        this.parentSelector = parentSelector;
        // this.img = img;
        this.name = name;
        this.descr = descr;
    }

    render() {
        const element = document.createElement('div');
        element.classList.add('post__item');
        
        element.innerHTML = `
                <div class="post__img">
                    <img class="post__img-pic" src="../img/cat.jpg" alt="alt">
                </div>
                <div class="post__content">
                    <div class="post__name">${this.name}</div>
                    <div class="post__descr">${this.descr}</div>
                </div>
            `;

        this.parentSelector.append(element);
    }
}

const cat = new Post(post, 'test', 'descr').render();




//! Ерунда
const dataList = document.querySelector('.data__list');
const loadBtn = document.querySelector('.data__load');
let listItem;
let listItemEmail;
let listItemName;

loadBtn.addEventListener('click', () => getUsersData());

function getUsersData() {
    if (!listItem) {
        axios.get('https://reqres.in/api/users?page=1')
        .then(request => request.data.data.forEach(item => {
            let { email, first_name } = item;
            // console.log(`Пользователь: ${first_name}, email - ${email}`);

            // Лушче классы сделать заранее
            listItem = document.createElement('div');
            listItem.classList.add('data__list-item');
            dataList.append(listItem);

            listItemEmail = document.createElement('div');
            listItemEmail.classList.add('data__list-email');
            listItem.append(listItemEmail);
            listItemEmail.innerText = email;

            listItemName = document.createElement('div');
            listItem.append(listItemName);
            listItemName.innerText = first_name;
        }))
    .catch(() => console.log('Произошла ошибка'))
    .finally(console.log('Процесс завершен'))
    }
}


// axios.post('https://reqres.in/api/users', {
//     name: 'Джамболат Касаев',
//     job: 'leader',
// })
// .then(request => console.log(request.data))
// .catch(() => console.log('Произошла ошибка'))


axios.get('https://randomuser.me/api/')
.then(data => console.log(data));