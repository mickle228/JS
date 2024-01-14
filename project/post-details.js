// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let url = new URL(location.href);
let postId = url.searchParams.get('postid');
let postDiv = document.createElement('div');
postDiv.classList.add('post-div')
let containerDiv = document.createElement('div');
document.body.appendChild(postDiv);
document.body.appendChild(containerDiv);

async function foo() {
    await fetch('https://jsonplaceholder.typicode.com/posts/' + `${postId}`)
        .then((response) => response.json())
        .then((post) => {
            for (const postKey in post) {
                let p = document.createElement('p');
                p.textContent = `${postKey} --- ${post[postKey]}`
                postDiv.appendChild(p);
            }
        });

    await fetch('https://jsonplaceholder.typicode.com/posts/' + `${postId}` + '/comments')
        .then((response) => response.json())
        .then((comments) => {
            let commentsHeader = document.createElement('h2');
            commentsHeader.textContent = 'Comments';
            containerDiv.appendChild(commentsHeader);

            let commentsContainer = document.createElement('div');
            commentsContainer.className = 'comments-container';
            containerDiv.appendChild(commentsContainer);

            for (const comment of comments) {
                let commentDiv = document.createElement('div');
                commentDiv.className = 'comment-block';

                let p = document.createElement('p');
                p.textContent = `Comment ${comment.id} --- ${comment.name}`;
                commentDiv.appendChild(p);

                commentsContainer.appendChild(commentDiv);
            }
        });
}

foo();
