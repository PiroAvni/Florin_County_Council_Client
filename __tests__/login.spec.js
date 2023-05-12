const { renderDOM } = require('./helpers');

let dom;
let document;

describe('logincopy.html', () => {
  beforeEach(async () => {
    dom = await renderDOM('../src/public/logincopy.html');
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

  test('login / register button exists', () => {
    const btn = document.getElementById("logRegBtn")
    expect(btn).toBeTruthy()
  })

  test('Home button exists', () => {
    const btn = document.getElementById("homeBtn")
    expect(btn).toBeTruthy()
  })

  test("Does h1 contain text?", () =>{
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

  test("Is the username input type text?", () => {
    const busElement = document.getElementById('floatingInput username')
    let isRadio
    if (busElement.type ==="text"){
        isRadio = true
    } else {
        isRadio = false
    }
    expect(isRadio).toBe(true)
  })

  test("Is the password input type password?", () => {
    const busElement = document.getElementById('floatingPassword password')
    let isRadio
    if (busElement.type ==="password"){
        isRadio = true
    } else {
        isRadio = false
    }
    expect(isRadio).toBe(true)
  })

  test("Is there a button to click after inputting username/password?", () => {
    const registerbtn = document.getElementById("loginBtn")
    expect(registerbtn).toBeTruthy()
  })
})
