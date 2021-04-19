window.addEventListener("load", () => {
    let long;
    let lat;
    let temperatureSection = document.querySelector(".temperature-section");
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let temperatureSpan = document.querySelector("temperature-span");
    let location = document.querySelector(".location-timezone");
    let displayIcon = document.querySelector(".icon");
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
     // console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const apiId = "bf0fce2d52e7dfbe115f3792e330b901";

            const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&lang=af&appid=${apiId}` 
            
            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data); 
                    const { temp } = data.main;
                    const { name } = data;
                    const { description, icon } = data.weather[0];
                    //  Formula for Celcius
                    let celcius = (temp - 273.15).toFixed();    //  can also use: Math.floor(temp - 273.15);
                    let fahrenheit = (temp - 459.67).toFixed();    //  can also use: Math.floor(temp - 459.67);

                    //  Set DOM Elements from the API
                    temperatureDegree.textContent = celcius;
                    temperatureDescription.textContent = description;
                    location.textContent = name;

                    //  Set Icon.
                    // setIcons
                    displayIcon.innerHTML = icon;

                    //  Change temperature to Celcius/Farenheit.
                    temperatureSection.addEventListener("click", () => {
                        if (temperatureSpan.textContent === "C") {
                            temperatureSpan.textContent = F;
                            temperatureDegree.textContent = fahrenheit;
                        } else {
                            temperatureSpan.textContent = "C";
                            temperatureDegree.textContent = celcius
                        }
                    })
                     

            })
        });

    }

    //  setIcons doesn't work yet!
    function setIcons(icon, iconId) {
        const skycons = new Skycons({ color: "white" });
        const currentIcon = icon.replace(/-/g, "_")//.toUppeCase();
        skycons.play();
        return skycons.set(iconId, Skycons[currentIcon]);
    }
});