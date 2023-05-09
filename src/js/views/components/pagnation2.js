let baseUrl2 = "https://florin-server-web.onrender.com/posts";

document
  .querySelector("#nextButton")
  .addEventListener("click", nextPage, false);
document
  .querySelector("#prevButton")
  .addEventListener("click", previousPage, false);

//Fetch Data from API
async function fetchEntries() {
  const response = await fetch(baseUrl2);
  const entries = await response.json();
  console.log(entries);
  //return entries
  //console.log(entries);
  // entries.forEach((entry) => {
  //   console.log(entry);
  // });
}
//fetchEntries();

//       entries = data;
//       entries.forEach((entry) => {
//         createPost(entry);
//       });
//     });
// }
// getEntries();

var postData = [];
// // var current_page = 1
// // var records_per_page = 10;

const pageSize = 10;
let curPage = 1;

async function renderPosts(page = 1) {
  const post = document.createElement("div");
  post.className = "card w-100 mb-3 bg-green-500";

  const body = document.createElement("div");
  body.classList.add("card-body", "mb-2");

  await fetchEntries();

  if (page == 1) {
    prevButton.style.visibility = "hidden";
  } else {
    prevButton.style.visibility = "visible";
  }

  if (page == numPages()) {
    nextButton.style.visibility = "hidden";
  } else {
    nextButton.style.visibility = "visible";
  }

  // html elements

  postData
    .filter((row, index) => {
      console.log(row, index);
      let start = (curPage - 1) * pageSize;
      let end = curPage * pageSize;
      if (index >= start && index < end) return true;
    })
    .forEach((data) => {
      console.log(data);

      const title = document.createElement("h4");
      title.classList.add("card-title");
      title.textContent = data.title;

      const category = document.createElement("h4");
      category.classList.add("card-subtitle", "mb-2");
      category.textContent = data.category;

      const content = document.createElement("p");
      content.classList.add("card-text");
      content.textContent = data.content;

      const date = document.createElement("p");
      date.classList.add("card-text");
      date.textContent = data.date;

      const elements = [title, category, content, date];
      elements.forEach((element) => {
        post.appendChild(element);
        container.appendChild(post);
      });
    });
}

function previousPage() {
  if (curPage > 1) {
    curPage--;
    renderPosts(curPage);
  }
}

function nextPage() {
  if (curPage * pageSize < postData.length) {
    curPage++;
    renderPosts(curPage);
  }
}

renderPosts();

function numPages() {
  return Math.ceil(postData.length / pageSize);
}