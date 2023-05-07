// async function getEntries() {
//   let entries;
//   await fetch("https://florin-server-web.onrender.com/posts")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);  
//       entries = data;
//       entries.forEach((entry) => {
//         console.log(entry)
//       //   createPost(entry);
//       });
//     });
// }
// getEntries();

 

// function createPost(data) {
//   const container = document.getElementById("post-container");

//   const post = document.createElement("div");
//   post.className = "card w-100 mb-3 bg-green-500";

//   const body = document.createElement("div");
//   body.classList.add("card-body", "mb-2");

//   const title = document.createElement("h4");
//   title.classList.add("card-title");
//   title.textContent = data.title;

//   const category = document.createElement("h4");
//   category.classList.add("card-subtitle", "mb-2");
//   category.textContent = data.category;

//   const content = document.createElement("p");
//   content.classList.add("card-text");
//   content.textContent = data.content;

//   const date = document.createElement("p");
//   date.classList.add("card-text");
//   date.textContent = data.date;

//   const elements = [title, category, content, date];
//   elements.forEach((element) => {
//     post.appendChild(element);
//     container.appendChild(post);
//   });
// }

