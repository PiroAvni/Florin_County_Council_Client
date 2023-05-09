//  const form = document.getElementById('post-form);

const form = document.getElementById('form').addEventListener('submit', createPost)

const formData = new FormData(form);

console.log(formData)

async function createPost(e) {
    e.preventDefault()

    const options = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            // Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({
            title: formData.get('post_title'),
            content: formData.get('post_content'),
            category: formData.get('post_category'),
            author_id: 1,
            post_date: '09-05-2023',

        }),
    };


    const response = await fetch("https://florin-server-web.onrender.com/posts", options);
    if (response.status == 201) {
        e.target.form.value = ' '
    }
}