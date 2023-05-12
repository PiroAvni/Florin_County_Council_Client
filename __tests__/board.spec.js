const { renderDOM } = require('./helpers');

let dom;
let document;

describe('boardcopy.html', () => {
  beforeEach(async () => {
    dom = await renderDOM('../src/public/boardcopy.html');
    document = await dom.window.document;
  })

  test("Is there a title?", () => {
    const tit = document.querySelector('title');
    expect(tit).toBeTruthy()
  })

  test("Title displays the right text?", () =>{
    const tit = document.querySelector("title")
    expect(tit.innerHTML).toContain("Florin County Council - Community Site")
  })
  test("Is there a navbar?", () => {
    const navbar = document.querySelector('nav');
    expect(navbar).toBeTruthy()
  })

  test("Does the navbar have a logo?", () => {
    const navbarlogo = document.querySelector('nav').querySelector("img");
    expect(navbarlogo).toBeTruthy()
  })

  test("Does the navbar logo have an anchor?",()=>{
    const navdiv = document.querySelector(".logo-content").querySelector("a").querySelector("img")
    expect(navdiv).toBeTruthy()
  })

  test('Log out button exists', () => {
    const btn = document.getElementById("log-out")
    expect(btn).toBeTruthy()
  })

  test("Username is displayed?", () => {
    const username = document.getElementById("username-display")
    expect(username).toBeTruthy()
  })

  test("Is there a h1?", () => {
    const h1 = document.querySelector("h1")
    expect(h1).toBeTruthy()
  })

  test("Does the h1 contain text?", () => {
    const h1 = document.querySelector("h1").textContent
    // const h1Length = h1.innerHTML
    let containsText = h1 === "" ? false : true;
    // if (h1 === ""){
    //   containsText = false
    // } else {
    //   containsText = true
    // }
    expect(containsText).toBe(true)
  })

  test("Is there a form for adding details to a new post?", () => {
    const form = document.getElementById("form")
    expect(form).toBeTruthy()
  })

  test("Is there a place to add a title?", () => {
    const title = document.getElementById("title")
    expect(title).toBeTruthy()

  })

  test("Is the title input type text?", () => {
    const busElement = document.getElementById('title')
    let isRadio
    if (busElement.type ==="text"){
        isRadio = true
    } else {
        isRadio = false
    }
    expect(isRadio).toBe(true)
  })
  
  test("Is there a place to add category?", () => {
    const datalist = document.getElementById("DataList")
    expect(datalist).toBeTruthy()
  })
})
