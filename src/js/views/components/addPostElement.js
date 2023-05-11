async function createPostElement(data) {
  console.log(data);
  const container = document.getElementById("post-list");

  const post = document.createElement("div");
  post.className = "post";
  post.id = "card";

  const header = document.createElement("h2");
  // header.textContent = "Title:";
  header.classList.add("m-2", "card-title");
  header.textContent = data["title"];
  post.appendChild(header);

  const category = document.createElement("p");
  category.classList.add("m-2", "card-subtitle");
  category.textContent = data["category"];
  post.appendChild(category);

  const content = document.createElement("p");
  content.classList.add("m-2", "card-text");
  content.textContent = data["content"];
  post.appendChild(content);

  const date = document.createElement("p");
  const dateTitle = document.createElement("p");
  dateTitle.classList.add("date-format", "m-2");
  dateTitle.textContent = "created:";
  date.classList.add("date-format", "m-2");
  const dateFormat = new Date(data["post_date"]).toDateString();
  date.textContent = `Post Date: ${dateFormat}`;
  post.appendChild(date);

  const btnContainer = document.createElement("div");
  btnContainer.className = "flex btn-container";
  btnContainer.style.cssText = "display:flex, justify-content: space-between";
  post.appendChild(btnContainer);

  const commentBtn = document.createElement("div");
  commentBtn.className = "btn","btn-comment";
  commentBtn.id = "btn-comment";
  commentBtn.textContent = "Comments";
  btnContainer.appendChild(commentBtn);

  console.log(localStorage.getItem("token"));

if(localStorage.getItem('token') !== null){
const deleteBtn = document.createElement("div");
  deleteBtn.className = "btn btn-delete";
  deleteBtn.id = "btn-delete";
  deleteBtn.textContent = "Delete";

  btnContainer.style.cssText = "justify-content: space-between";
  btnContainer.appendChild(deleteBtn);
console.log(deleteBtn);
  deleteBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log(localStorage.getItem("token"));
    const options = {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token"),
      },
    };
    const response = await fetch(
      `https://florin-server-web.onrender.com/posts/${data["id"]}`,
      options
    );
    const res = await response.json();
    
    console.log("this is a string",res)
    if (res.status == 201) {
      alert("you post was successfully sent")
      window.location.reload();
    }else{
      alert('Unable to Delete post')
    }
  });

}
  

  const comment = document.createElement("div");
  comment.className = "comment";
  comment.style.cssText =
    "display:flex, justify-content: space-between, margin:auto";

    // comment.id = `comment-container-${data["post_id"]}`
  // console.log(`comment-container-${data["post_id"]}`)

  const handleCommentClick = async (e) => {
    e.preventDefault();
    const commentData = await loadComments(data["id"]);
    console.log("line 64", commentData);
    if (commentData.length !== 0 || commentData !== undefined) {
      commentData.forEach((c) => {
        
        const commentContainer = document.createElement("div");
        const contentContainer =document.createElement("div");
        contentContainer.className = "message-content"
        comment.id = `comment-container-${c["post_id"]}`;
        commentContainer.className = "post comment-container";
        const newComment = document.createElement("p");


        const dateContainer = document.createElement("div")
        
        dateContainer.className ="date-container";
        const date = document.createElement("p");
        const dateTitle = document.createElement("p");
        dateTitle.classList.add("date-format", "m-2");
        dateTitle.textContent = "created:";
        date.classList.add("date-format", "m-2");
        const dateFormat = new Date(data["post_date"]).toDateString();
        date.textContent = `Post Date: ${dateFormat}`;
        

        commentContainer.appendChild(contentContainer)
        contentContainer.appendChild(newComment);
         commentContainer.appendChild(dateContainer)
         dateContainer.appendChild(date)

        const replyBtn = document.createElement("div");
        replyBtn.className = "btn reply-btn";
        replyBtn.id = "btn-reply";
        replyBtn.textContent = "Reply";
        dateContainer.appendChild(replyBtn);

        console.log(`comment-container-${c["post_id"]}`);

        newComment.textContent = c["comment"];
        const commentId = `comment-container-${c["post_id"]}`;
        document.getElementById(commentId).appendChild(commentContainer,contentContainer);

        
        btnContainer.style.cssText = "justify-content: space-between";
        // btnContainer.appendChild(deleteBtn);
        // const comment = document.createElement("div");
      });
    }
    commentBtn.removeEventListener("click", handleCommentClick);
  };
  commentBtn.addEventListener("click", handleCommentClick);
  //comment call load comments



  

  const elements = [header, category, content, date, , btnContainer, comment];
  elements.forEach((element) => {
    post.appendChild(element);
    container.appendChild(post);
  });
}
async function loadComments(comment_id) {
  const response = await fetch(
    `https://florin-server-web.onrender.com/comments/${comment_id}`
  );
  const comments = await response.json();
  console.log(comments);
  return comments;
  //console.log(response);
  if (response.status == 200) {
  }
}
