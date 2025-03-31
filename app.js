import { getWeather } from './weather.js';

// Elementos do DOM
const cityInput = document.getElementById('city-input');
const cityElement = document.getElementById('city');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const humidityElement = document.getElementById('humidity');
const windSpeedElement = document.getElementById('wind-speed');

// Função para atualizar a interface com os dados do clima
async function updateWeatherUI(city) {
    try {
        const weatherData = await getWeather(city);
        
        // Atualiza os elementos da interface
        cityElement.textContent = weatherData.cidade;
        temperatureElement.textContent = weatherData.temperatura;
        descriptionElement.textContent = weatherData.descricao;
        humidityElement.textContent = `${weatherData.umidade}%`;
        windSpeedElement.textContent = `${Math.round(weatherData.velocidadeVento * 3.6)} km/h`;
        
        // Mostra os dados do clima
        document.querySelector('.weather-data').style.display = 'block';
    } catch (error) {
        alert('Erro ao buscar dados do clima. Verifique o nome da cidade.');
    }
}

// Função para buscar o clima quando o botão for clicado
window.searchWeather = async () => {
    const city = cityInput.value.trim();
    if (city) {
        await updateWeatherUI(city);
    }
};

// Adiciona evento para buscar quando pressionar Enter
cityInput.addEventListener('keypress', async (e) => {
    if (e.key === 'Enter') {
        await searchWeather();
    }
}); 