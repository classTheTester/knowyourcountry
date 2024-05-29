function getWeather() {
    const apikey = '80d4bdc85b9ee3eaf656e2d260cba5f2';
    const city = document.getElementById('city').value;
    if (!city) {
        alert('Please enter a city :)');
        return;
    }
    const currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}';
    const forecastUrl = https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}';
    

}
function getWeather() {
    fetch(currentWeatherurl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error Fetching Current Weather data: ', error);
            alert('Error Fetching Current Weather data. Please try again. :)');
        });

}
function getWeather() {
    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            displayHourlyForecast(data.list);
        })
        .catch(error => {
            console.error('Error Fetching Current Weather data: ', error);
            alert('Error Fetching Current Weather data. Please try again. :)');
        });

}
function displayWeather(data) {

    const tempDivInfo = document.getElementById('temp-div');
    const weatherInfoDiv = document.getElementByID('weather-info');
    const weatherIcon = document.getElementByID('weather-icon');
    const hourlyForecastDiv = document.getElementByID('hourly-forecast');

    // clear previous content
    weatherInfoDiv.innerHTML = '';
    hourlyForecastDiv.innerHTML = '';
    tempDivInfo.innerHTML = '';


}
function displayWeather(data) {
    if (data.cod === '404') {
        weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
    } else {
        const cityName = data.name;
        const temperature = Math.round(data.main.temp - 273.15);
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

        const temperatureHTML = `
            < p > ${ temperature }°C</p>
        `;
        const weatherHTML = `
         <p>${cityName}</p>
         <p>${description}</p>
         `;

        tempDivInfo.innerHTML = temperatureHTML;
        weatherInfoDiv.innerHTML = weatherHTML;
        weatherIcon.src = iconUrl;
        weatherIcon.alt = description;

        showImage();



    }
}
function displayHourlyForecast(hourlyData) {

    const hourlyForecastDiv = document.getElementById('hourly-forecast');
    const next24Hours = hourlyData.slice(0, 8);

    next24Hours.forEach(item => {

        const dateTime = new Date(item.dt * 1000);
        const hour = dateTime.getHours();
        const temperature = Math.round(item.main.temp - 273.15);
        const iconCode = item.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

        const hourlyItemHTML = `
            <div class = "hourly-item">
                <span>${hour}:00</span>
                <img src="${iconUrl}" alt="Hourly Weather Icon">
                <span>${temperature}°C</span>
            </div>
         `;
         hourlyForecastDiv.innerHTML += hourlyItemHTML;

            

    });
}
function showImage() {

    const weatherIcon = document.getElemetById('weather-icon');
    weatherIcon.style.display = 'block';

}

