document.getElementById("log-out").addEventListener("click", async (e) => {
    e.preventDefault();
  
    const options = {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        'Authorization': localStorage.getItem("token")
      }
    };
  
    const response = await fetch("https://florin-server-web.onrender.com/users/logout", options);
    // const data = await response.json();
    
    console.log('before',localStorage.getItem("token"))
    localStorage.removeItem("token");
    console.log('after',localStorage.getItem("token"))
    window.location.assign("login.html");
  });
  
  console.log("Loaded!");