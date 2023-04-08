'use strict';

const btnSubmit = document.querySelector('.submit'),
      input = document.querySelector('.input'),
      theme = document.querySelector('.theme');


btnSubmit.addEventListener('click', () => {
    postData();
    input.value = '';
});

function postData() {
    axios.post('http://localhost:3000/comments', {
        theme: theme.value,
        body: input.value,
    })
    .then(response => console.log(response.data))
    .catch(() => {
        alert('ERROR');
    })
    .finaly(console.log('End'));
}

