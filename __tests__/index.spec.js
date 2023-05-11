const { renderDOM } = require('./helpers');

let dom;
let document;

describe('index.html', () => {
  beforeEach(async () => {
    dom = await renderDOM('../index.html');
    document = await dom.window.document;
  })

  it('Login/Register button exists', () => {
    const btn = document.getElementById('login-register');
    expect(btn).toBeTruthy()
  })

})
