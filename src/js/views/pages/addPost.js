import {
    createPostElement
} from('./board');


// const form = document.getElementById('post-form);
const form = new FormData(e.target);
form.addEventListener('submit', createPost)

async function createPost(e) {
    e.preventDefault()
    console.log(e.target.fruit.value)

    const options = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: form.get("username"),
            password: form.get("password"),
            admin: form.get("is_admin"),
            business: form.get("is_business")

        }),
    };
}




const response = await fetch("https://florin-server-web.onrender.com/posts", options);
const data = await response.json();