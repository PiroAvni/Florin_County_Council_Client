function createPostElement(data) {
  console.log(data);
  const post = document.createElement("div");
  post.className = "post";

  const title = document.createElement("h2");
  title.classList.add("card-title");
  title.textContent = "Title:";
  post.appendChild(title);

  const header = document.createElement("h2");
  header.textContent = "Title:";
  header.classList.add("m-2");
  header.textContent = data["title"];
  post.appendChild(header);

  const categoryTitle = document.createElement("h2");
  categoryTitle.classList.add("card-subtitle");
  categoryTitle.textContent = "Category:";
  post.appendChild(categoryTitle);

  const category = document.createElement("p");
  category.classList.add("m-2");
  category.textContent = data["category"];
  post.appendChild(category);

  const contentTitle = document.createElement("h2");
  contentTitle.classList.add("card-subtitle");
  contentTitle.textContent = "Content:";
  post.appendChild(contentTitle);

  const content = document.createElement("p");
  content.classList.add("m-2", "card-text");
  (content.textContent = "content"), data["content"];
  post.appendChild(content);

  const date = document.createElement("p");
  const dateTitle = document.createElement("p");
  dateTitle.classList.add("date-format", "m-2");
  dateTitle.textContent = "created:";
  date.classList.add("date-format", "m-2");
  const dateFormat = new Date(data["post_date"]).toDateString();
  date.textContent = `Post Date: ${dateFormat}`;
  post.appendChild(date);

  const elements = [title, category, content, date];
  elements.forEach((element) => {
    post.appendChild(element);
    
    container.appendChild(post);
  });
}

// document.getElementById("post-form").addEventListener("submit", async (e) => {
//      e.preventDefault();

//     const form = new FormData(e.target);

//     const options = {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         title: form.get("title"),
//         content: form.get("content"),
//         category: form.get("category"),
//       }),
//     };

//     const result = await fetch(
//       "https://florin-server-web.onrender.com/posts/",
//       options
//     );

//     if (result.status == 201) {
//       window.location.reload();
//     }
//   });

async function loadPosts(category) {
  await fetch(`https://florin-server-web.onrender.com/posts/${category}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.forEach((p) => {
        const elem = createPostElement(p);
      });
    });
}

document.getElementById("jobs-btn").addEventListener("click", (e) => {
  e.preventDefault();
  loadPosts("jobs");
});
// document.getElementById("voluntary-btn").addEventListener("click", (e) => {
//     e.preventDefault();
//     loadPosts("voluntary");
// });
