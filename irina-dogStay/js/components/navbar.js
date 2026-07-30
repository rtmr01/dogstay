export function renderNavbar(activePage) {
    const bottomNavHtml = `
    <nav class="fixed bottom-0 left-0 w-full z-[35] flex justify-around items-center px-4 pb-safe-area-bottom pt-3 bg-surface-container dark:bg-surface-container-highest shadow-[0_-4px_20px_rgba(13,27,54,0.05)] rounded-t-lg md:hidden">
        <a href="#mapa" class="flex flex-col items-center justify-center ${activePage === 'mapa' ? 'bg-secondary-container text-on-secondary-container' : 'text-on-surface-variant hover:bg-surface-container-high'} rounded-xl px-5 py-2.5 scale-98 active:scale-95 duration-200 ease-out transition-all">
            <span class="material-symbols-outlined mb-1 ${activePage === 'mapa' ? 'icon-fill' : ''}" data-icon="map">map</span>
            <span class="font-label-sm text-label-sm">Map</span>
        </a>
        <a href="#explorar" class="flex flex-col items-center justify-center ${activePage === 'explorar' ? 'bg-secondary-container text-on-secondary-container' : 'text-on-surface-variant hover:bg-surface-container-high'} rounded-xl px-5 py-2.5 scale-98 active:scale-95 duration-200 ease-out transition-all">
            <span class="material-symbols-outlined mb-1 ${activePage === 'explorar' ? 'icon-fill' : ''}" data-icon="explore">explore</span>
            <span class="font-label-sm text-label-sm">Explore</span>
        </a>
        <a href="#conquistas" class="flex flex-col items-center justify-center ${activePage === 'conquistas' ? 'bg-secondary-container text-on-secondary-container' : 'text-on-surface-variant hover:bg-surface-container-high'} rounded-xl px-5 py-2.5 scale-98 active:scale-95 duration-200 ease-out transition-all">
            <span class="material-symbols-outlined mb-1 ${activePage === 'conquistas' ? 'icon-fill' : ''}" data-icon="military_tech">military_tech</span>
            <span class="font-label-sm text-label-sm">Achievements</span>
        </a>
        <a href="#perfil" class="flex flex-col items-center justify-center ${activePage === 'perfil' ? 'bg-secondary-container text-on-secondary-container' : 'text-on-surface-variant hover:bg-surface-container-high'} rounded-xl px-5 py-2.5 scale-98 active:scale-95 duration-200 ease-out transition-all">
            <span class="material-symbols-outlined mb-1 ${activePage === 'perfil' ? 'icon-fill' : ''}" data-icon="person">person</span>
            <span class="font-label-sm text-label-sm">Profile</span>
        </a>
    </nav>
    `;

    const desktopNavHtml = `
    <div class="hidden md:flex fixed top-0 left-0 w-full justify-between items-center px-gutter py-4 bg-surface z-50 shadow-sm">
        <div class="font-headline-lg text-headline-lg font-bold text-primary">Dog Stay</div>
        <div class="flex gap-8 items-center">
            <a href="#mapa" class="${activePage === 'mapa' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'} transition-colors flex items-center gap-2">
                <span class="material-symbols-outlined ${activePage === 'mapa' ? 'icon-fill' : ''}">map</span> Map
            </a>
            <a href="#explorar" class="${activePage === 'explorar' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'} transition-colors flex items-center gap-2">
                <span class="material-symbols-outlined ${activePage === 'explorar' ? 'icon-fill' : ''}">explore</span> Explore
            </a>
            <a href="#conquistas" class="${activePage === 'conquistas' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'} transition-colors flex items-center gap-2">
                <span class="material-symbols-outlined ${activePage === 'conquistas' ? 'icon-fill' : ''}">military_tech</span> Achievements
            </a>
            <a href="#perfil" class="${activePage === 'perfil' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'} transition-colors flex items-center gap-2">
                <span class="material-symbols-outlined ${activePage === 'perfil' ? 'icon-fill' : ''}">person</span> Profile
            </a>
        </div>
        <div class="flex gap-4 items-center">
            <button class="w-10 h-10 rounded-full bg-surface shadow-sm flex items-center justify-center text-primary">
                <span class="material-symbols-outlined">notifications</span>
            </button>
            <div class="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden ring-2 ring-primary-fixed">
                <img class="w-full h-full object-cover" data-alt="Avatar portrait" src="assets/charlie.jpg"/>
            </div>
        </div>
    </div>
    `;

    document.getElementById('bottom-nav-container').innerHTML = bottomNavHtml;
    document.getElementById('desktop-nav-container').innerHTML = desktopNavHtml;
}
