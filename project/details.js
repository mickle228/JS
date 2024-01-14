// На странице user-details.html:
// Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.


document.addEventListener("DOMContentLoaded", () => {
    const url = new URL(location.href);
    const id = url.searchParams.get('id');
    const mainBlock = document.createElement('div');
    mainBlock.classList.add('mainBlock');
    document.body.appendChild(mainBlock);

    const blockContainer = document.createElement('div');
    blockContainer.classList.add('block-container');
    document.body.appendChild(blockContainer);

    function flattenObject(obj, parentKey = '') {
        for (const key in obj) {
            const currentKey = parentKey ? `${parentKey}.${key}` : key;

            if (typeof obj[key] === 'object') {
                flattenObject(obj[key], currentKey);
            } else {
                const p = document.createElement('p');
                p.innerText = `${currentKey} - ${obj[key]}`;
                mainBlock.appendChild(p);
            }
        }
    }

    function fetchUserDetails(id) {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(user => {
                flattenObject(user);

                const btn = document.createElement('button');
                btn.textContent = 'Posts of Current User';
                mainBlock.appendChild(btn);

                btn.onclick = () => {
                    fetchUserPosts(id);
                    btn.setAttribute('disabled', '');
                };
            })
            .catch(error => {
                console.error('Error fetching user details:', error);
            });
    }

    function fetchUserPosts(id) {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then(response => response.json())
            .then(posts => {
                for (const post of posts) {
                    const block = document.createElement('div');
                    block.classList.add('block');

                    const p = document.createElement('p');
                    p.textContent = post.title;
                    block.appendChild(p);

                    const btn = document.createElement('button');
                    btn.textContent = 'Post Details';
                    btn.onclick = () => {
                        location.href = `post-details.html?postid=${post.id}`;
                    };
                    block.appendChild(btn);

                    blockContainer.appendChild(block);
                }
            })
            .catch(error => {
                console.error('Error fetching user posts:', error);
            });
    }

    fetchUserDetails(id);
});
