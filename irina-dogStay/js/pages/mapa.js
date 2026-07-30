export function renderMapa() {
    return `
    <div id="leaflet-map" class="absolute inset-0 z-0 h-full w-full"></div>
    
    <!-- Top Area (Mobile) -->
    <div class="relative z-30 w-full md:hidden">
        <div class="px-gutter pt-safe-area-top pb-4 flex justify-between items-center bg-gradient-to-b from-surface/80 to-transparent backdrop-blur-sm">
            <div class="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary">Dog Stay</div>
            <div class="flex gap-4">
                <button class="w-10 h-10 rounded-full bg-surface shadow-md flex items-center justify-center text-primary active:scale-95 transition-transform">
                    <span class="material-symbols-outlined" data-icon="notifications">notifications</span>
                </button>
                <div class="w-10 h-10 rounded-full bg-surface-container-high shadow-md overflow-hidden ring-2 ring-primary-fixed border-2 border-surface">
                    <img alt="Pet Avatar" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCKkBsN7xZyVuNLxL1fvCBd0kMOl6x-fosdhj3okBjBrvtO7LA5LaiVeNqCtG1u7GH_6Q6cXV7J1yK5E2jMd8Tr0g5CzSU7NsX9mBgoYSSRoLpV1ZtVb7NV6SmB4pbt9Vk6hjQsZhsqkETv3gC8xIt56q2Yh8g5VwxCiUcEE5BaJ_tqcBFXKl9luYwAExwOD3AJ13wX2hgkRh95XvcN-NDg-vM4nG82fZgCLhGzIU9WpY1M6BrLM62"/>
                </div>
            </div>
        </div>
        
        <!-- Pata Quente Widget -->
        <div class="px-gutter mt-2">
            <div class="bg-secondary-container text-on-secondary-container rounded-lg p-4 shadow-[0_8px_16px_rgba(253,154,111,0.2)] flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                    <span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">wb_sunny</span>
                </div>
                <div>
                    <h3 class="font-button-text text-button-text font-bold mb-1">Warning: Hot asphalt (32°C)</h3>
                    <p class="font-body-md text-body-md text-sm opacity-90 leading-tight">Prefer shaded parks to avoid burning paws.</p>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Thumb-Zone / Bottom Sheet Area -->
    <div class="absolute bottom-[100px] left-0 w-full px-gutter flex flex-col gap-4 pointer-events-none z-40">
        <!-- Search Bar (Thumb accessible) -->
        <div class="bg-surface rounded-xl shadow-[0_8px_24px_rgba(22,52,46,0.08)] p-3 flex items-center gap-3 pointer-events-auto border border-surface-variant">
            <span class="material-symbols-outlined text-primary px-2">search</span>
            <input id="map-search-input" class="bg-transparent border-none focus:ring-0 w-full font-body-md text-body-md text-on-surface placeholder:text-outline p-0" placeholder="Search for parks, cafes, vets..." type="text"/>
            <button data-action="open-filtro" class="bg-primary-container text-on-primary-container p-2 rounded-lg aspect-square flex items-center justify-center hover:opacity-90 transition-opacity">
                <span class="material-symbols-outlined">tune</span>
            </button>
        </div>
        

    </div>
    
    <!-- FAB (Contextual for Map - Maybe "Center on me" or "Add Place") -->
    <button class="fixed right-6 bottom-[230px] w-14 h-14 bg-surface rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex items-center justify-center text-primary z-40 md:hidden active:scale-95 transition-transform pointer-events-auto">
        <span class="material-symbols-outlined">my_location</span>
    </button>
    `;
}

export function initMap() {
    // Check if map already exists to prevent re-initialization errors on navigation
    if (window.leafletMap) {
        window.leafletMap.remove();
    }
    
    // Initialize map
    const map = L.map('leaflet-map', {
        zoomControl: false
    }).setView([-8.0476, -34.8770], 15); // Default to Recife
    
    window.leafletMap = map;

    // Add CartoDB Voyager tiles (clean, light style fitting the app)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(map);

    // Create custom icons using the app's Tailwind/HTML styling
    const createIcon = (html) => {
        return L.divIcon({
            className: 'custom-leaflet-pin',
            html: html,
            iconSize: [48, 60], // approximate size of the pins
            iconAnchor: [24, 60] // anchor at the bottom center
        });
    };

    const parkHtml = `
        <div class="flex flex-col items-center group cursor-pointer z-10">
            <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
                <span class="material-symbols-outlined text-on-primary" style="font-variation-settings: 'FILL' 1;">park</span>
            </div>
            <div class="w-2 h-2 bg-primary rotate-45 -mt-1 shadow-lg"></div>
        </div>`;
        
    const cafeHtml = `
        <div class="flex flex-col items-center group cursor-pointer z-20">
            <div class="w-14 h-14 bg-secondary rounded-full flex items-center justify-center shadow-[0_12px_24px_rgba(150,72,36,0.3)] ring-4 ring-surface transform transition-transform scale-110">
                <span class="material-symbols-outlined text-on-secondary" style="font-variation-settings: 'FILL' 1;">local_cafe</span>
            </div>
            <div class="w-3 h-3 bg-secondary rotate-45 -mt-1.5 shadow-lg"></div>
        </div>`;
        
    const vetHtml = `
        <div class="flex flex-col items-center group cursor-pointer z-10">
            <div class="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
                <span class="material-symbols-outlined text-on-primary-container" style="font-variation-settings: 'FILL' 1;">medical_services</span>
            </div>
            <div class="w-2 h-2 bg-primary-container rotate-45 -mt-1 shadow-lg"></div>
        </div>`;

    const cities = {
        'recife': [-8.0476, -34.8770],
        'toronto': [43.6532, -79.3832],
        'zagreb': [45.8150, 15.9819],
        'brussels': [50.8503, 4.3517],
        'new york': [40.7128, -74.0060],
        'coimbra': [40.2033, -8.4103]
    };

    // Add 15 markers for all cities
    Object.keys(cities).forEach(city => {
        const [lat, lng] = cities[city];
        
        for (let i = 0; i < 5; i++) {
            // Generate random offsets around the center (roughly within ~1-2km)
            const latOffset1 = (Math.random() - 0.5) * 0.03;
            const lngOffset1 = (Math.random() - 0.5) * 0.03;
            L.marker([lat + latOffset1, lng + lngOffset1], {icon: createIcon(parkHtml)}).addTo(map);
            
            const latOffset2 = (Math.random() - 0.5) * 0.03;
            const lngOffset2 = (Math.random() - 0.5) * 0.03;
            const cafeMarker = L.marker([lat + latOffset2, lng + lngOffset2], {icon: createIcon(cafeHtml)}).addTo(map);
            cafeMarker.on('click', () => {
                const detailTrigger = document.querySelector('[data-action="open-detalhe"]');
                if (detailTrigger) detailTrigger.click();
            });
            
            const latOffset3 = (Math.random() - 0.5) * 0.03;
            const lngOffset3 = (Math.random() - 0.5) * 0.03;
            L.marker([lat + latOffset3, lng + lngOffset3], {icon: createIcon(vetHtml)}).addTo(map);
        }
    });

    // Add search listener
    const searchInput = document.getElementById('map-search-input');
    if (searchInput) {
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const query = searchInput.value.toLowerCase().trim();
                if (cities[query]) {
                    map.flyTo(cities[query], 15);
                } else {
                    alert('City not found. Try: Recife, Toronto, Zagreb, Brussels, New York, Coimbra');
                }
            }
        });
    }
}
