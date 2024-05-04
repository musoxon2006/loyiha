document.getElementById('search-btn').addEventListener('click', async () => {
    const city = document.getElementById('search').value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=3a0862c4c18e9744a737abb33c15e5e9`);
    const data = await response.json();

    if (data.cod === '404') {
        alert('City not found. Please enter a valid city name.');
        return;
    }

    document.getElementById('city-name').innerHTML = data.name;
    document.getElementById('country-code').innerHTML = data.sys.country;
    document.getElementById('clouds').innerHTML = `Clouds: ${data.clouds.all}%`;
    document.getElementById('wind-speed').innerHTML = `Wind Speed: ${data.wind.speed} m/s`;
    document.getElementById('temperature').innerHTML = `Temperature: ${data.main.temp}°C`;

    document.getElementById('weather-info').classList.remove('hidden');
});