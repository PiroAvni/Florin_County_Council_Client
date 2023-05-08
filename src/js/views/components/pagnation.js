let baseUrl = "https://florin-server-web.onrender.com/posts";
let arrayList = [];
//Fetch Data from API
async function fetchEntries() {
  const response = await fetch(baseUrl);
  const entries = await response.json();
  entries.forEach((entry)=>{
    arrayList.push[entry]
    //console.log(entry)
    pagination(entry)
  })
  //console.log(entries);
}
fetchEntries()

 function pagination(data) {
   const postList = document.querySelector(".post-list");
   const first = document.querySelector(".first");
   const previous = document.querySelector(".previous");
   const next = document.querySelector(".next");
   const last = document.querySelector(".last");

   console.log('line 22',data)
  
  console.log('arraylist 25', arrayList)
  let page = 0;
  
  for (let i = 1; i <= arrayList.length; i++) {
    const title = document.createElement("h4");
    title.classList.add("card-title");
    title.textContent = data.title;

    const category = document.createElement("h4");
    category.classList.add("card-subtitle", "mb-1");
    category.textContent = data.category;

    const content = document.createElement("p");
    content.classList.add("card-text");
    content.textContent = data.content;

    const date = document.createElement("p");
    date.classList.add("card-text");
    date.textContent = data.date;
    
 
    arrayList.push(title,category,content,data);
  }

  // for (let i = 0; i < page + 10; i++) {
  //   postList.appendChild(arrayList[i]);
  // }
//   next.addEventListener("click", () => {
//     page == arrayList.length - 10 ? page = 0 : (page += 10);
//     postList.innerHTML = "";
//     for (let i = page; i < page + 10; i++) {
//       postList.appendChild(arrayList[i]);
//     }
//   });
//   previous.addEventListener("click", () => {
//     page == 0 ? (page = arrayList.length -10) : (page -= 10);
//     postList.innerHTML = "";
//     for (let i = page; i < page + 10; i++) {
//       postList.appendChild(arrayList[i]);
//     }
//   });

//   first.addEventListener("click", () => {
//     page = 0;
//     postList.innerHTML = "";
//     for (let i = page; i < page + 10; i++) {
//       postList.appendChild(arrayList[i]);
//     }
//   });
//   last.addEventListener("click", () => {
//     page = arrayList.length - 10;
//     postList.innerHTML = "";
//     for (let i = page; i < page + 10; i++) {
//       postList.appendChild(arrayList[i]);
//     }
//   });
//   console.log(arrayList);
 }
// pagination()