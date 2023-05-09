document.getElementById("register-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
   
    const isAdminResult = form.get('isAdmin') === null ? 0 : 1
    console.log(form.get)
    const isBusinessResult = form.get('isBusiness') === null ? 0 : 1

     console.log(isAdminResult)
    console.log(isAdminResult)
    const options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: form.get("username"),
            password: form.get("password"),
            isAdmin: isAdminResult,
            isBusiness: isBusinessResult,
            
        })
    }   
    



    const response = await fetch("https://florin-server-web.onrender.com/users/register", options);
    const data = await response.json();

    if (response.status !== 201) {
        window.location.assign("login.html");

    } else {
        alert(data.error);
    }
})
document.getElementsByName('check-box')
.forEach(radio =>{
    if(radio.checked){
        console.log(radio.value)
    }
})
