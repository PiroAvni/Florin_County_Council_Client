function createPostElement(data) {
  console.log(data);

  const post = document.createElement("div");
  post.className = "post", "mb-1";
   post.id = "card"
 
  const header = document.createElement("h2");
  header.textContent = "Title:";
  header.classList.add("m-2","card-title");
  header.textContent = data["title"];
  post.appendChild(header);


  const category = document.createElement("p");
  category.classList.add("m-2","card-subtitle");
  category.textContent = data["category"];
  post.appendChild(category);


  const content = document.createElement("p");
  content.classList.add("m-2", "card-text");
  (content.textContent = "content"), data["post_content"];
  post.appendChild(content);

  const date = document.createElement("p");
  const dateTitle = document.createElement("p");
  dateTitle.classList.add("date-format", "m-2");
  dateTitle.textContent = "created:";
  date.classList.add("date-format", "m-2");
  const dateFormat = new Date(data["post_date"]).toDateString();
  date.textContent = `Post Date: ${dateFormat}`;
  post.appendChild(date);
return post

    
  // });
}

document.getElementById("post-list").addEventListener("submit", async (e) => {
     e.preventDefault();

    const form = new FormData(e.target);

    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: form.get("title"),
        content: form.get("content"),
        category: form.get("category"),
      }),
    };

    const result = await fetch(
      "https://florin-server-web.onrender.com/posts/",
      options
    );

    if (result.status == 201) {
      window.location.reload();
    }
  });
  
 
async function loadPosts(category) {
  await fetch(`https://florin-server-web.onrender.com/posts/${category}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const container = document.getElementById("post-container");

      console.log(container);

      data.forEach((p) => {
        const elem = createPostElement(p);
        container.appendChild(elem);
      });
    });
}

document.getElementById("jobs-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const element = document.querySelectorAll(".post")
  element.forEach(post =>{
    console.log('1')
    post.remove();
  })
    loadPosts("Jobs")
});



document.getElementById("voluntary-btn").addEventListener("click", (e) => {
    e.preventDefault();
    const element = document.querySelectorAll(".post")
    element.forEach(post =>{
      console.log('1')
      post.remove();
    })
    loadPosts("voluntary");
});

document.getElementById("events-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const element = document.querySelectorAll(".post")
  element.forEach(post =>{
    console.log('1')
    post.remove();
  })
  loadPosts("events");
});

document.getElementById("announcements-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const element = document.querySelectorAll(".post")
  element.forEach(post =>{
    console.log('1')
    post.remove();
  })
  loadPosts("announcements");
});

document.getElementById("announcements-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const element = document.querySelectorAll(".post")
  element.forEach(post =>{
    console.log('1')
    post.remove();
  })
  loadPosts("announcements");
});

document.getElementById("clubs-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const element = document.querySelectorAll(".post")
  element.forEach(post =>{
    console.log('1')
    post.remove();
  })
  loadPosts("clubs");
});

document.getElementById("services-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const element = document.querySelectorAll(".post")
  element.forEach(post =>{
    console.log('1')
    post.remove();
  })
  loadPosts("services");
});


