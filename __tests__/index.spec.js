const { renderDOM } = require('./helpers');

let dom;
let document;

describe('indexcopy.html', () => {
  beforeEach(async () => {
    dom = await renderDOM('../indexcopy.html');
    document = await dom.window.document;
  })

  test("Is there a navbar?", () => {
    const navbar = document.getElementById('navbar');
    expect(navbar).toBeTruthy()
  })

  test('Login/Register button exists', () => {
    const btn = document.getElementById('login-register');
    expect(btn).toBeTruthy()
  })

  // test("Is login/register in navbar?", () => {
  //   const navbar = document.getElementById('navbar');
  //   const btn = document.getElementById('login-register');
  //   const result = navbar.innerHTML = pare

  // })

  test("Post list div exists", () => {
    const div = document.getElementById("post-list");
    expect(div).toBeTruthy()
  })

})
