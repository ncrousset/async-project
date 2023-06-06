const API = 'https://anime-db.p.rapidapi.com/anime?page=1&size=16&sortBy=ranking&sortOrder=asc';

const content = null || document.getElementById('content');
const errorContent = null || document.getElementById('error');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '86d701a669msh5c88f9c2d2d04d0p1b4c8ajsn364a0a3c852c',
		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const animeds = await fetchData(API);
        let view = `
                ${animeds.data.map(animed => 
                `<div class="group relative">
                <a href="${animed.link}" target="_blank">
                    <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="${animed.image}" alt="${animed.title}" class="w-full object-cover">
                    </div>
                    <div class="mt-4 flex justify-between">
                        <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                          
                            ${animed.title}
                        
                        </h3>
                    </div>
                    </a>
                </div>`).join('')}`;

                content.innerHTML = view;

    } catch (error) {
        const viewError = `
            <p class="text-white text-4xl font-bold">
                Lo siento, pero por el momento la API no está disponible. Estamos trabajando arduamente para solucionar este inconveniente y restablecer el servicio lo antes posible. Agradecemos tu comprensión y paciencia. Si tienes alguna pregunta o necesitas asistencia adicional, no dudes en contactarnos. Lamentamos cualquier inconveniente causado y esperamos poder brindarte un servicio completo muy pronto.
            </p>`;

        
        errorContent.innerHTML = viewError;

        errorContent.style.display = "block";
    }
})();

