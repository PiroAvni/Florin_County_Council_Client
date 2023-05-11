<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#Florin">About The Project</a></li>
    <li><a href="#Installation">Installation </a></li>
    <li><a href="#Usage">Usage</a></li>
    <li><a href="#Demo">Demo</a></li>
    <li><a href="#Technologies">Technologies</a></li>
    <li><a href="#Process">Process</a></li>
    <li><a href="#Challenges">Challenges & Wins</a>
    <li><a href="#Contribution">Contribution</a></li>
    <li><a href="#License">License</a></li>
  </ol>
</details>

# Welcome to the Florin County Council Community Site

![alt text](https://github.com/PiroAvni/Florin_County_Council_Client/blob/staging/src/assets/logo_fcc.png "Florin County Community Hub")


# Florin County Council Community Hub

Florin County Council community hub is a space that is; open and accessible to the local community; providing services that the local community wants and needs; where formal decisions about running and managing the hub are taken by people who come mainly from within the local community.

## Project Description
The aim of this project is to create a community website with the aim of allowing members & businesses in Florin County to:

- Post jobs/volunteering opportunities
- Reduce overflow in the local recycling centre by creating a marketplace for items that can be reused and read information on reusable products
- Post clubs and learning opportunities
- Post events

<!-- Installation & usage -->
# Installation

If you would like to see the code for yourself or run the client locally start by cloning the repository through the command line: git clone ```(`git@github.com:PiroAvni/Florin_County_Council_Client.git`)```.

Then with the IDE extension ```live server``` you can run the client side directly from your browser [localHost : http://localhost:3000/](http://localhost:3000/)

## Usage

To run the client you have two options:
 1. run live-server **or**
 2. directly open html file

To access the community site, please click on the link  [Live Site](https://florin-county-council-client.onrender.com/)

To access the server side, please click on the link [Server](https://github.com/yrossan/florin_server)

## Demo

![Demo]( ["Demo"](https://github.com/PiroAvni/Florin_County_Council_Client/blob/dev/AVNI/src/assets/Florin%20County%20Council%20-%20Community%20Site%20-%20Google%20Chrome%202023-05-11%2021-37-45.mp4))


## Images
![Laptop ]{ float: center(https://github.com/PiroAvni/Florin_County_Council_Client/blob/dev/AVNI/src/assets/mobile.png){: style="float: center"};
![Ipad](https://github.com/PiroAvni/Florin_County_Council_Client/blob/dev/AVNI/src/assets/mobile%20(1).png){: style="float: center"};
## Technologies

The technologies used to build the client:
* [![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/Overview.en.html)
* [![Boostrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
* [![javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/)
* [![git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)


# Process

[Here you can find the Figma showing : WireFrames, Kanban and our Database ERD](https://www.figma.com/file/OV4ImyCz2lLMk7zBLjBS08/Lap-2-Project?type=whiteboard&node-id=0%3A1&t=Mxfq6m0Me4zjjEbb-1)

[Stakeholder Map](https://github.com/PiroAvni/Florin_County_Council_Client/blob/staging/src/assets/Stakeholder%20map%20.png)

1. Combine and share ideas on potential features.
2. Identify stakeholders - Stakeholder map
3. Wireframes were made on Figma and had a color theme to work with
4. Kanban broad was create to track out backlogs
5. ERD for the database 
   
## Features

- User Registration
- User Login
- Create Posts
- Delete Posts
- Selected Posts via category

## Future Features
- MarketPlace
- Search functionality
- Map  GeoAlerts
- Business Location Search
- Alerts -Notifications - Bin collection
- Reporting - local issues
- Tours
- Local News updates 
- Connectivity to IOT
- Advertising for local business
- Admin Section
- Business Section

# Challenges & Wins

### Challenges


* Making sure the random fetch was only called once so that the corresponding data related to the hints, fun facts, and multiple choice answers were linked (we wouldn't want them to be from different countries).
*  Uploading post or category entries on load-up and having a button to pre select category entries.
*  On the registry for both radio button to select Admin or Business, we have difficulties passing the value back to the database for authorization.
*  Creating a function to to create HTML elements for the entries.
### Wins

Code to create new Elements for each:

```js
async function createPostElement(data) {
  console.log(data);
  const container = document.getElementById("post-list");

  const post = document.createElement("div");
  post.className = "post";
  post.id = "card"

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
  btnContainer.style.cssText ="display:flex, justify-content: space-between"
  post.appendChild(btnContainer);

  const commentBtn = document.createElement("div");
  commentBtn.className = "btn", "m-1","w-75";
  commentBtn.id = "btn-comment"
  commentBtn.textContent = "Comments"
  btnContainer.appendChild(commentBtn)

const deleteBtn = document.createElement("div");
  deleteBtn.className = "btn btn-delete";
  deleteBtn.id = "btn-delete"
  deleteBtn.textContent = "Delete"
  btnContainer.style.cssText ="justify-content: space-between"
  btnContainer.appendChild(deleteBtn)
 const comment = document.createElement("div");
  comment.className = "comment";
  comment.style.cssText ="display:flex, justify-content: space-between, margin:auto"
  
  comment.id = `comment-container-${data["post_id"]}`

  commentBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const commentData = await loadComments(data["id"])
     console.log('line 54', commentData)
    if (commentData.length !== 0 || commentData !== undefined) {
      commentData.forEach((c) => {
        const newComment = document.createElement('p');
        console.log('line51', newComment)
        newComment.textContent = c["comment"];
        document.getElementById(`comment-container-${data["post_id"]}`).appendChild(newComment);
        document.getElementById('commentBtn').disabled = true
      })
    }
  })

```

The code to upload post / entries.
When clicking on each service button it allowed to display an up-to date category for that particular service.

```js
async function loadPosts(category) {
  const options = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };

  const response = await fetch(
    `https://florin-server-web.onrender.com/posts/${category}`,
    options
  );
  console.log(response);
  if (response.status == 200) {
    const posts = await response.json();
    posts.forEach((p) => {
      createPostElement(p)
    });
  } else {
    // window.location.assign("./login.js");
  }
}
loadPosts('services');

// Service Buttons

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


```



* We completed a functional MVP.
* Challenges were dealt with.

# Contribution

Avni Piro (<https://github.com/PiroAvni>)

Christopher Sharpe (<https://github.com/CingSharped>)

Muhammad Yaaseen Rossan (<https://github.com/yrossan>)



# License

MIT License:  see [the `LICENSE` file](https://github.com/PiroAvni/Lab1_GeoStory_Server/blob/main/LICENSE).
