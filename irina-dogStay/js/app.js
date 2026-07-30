import { renderNavbar } from './components/navbar.js?v=2';
import { renderMapa, initMap } from './pages/mapa.js?v=2';
import { renderConquistas } from './pages/conquistas.js?v=2';
import { renderExplorar } from './pages/explorar.js?v=2';
import { renderPerfil } from './pages/perfil.js?v=2';
import { renderFiltroMatch } from './components/filtro-match.js?v=2';
import { renderDetalheLocal } from './components/detalhe-local.js?v=2';

const routes = {
    'mapa': renderMapa,
    'conquistas': renderConquistas,
    'explorar': renderExplorar,
    'perfil': renderPerfil
};

let currentRoute = '';

function navigateTo(route) {
    const pageId = route.replace('#', '') || 'mapa';
    
    if (routes[pageId]) {
        currentRoute = pageId;
        const appContainer = document.getElementById('app');
        
        // Render the page
        appContainer.innerHTML = routes[pageId]();
        
        // Update nav UI
        renderNavbar(pageId);
        
        // Execute page-specific scripts (e.g. SVG animations, map bindings)
        if (pageId === 'conquistas') {
            // Re-trigger CSS animation
            const progress = document.querySelector('.circular-progress');
            if(progress) {
                progress.style.animation = 'none';
                progress.offsetHeight; // trigger reflow
                progress.style.animation = null; 
            }
        } else if (pageId === 'mapa') {
            initMap();
        }
        
        setupInteractions();
    }
}

// Intercept all hash changes
window.addEventListener('hashchange', () => {
    navigateTo(window.location.hash);
});

// Setup dynamic interactions (like opening overlays)
function setupInteractions() {
    // Open Filtro Match overlay
    const tuneBtns = document.querySelectorAll('[data-action="open-filtro"]');
    tuneBtns.forEach(tuneBtn => {
        tuneBtn.addEventListener('click', () => {
            const container = document.getElementById('filtro-container');
            container.innerHTML = renderFiltroMatch();
            document.getElementById('filtro-overlay').classList.remove('overlay-hidden');
            document.getElementById('filtro-overlay').classList.add('overlay-visible');
            
            // Re-bind slider for Filtro
            const slider = document.getElementById('energySlider');
            const label = document.getElementById('energyLabel');
            if (slider && label) {
                const states = { "1": "Lazy", "2": "Active", "3": "Hyperactive" };
                slider.addEventListener('input', (e) => {
                    label.textContent = states[e.target.value];
                });
            }
        });
    });

    // Open Detalhe overlay
    const placeCard = document.querySelector('[data-action="open-detalhe"]');
    if (placeCard) {
        placeCard.addEventListener('click', () => {
            const container = document.getElementById('detalhe-container');
            container.innerHTML = renderDetalheLocal();
            document.getElementById('detalhe-overlay').classList.remove('overlay-hidden');
            document.getElementById('detalhe-overlay').classList.add('overlay-visible');
        });
    }

    // Open Search overlay
    const searchBtns = document.querySelectorAll('[data-action="open-search"]');
    searchBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            document.getElementById('search-overlay').classList.remove('overlay-hidden');
            document.getElementById('search-overlay').classList.add('overlay-visible');
            setTimeout(() => {
                document.getElementById('global-search-input')?.focus();
            }, 300);
        });
    });
    
    // Close overlays from their backgrounds
    document.querySelectorAll('.overlay-container').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('overlay-visible');
                overlay.classList.add('overlay-hidden');
            }
        });
    });
}

// Global function to close overlays from inside
window.closeOverlay = function(id) {
    const overlay = document.getElementById(id);
    if(overlay) {
        overlay.classList.remove('overlay-visible');
        overlay.classList.add('overlay-hidden');
    }
}

// Initialization
function init() {
    renderNavbar('mapa'); // Initial render
    navigateTo(window.location.hash || '#mapa');
}

window.addEventListener('DOMContentLoaded', init);
