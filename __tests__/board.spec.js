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
})
