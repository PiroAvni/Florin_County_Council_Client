function createPostElement(data) {
    const post = document.createElement("div");
    post.className = "card w-100 mb-3 bg-green-500";
  
    const body = document.createElement("div");
    body.className = "card-body ";
  
    const header = document.createElement("h5");
    header.textContent = data["title"];
    header.className = "card-title" ,"title";
    post.appendChild(header);
  
    const content = document.createElement("p");
    content.textContent = data["content"];
    header.className = "card-text";
    post.appendChild(content);
  
    const category = document.createElement("p");
    category.textContent = data["category"];
    category.className = "category-p";
    post.appendChild(category);
  
    const date = document.createElement("p");
    date.textContent = data["post_date"];
    date.className = "card-date";
    post.appendChild(date);
  
  
  
    return post;
  }
  
  async function fetchPost() {
  
    const response = await fetch("http://localhost:3000/posts");
  
    if (response.status == 200) {
      const posts = await response.json()
  
      console.log(posts)
  
      const container = document.getElementById("post-container");
  
      posts.forEach((p) => {
        const element = createPostElement(p);
        container.appendChild(element);
      });
    } else {
      window.location.assign("./index.html");
    }
  }
  fetchPost();