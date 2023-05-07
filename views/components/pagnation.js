import {data} from '../index.js';
//console.log(data)

function pagination() {
  const postList = document.querySelector(".post-list");
  const first = document.querySelector(".first");
  const previous = document.querySelector(".previous");
  const next = document.querySelector(".next");
  const last = document.querySelector(".last");

  let arrayList = [];
  let page = 0;
  
  for (let i = 1; i <= 100; i++) {
    let li = document.createElement("li");
    li.textContent = `List items ${i}`;
    arrayList.push(li);
  }

  for (let i = 0; i < page + 10; i++) {
    postList.appendChild(arrayList[i]);
  }
  next.addEventListener("click", () => {
    page == arrayList.length - 10 ? page = 0 : (page += 10);
    postList.innerHTML = "";
    for (let i = page; i < page + 10; i++) {
      postList.appendChild(arrayList[i]);
    }
  });
  previous.addEventListener("click", () => {
    page == 0 ? (page = arrayList.length -10) : (page -= 10);
    postList.innerHTML = "";
    for (let i = page; i < page + 10; i++) {
      postList.appendChild(arrayList[i]);
    }
  });

  first.addEventListener("click", () => {
    page = 0;
    postList.innerHTML = "";
    for (let i = page; i < page + 10; i++) {
      postList.appendChild(arrayList[i]);
    }
  });
  last.addEventListener("click", () => {
    page = arrayList.length - 10;
    postList.innerHTML = "";
    for (let i = page; i < page + 10; i++) {
      postList.appendChild(arrayList[i]);
    }
  });
  console.log(arrayList);
}
pagination()