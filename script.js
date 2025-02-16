// City Data
const cityData = {
    madrid: {
        name: "Madrid",
        monuments: ["Palacio Real", "Plaza Mayor"],
        gastronomy: ["Cocido madrileño", "Churros con chocolate"],
        events: ["Feria de San Isidro", "Noche en Blanco"],
        curiosity: "Madrid es la capital más alta de Europa occidental."
    },
    barcelona: {
        name: "Barcelona",
        monuments: ["Sagrada Familia", "Park Güell"],
        gastronomy: ["Paella", "Crema catalana"],
        events: ["La Mercè", "Diada Nacional de Catalunya"],
        curiosity: "Barcelona ha sido sede de los Juegos Olímpicos en 1992."
    },
    sevilla: {
        name: "Sevilla",
        monuments: ["Catedral de Sevilla", "Alcázar"],
        gastronomy: ["Tortilla de camarones", "Salmorejo"],
        events: ["Semana Santa", "Feria de Abril"],
        curiosity: "Sevilla tiene el archivo de Indias, donde se guardan documentos del Nuevo Mundo."
    },
    valencia: {
        name: "Valencia",
        monuments: ["Ciutat de les Arts i les Ciències", "Catedral de Valencia"],
        gastronomy: ["Paella valenciana", "Horchata y fartons"],
        events: ["Falles", "Tomatina"],
        curiosity: "La paella originale viene da Valencia."
    },
    granada: {
        name: "Granada",
        monuments: ["Alhambra", "Generalife"],
        gastronomy: ["Habas con jamón", "Piononos"],
        events: ["Festival Internacional de Música y Danza", "Feria de Corpus Christi"],
        curiosity: "L'Alhambra è considerata uno dei sette meravigliosi monumenti di Spagna."
    },
    bilbao: {
        name: "Bilbao",
        monuments: ["Museo Guggenheim", "Catedral de Santiago"],
        gastronomy: ["Pintxos", "Mariscos"],
        events: ["Aste Nagusia", "Gran Prix de Euskadi"],
        curiosity: "Il Museo Guggenheim Bilbao è uno dei musei contemporanei più famosi al mondo."
    },
    malaga: {
        name: "Málaga",
        monuments: ["Alcazaba", "Castillo de Gibralfaro"],
        gastronomy: ["Boquerones en vinagre", "Gazpacho"],
        events: ["Feria de Málaga", "Semana Santa"],
        curiosity: "Málaga è la città natale di Pablo Picasso."
    }
};

// Function to display city info in modal
function showCityInfo(cityKey) {
    const city = cityData[cityKey];
    if (!city) return;

    const modalContent = document.getElementById('city-info-content');
    modalContent.innerHTML = `
        <h3>${city.name}</h3>
        <h4>Monumentos:</h4>
        <ul>
            ${city.monuments.map(monument => `<li>${monument}</li>`).join('')}
        </ul>
        <h4>Gastronomía:</h4>
        <ul>
            ${city.gastronomy.map(food => `<li>${food}</li>`).join('')}
        </ul>
        <h4>Eventos:</h4>
        <ul>
            ${city.events.map(event => `<li>${event}</li>`).join('')}
        </ul>
        <p><strong>Curiosidad:</strong> ${city.curiosity}</p>
    `;

    const modal = new bootstrap.Modal(document.getElementById('city-info-modal'));
    modal.show();
}

// Scroll to cities section
function scrollToCities() {
    document.getElementById('cities').scrollIntoView({ behavior: 'smooth' });
}