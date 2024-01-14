// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули

const mainDiv = document.getElementById('mainDiv')
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const user of users) {
            let div = document.createElement('div');
            let btn = document.createElement('button');
            div.classList.add('block');
            btn.classList.add('button');
            btn.textContent = 'details';
            div.textContent = `${user.id}) ${user.name}`;
            btn.onclick =() => {
                location.href = 'user-details.html?id=' + `${user.id}`
            }
            div.appendChild(btn);
            mainDiv.appendChild(div);
        }
    })