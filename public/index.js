


function fetchServices() {
    fetch("https://florin-county-council-client.onrender.com/posts/services")
    .then(resp => resp.json())
    .then(console.log(data))
  }

  function addService(data){
    const services = data
    console.log()
  }
  fetchServices()