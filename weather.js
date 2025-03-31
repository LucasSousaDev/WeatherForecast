const API_KEY = '759b78f25974d23af69e986d20fadda4';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

async function getWeather(city) {
    try {
        const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`);
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'Erro ao buscar dados do clima');
        }

        return {
            temperatura: Math.round(data.main.temp),
            descricao: data.weather[0].description,
            umidade: data.main.humidity,
            velocidadeVento: data.wind.speed,
            cidade: data.name,
            weather: data.weather
        };
    } catch (error) {
        console.error('Erro:', error.message);
        throw error;
    }
}

// Exportar a função para uso em outros arquivos
export { getWeather };