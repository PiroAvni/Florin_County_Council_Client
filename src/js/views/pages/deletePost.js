async function deletePost() {


    window.addEventListener("DOMContentLoaded", (e) => {
 document.getElementById('btn-delete').addEventListener('submit', async (e) => {
        console.log('deletePost')
        e.preventDefault();
 
        console.log('delete')
        const options = {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id:formData.get('post_id'),
            title: formData.get('post_title'),
            content: formData.get('post_content'),
            category: formData.get('post_category'),
            author_id: 1,
            post_date: '09-05-2023',
          })
        }
        const response = await fetch("https://florin-server-web.onrender.com/posts/", options);
        const data = await response.json();
      })
    })
  }




