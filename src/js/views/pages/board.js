
 console.log("hello")
 
 function createPostElement(data) {
   console.log(data);

   const post = document.createElement("div");
   post.className = "post";
   post.id = "card"

   const header = document.createElement("h2");
   header.textContent = "Title:";
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

   const deleteBtn = document.createElement("div");
   deleteBtn.className = "btn m-1";
   deleteBtn.id = "btn-delete"
   // deleteBtn.id = "deleteBtn"
   deleteBtn.textContent = "Delete"
   post.appendChild(deleteBtn);
   return post;
 }

 document.getElementById("post-form").addEventListener("submit", async (e) => {
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
     "https://florin-server-web.onrender.com/posts",
     options
   );

   if (result.status == 201) {
     window.location.reload();
   }
 });

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
   if (response.status == 200) {
     const posts = await response.json();

     const container = document.getElementById("post-form");

     posts.forEach((p) => {
       const elem = createPostElement(p);
       container.appendChild(elem);
     });
   } else {
     window.location.assign("./index.html");
   }
 }

 loadPosts();



 // const modal = document.querySelector(".modal");
 // const overlay = document.querySelector(".overlay");
 // const openModalBtn = document.querySelector(".btn-open");
 // const closeModalBtn = document.querySelector(".btn-close");

 // const openModal = function () {
 //     modal.classList.remove("hidden");
 //     overlay.classList.remove("hidden");
 //   };

 //   openModalBtn.addEventListener("click", openModal);

 //   const closeModal = function () {
 //     modal.classList.add("hidden");
 //     overlay.classList.add("hidden");
 //   };

 //   closeModalBtn.addEventListener("click", closeModal);
 //   overlay.addEventListener("click", closeModal);
 //   document.addEventListener("keydown");

 // document.addEventListener("keydown", function (e) {
 //   if (e.key === "Escape" && !modal.classList.contains("hidden")) {
 //     modalClose();
 //   }
 // });


 // module.export ={createPostElement}

