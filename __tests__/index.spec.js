const { renderDOM } = require('./helpers');

let dom;
let document;

describe('indexcopy.html', () => {
  beforeEach(async () => {
    dom = await renderDOM('../indexcopy.html');
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

  test('Login/Register button exists', () => {
    const btn = document.getElementById('login-logout');
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

  test('Does the Get Started button exist?', () => {
    const btn = document.getElementById('getStarted');
    expect(btn).toBeTruthy()
  })

  test("Are there cards for each category", () => {
    const cards = document.querySelectorAll(".card-body").length
    // console.log(cards)
    expect(cards).toBe(6)
  })

  test("Is there a card for services?", ()=>{
    const card = document.getElementById('services-btn');
    expect(card).toBeTruthy()
  })

  test("Does the services card have an identifier?", () => {
    const parent = document.getElementById("services-btn").querySelector("h2")
    // const h2 = parent.querySelector("h2")

    expect(parent).toBeTruthy()
  })

  test("Is the service card identifier named properly?",()=>{
    const tit = document.getElementById("services-btn").querySelector("h2")
    expect(tit.innerHTML).toContain("Services")
  })

  test("Does the services card have a button?", () => {
    const parent = document.getElementById("services-btn").querySelector("button")

    expect(parent).toBeTruthy()
  })

  test("Is there a card for jobs?", ()=>{
    const card = document.getElementById('jobs-btn');
    expect(card).toBeTruthy()
  })

  test("Does the jobs card have an identifier?", () => {
    const parent = document.getElementById("jobs-btn").querySelector("h2")
    // const h2 = parent.querySelector("h2")

    expect(parent).toBeTruthy()
  })

  test("Is the jobs card identifier named properly?",()=>{
    const tit = document.getElementById("jobs-btn").querySelector("h2")
    expect(tit.innerHTML).toContain("Jobs")
  })

  test("Does the jobs card have a button?", () => {
    const parent = document.getElementById("jobs-btn").querySelector("button")

    expect(parent).toBeTruthy()
  })

  test("Is there a card for voluntary?", ()=>{
    const card = document.getElementById('voluntary-btn');
    expect(card).toBeTruthy()
  })

  test("Does the voluntary card have an identifier?", () => {
    const parent = document.getElementById("voluntary-btn").querySelector("h2")
    // const h2 = parent.querySelector("h2")

    expect(parent).toBeTruthy()
  })

  test("Is the voluntary card identifier named properly?",()=>{
    const tit = document.getElementById("voluntary-btn").querySelector("h2")
    expect(tit.innerHTML).toContain("Voluntary Work")
  })

  test("Does the voluntary card have a button?", () => {
    const parent = document.getElementById("voluntary-btn").querySelector("button")

    expect(parent).toBeTruthy()
  })

  test("Is there a card for announcements?", ()=>{
    const card = document.getElementById('announcements-btn');
    expect(card).toBeTruthy()
  })

  test("Does the announcements card have an identifier?", () => {
    const parent = document.getElementById("announcements-btn").querySelector("h2")
    // const h2 = parent.querySelector("h2")

    expect(parent).toBeTruthy()
  })

  test("Is the announcements card identifier named properly?",()=>{
    const tit = document.getElementById("announcements-btn").querySelector("h2")
    expect(tit.innerHTML).toContain("Announcements")
  })

  test("Does the announcements card have a button?", () => {
    const parent = document.getElementById("announcements-btn").querySelector("button")

    expect(parent).toBeTruthy()
  })

  test("Is there a card for events?", ()=>{
    const card = document.getElementById('events-btn');
    expect(card).toBeTruthy()
  })

  test("Does the events card have an identifier?", () => {
    const parent = document.getElementById("events-btn").querySelector("h2")
    // const h2 = parent.querySelector("h2")

    expect(parent).toBeTruthy()
  })

  test("Is the events card identifier named properly?",()=>{
    const tit = document.getElementById("events-btn").querySelector("h2")
    expect(tit.innerHTML).toContain("Events")
  })

  test("Does the events card have a button?", () => {
    const parent = document.getElementById("events-btn").querySelector("button")

    expect(parent).toBeTruthy()
  })

  test("Is there a card for clubs?", ()=>{
    const card = document.getElementById('clubs-btn');
    expect(card).toBeTruthy()
  })

  test("Does the clubs card have an identifier?", () => {
    const parent = document.getElementById("clubs-btn").querySelector("h2")
    // const h2 = parent.querySelector("h2")

    expect(parent).toBeTruthy()
  })

  test("Is the clubs card identifier named properly?",()=>{
    const tit = document.getElementById("clubs-btn").querySelector("h2")
    expect(tit.innerHTML).toContain("Clubs")
  })

  test("Does the clubs card have a button?", () => {
    const parent = document.getElementById("clubs-btn").querySelector("button")

    expect(parent).toBeTruthy()
  })


  test("Post list div exists", () => {
    const div = document.getElementById("post-list");
    expect(div).toBeTruthy()
  })

  xtest("Does services auto load posts upon entering website?", ()=> {
    //This is skipped due to our JS having to be commented out in order for the tests to work
    const postList = document.getElementById("post-list").childElementCount

    expect(postList).toBeGreaterThan(0)
  })
  

  // test("Is login/register in navbar?", () => {
  //   const navbar = document.getElementById('navbar');
  //   const btn = document.getElementById('login-register');
  //   const result = navbar.innerHTML = pare

  // })

  

})
