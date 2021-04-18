window.addEventListener("load", () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let location = document.querySelector(".location-timezone");
     
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            // console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const apiId = "bf0fce2d52e7dfbe115f3792e330b901";

            const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiId}` 
            
            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data); 
                    const { temp } = data.main;
                    const { description, icon } = data.weather[0];
                    //  Set DOM Elements from the API
                    temperatureDegree.textContent = temp;
                    temperatureDescription.textContent = description;
                    location.textContent = data.sys.country;
                    //  Set Icon.
                    setIcons(icon,document.querySelector(".icon"));
            })
        });

    }
    function setIcons(icon, iconId) {
        const skycons = new Skycons({ color: "white" });
        const currentIcon = icon.replace(/-/g, "_").toUppeCase();
        skycons.play();
        return skycons.set(iconId, Skycons[currentIcon]);
    }
});