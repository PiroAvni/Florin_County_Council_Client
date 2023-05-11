document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = new FormData(e.target);
  console.log("line 5", form);
  const options = {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: form.get("username"),
      password: form.get("password"),
    }),
  };

  const response = await fetch(
    "https://florin-server-web.onrender.com/users/login",
    options
  );
  const data = await response.json();
  console.log(`data in login submit: ${data}`);
  if (response.status == 200) {
    console.log(`Setting local token to: ${data}`);
    localStorage.setItem("token", data.token);
    window.location.assign("board.html");
  } else {
    alert(data.error);
  }
});
