console.log("hello")
document.getElementById('username-display').textContent= localStorage.getItem('username')
document.getElementById("log-out").addEventListener("click",logoutUser);
// MOVE TO - addPostElement.js

// async function createPostElement(data) {
//   console.log(data);
//   const container = document.getElementById("post-list");

//   const post = document.createElement("div");
//   post.className = "post";
//   post.id = "card"

//   const header = document.createElement("h2");
//   // header.textContent = "Title:";
//   header.classList.add("m-2", "card-title");
//   header.textContent = data["title"];
//   post.appendChild(header);

//   const category = document.createElement("p");
//   category.classList.add("m-2", "card-subtitle");
//   category.textContent = data["category"];
//   post.appendChild(category);


//   const content = document.createElement("p");
//   content.classList.add("m-2", "card-text");
//   content.textContent = data["content"];
//   post.appendChild(content);

//   const date = document.createElement("p");
//   const dateTitle = document.createElement("p");
//   dateTitle.classList.add("date-format", "m-2");
//   dateTitle.textContent = "created:";
//   date.classList.add("date-format", "m-2");
//   const dateFormat = new Date(data["post_date"]).toDateString();
//   date.textContent = `Post Date: ${dateFormat}`;
//   post.appendChild(date);

//   const btnContainer = document.createElement("div");
//   btnContainer.className = "flex btn-container";
//   btnContainer.style.cssText ="display:flex, justify-content: space-between"
//   post.appendChild(btnContainer);

//   const commentBtn = document.createElement("div");
//   commentBtn.className = "btn", "m-1","w-75";
//   commentBtn.id = "btn-comment"
//   commentBtn.textContent = "Comments"
//   btnContainer.appendChild(commentBtn)

// const deleteBtn = document.createElement("div");
//   deleteBtn.className = "btn btn-delete";
//   deleteBtn.id = "btn-delete"
//   deleteBtn.textContent = "Delete"
//   btnContainer.style.cssText ="justify-content: space-between"
//   btnContainer.appendChild(deleteBtn)
//  const comment = document.createElement("div");

//   comment.className = "comment";
//   comment.style.cssText ="display:flex, justify-content: space-between, margin:auto"

// //   comment.id = `comment-container-${data["post_id"]}`
// // console.log(`comment-container-${data["post_id"]}`)

//   const handleCommentClick = async  (e) => {
//     e.preventDefault();
//     const commentData = await loadComments(data["id"])
//      console.log('line 64', commentData)
//     if (commentData.length !== 0 || commentData !== undefined) {
//       commentData.forEach((c) => {
//         const commentContainer = document.createElement("div")
//         comment.id = `comment-container-${c["post_id"]}`
//         commentContainer.className = "post"
//         const newComment = document.createElement('p');
//         commentContainer.appendChild(newComment)

//         console.log(`comment-container-${c["post_id"]}`)
//         newComment.textContent = c["comment"];
//         const commentId = `comment-container-${c["post_id"]}`
//         document.getElementById(commentId).appendChild(commentContainer);

//       })
//     }
//     commentBtn.removeEventListener('click', handleCommentClick)
//   }
//  commentBtn.addEventListener('click', handleCommentClick)
//   //comment call load comments

//   deleteBtn.addEventListener('click', async (e) => {
//     e.preventDefault();
//     console.log(localStorage.getItem("token"))
//     const options = {
//       method: "DELETE",
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'Authorization': localStorage.getItem("token")
//       }
//     }
//     const response = await fetch(`https://florin-server-web.onrender.com/posts/${data['id']}`, options);
//     const res = await response.json();
//     console.log(`data submit: ${JSON.stringify(res)}`);
//   })

//   const elements = [header, category, content, date, ,btnContainer,comment];
//   elements.forEach((element) => {
//     post.appendChild(element);
//     container.appendChild(post);
//   })
// }



async function loadPosts() {
    const options = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    const response = await fetch(
      "https://florin-server-web.onrender.com/posts",
      options
    );
    console.log(response);
    try {

      const posts = await response.json();
      posts.forEach((p) => {
          createPostElement(p)
        })
      }
      catch (error) {
        console.log(error.message)
      }
    }

    loadPosts();

    // MOVE TO - addPostElement.js

    // async function loadComments(comment_id) {
    //   const response = await fetch(
    //     `https://florin-server-web.onrender.com/comments/${comment_id}`
    //   );
    //   const comments = await response.json();
    //   console.log(comments);
    //   return comments
    //   //console.log(response);
    //   if (response.status == 200) {
    //   }
    // }







    function createNewPost() {
      document.getElementById("form").addEventListener("submit", async (e) => {
        e.preventDefault();
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const currentDate = `${year}-${month}-${day}`;
        console.log(currentDate);

        const form = new FormData(e.target);

        for (item of form) {
          console.log(item[0], item[1])
        }
        console.log(localStorage.getItem("token"))
        const options = {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            'Authorization': localStorage.getItem("token")
          },
          body: JSON.stringify({
            title: form.get("title"),
            content: form.get("content"),
            category: form.get("category"),
            author_id: 1,
            post_date: currentDate
          }),
        };
        console.log(options.headers);
        const result = await fetch(
          'https://florin-server-web.onrender.com/posts',
          options
        );

        if (result.status == 201) {
          alert("you post was successfully sent")
          window.location.reload();
        }
      });
    }
    createNewPost()

    // function UpdatePost() {
    //   document.getElementById("form").addEventListener("submit", async (e) => {
    //     e.preventDefault();
    //     const today = new Date();
    //     const year = today.getFullYear();
    //     const month = String(today.getMonth() + 1).padStart(2, '0');
    //     const day = String(today.getDate()).padStart(2, '0');
    //     const currentDate = `${year}-${month}-${day}`;
    //     console.log(currentDate);

    //     const form = new FormData(e.target);

    //     for (item of form) {
    //       console.log(item[0], item[1])
    //     }
    //     console.log(e.target)
    //     const options = {
    //       method: "POST",
    //       headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //         'Authorization': localStorage.getItem('token'),
    //       },
    //       body: JSON.stringify({
    //         title: form.get("title"),
    //         content: form.get("content"),
    //         category: form.get("category"),
    //         date: currentDate,
    //         author_id: 1,
    //       }),
    //     };

    //     const result = await fetch(
    //       "https://florin-server-web.onrender.com/posts/",
    //       options
    //     );

    //     if (result.status == 201) {
    //       alert("you post was successfully sent")
    //       window.location.reload();
    //     }
    //   });
    // }
    // updatePost()