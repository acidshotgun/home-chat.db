'use strict';

const btnSubmit = document.querySelector('.submit'),
      input = document.querySelector('.input'),
      theme = document.querySelector('.theme');


btnSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    postData();
    input.value = '';
});

function postData() {
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

