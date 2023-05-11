document
  .getElementById("register-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    // const isBusinessResult = form.get('isBusiness') === null ? 0 : 1
    // console.log(isAdminResult, );
    // console.log(isBusinessResult, );

    const userType = document.querySelector(
      'input[name ="radio-btn"]:checked'
    ).id;
    console.log("register", userType);
    const isBusinessResult = userType === "isBusiness" ? 1 : 0;
    const isAdminResult = userType === "isAdmin" ? 1 : 0;

    console.log(isAdminResult);
    console.log(isBusinessResult);

    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: form.get("username"),
        password: form.get("password"),
        isAdmin: isAdminResult,
        isBusiness: isBusinessResult,
      }),
    };

    const response = await fetch(
      "https://florin-server-web.onrender.com/users/register",
      options
    );
    const data = await response.json();
    try {
      window.location.assign("login.html");
      localStorage.setItem("username", form.get("username"));
    } catch (error) {
      console.log(error.message);
    }
  });
