var baseUrl = "https://florin-server-web.onrender.com/posts";

var coinData = [];
// var current_page = 1
// var records_per_page = 10;
var apiUrl = `${baseUrl}`;

const pageSize = 10;
let curPage = 1;

async function renderTable(page = 1) {
  await getData();

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

  //   const container = document.getElementById("post-container");

  //   const entryCard = document.createElement("div");
  //   entryCard.className = "card w-100 mb-3 bg-green-500";

  //   const body = document.createElement("div");
  //   body.classList.add("card-body", "mb-2");

  //   const title = document.createElement("h4");
  //   title.classList.add("card-title");
  //   title.textContent = title;

  //   const category = document.createElement("h4");
  //   category.classList.add("card-subtitle", "mb-2");
  //   category.textContent = cryptoCoin.category;

  //   const content = document.createElement("p");
  //   content.classList.add("card-text");
  //   content.textContent = cryptoCoin.content;

  //   const date = document.createElement("p");
  //   date.classList.add("card-text");
  //   date.textContent = cryptoCoin.date;

  // create html
  var cryptoCoin = "";
  coinData
    .filter((row, index) => {
      let start = (curPage - 1) * pageSize;
      let end = curPage * pageSize;
      if (index >= start && index < end) return true;
    })
    // const elements = [title, category, content, date];
    // elements.forEach((element) => {
    //   entryCard.appendChild(element);
    //   body.appendChild(entryCard);
    //   container.appendChild(body);
    //   console.log(entryCard);
    // })
    .forEach((coin) => {
      cryptoCoin += `<h4>  ${coin.title}</h4>`;
      cryptoCoin += `<h4> ${coin.category} </h4>`;
      cryptoCoin += `<p> ${coin.content} </p>`;
      cryptoCoin += `<p> $${coin.post_date}</p>`;
    });
  document.getElementById("post-list").innerHTML = cryptoCoin;
}
function previousPage() {
  if (curPage > 1) {
    curPage--;
    renderTable(curPage);
  }
}
function nextPage() {
  if (curPage * pageSize < coinData.length) {
    curPage++;
    renderTable(curPage);
  }
}

renderTable();

function numPages() {
  return Math.ceil(coinData.length / pageSize);
}

document
  .querySelector("#nextButton")
  .addEventListener("click", nextPage, false);
document
  .querySelector("#prevButton")
  .addEventListener("click", previousPage, false);

//Fetch Data from API
async function getData() {
  const response = await fetch(apiUrl);
  const posts = await response.json();
  coinData = posts;
  console.log(coinData);
}
