
fetch('https://ipapi.co/json/')
  .then(response => response.json())
  .then(data => {
    console.log("Country:", data.country_name);
    console.log("Region:", data.region);
    console.log("City:", data.city);

    document.getElementById("location").innerText =
      `${data.city}, ${data.region}, ${data.country_name}`;
  })
  .catch(error => console.error(error));