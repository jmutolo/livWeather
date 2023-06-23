// Make an API request to fetch weather data
function fetchWeatherData() {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=Asuncion`)
      .then(response => response.json())
      .then(data => {
        const temperature = data.current.temp_c;
        const temperatureElement = document.getElementById('temperature');
        temperatureElement.textContent = `Temperature: ${temperature}°C`;
      })
      .catch(error => console.error('Error fetching weather data:', error));
  }
  
  // Make an API request to fetch time data
function fetchTimeData() {
  fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=Asuncion`)
    .then(response => response.json())
    .then(data => {
      const location = data.location.name;
      const currentTime = data.current.time;
      const timeElement = document.getElementById('time');
      timeElement.textContent = `Current time in ${location}: ${currentTime}`;
    })
    .catch(error => console.error('Error fetching time data:', error));
}
  
  // Call the fetchWeatherData and fetchTimeData functions to retrieve and display the data
  fetchWeatherData();
  fetchTimeData();
  