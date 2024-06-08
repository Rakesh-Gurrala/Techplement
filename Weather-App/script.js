window.addEventListener("load", () => {
    let locationEl = document.getElementById("location");
    let iconEl = document.getElementById("icon");
    let descriptionEl = document.getElementById("description");
    let tempEl = document.getElementById("temp");
    let unitEl = document.getElementById("unit");
    let searchInputEl = document.getElementById("search-input");
    let searchBtn = document.getElementById("search-btn");
    
    searchBtn.addEventListener("click", () => {
        let city = searchInputEl.value;
        if (city.trim() !== "") {
            getweatherData(city);
        }
    });

    function getweatherData(city) {
        let apikey = "6bf9a2e6f658dd315c72dba6f891f073";

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
        .then(response => response.json())
        .then(data => {
            locationEl.textContent = data.name;
            descriptionEl.textContent = data.weather[0].description;
            tempEl.textContent = Math.round(data.main.temp - 273.15) + " °C";
            iconEl.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            console.log(data);
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
        });
    }
});