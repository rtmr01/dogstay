export function renderFiltroMatch() {
    return `
    <!-- Header -->
    <header class="flex justify-between items-center px-gutter py-4 w-full bg-surface rounded-t-3xl border-b border-surface-variant">
        <button onclick="closeOverlay('filtro-overlay')" class="w-touch-target-min h-touch-target-min flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors rounded-full scale-95 active:opacity-80">
            <span class="material-symbols-outlined text-2xl">close</span>
        </button>
        <div class="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary text-center">Dog Stay Match</div>
        <button class="w-touch-target-min h-touch-target-min flex items-center justify-center text-primary font-button-text text-button-text hover:bg-surface-container-low transition-colors rounded-full scale-95 active:opacity-80">
            Clear
        </button>
    </header>
    
    <!-- Main Content Canvas -->
    <main class="flex-1 overflow-y-auto px-gutter pb-32 pt-4">
        <p class="font-body-md text-body-md text-on-surface-variant mb-6 text-center">Find the ideal place for your best friend.</p>
        
        <!-- Porte do Cão (Visual Selector) -->
        <section class="mb-8">
            <h2 class="font-button-text text-button-text text-primary mb-4">Dog Size</h2>
            <div class="grid grid-cols-3 gap-3">
                <!-- Small -->
                <label class="cursor-pointer group">
                    <input checked="" class="peer sr-only" name="dog_size" type="radio" value="small"/>
                    <div class="flex flex-col items-center justify-center bg-surface-container rounded-[24px] p-4 border border-surface-variant shadow-[0_4px_20px_rgba(13,27,54,0.05)] transition-all peer-checked:bg-primary-fixed peer-checked:border-primary peer-checked:shadow-none group-active:scale-95 h-32">
                        <span class="material-symbols-outlined text-4xl mb-2 text-on-surface-variant peer-checked:text-primary">pets</span>
                        <span class="font-label-sm text-label-sm text-on-surface-variant peer-checked:text-on-primary-fixed-variant text-center">Small</span>
                    </div>
                </label>
                <!-- Medium -->
                <label class="cursor-pointer group">
                    <input class="peer sr-only" name="dog_size" type="radio" value="medium"/>
                    <div class="flex flex-col items-center justify-center bg-surface-container rounded-[24px] p-4 border border-surface-variant shadow-[0_4px_20px_rgba(13,27,54,0.05)] transition-all peer-checked:bg-primary-fixed peer-checked:border-primary peer-checked:shadow-none group-active:scale-95 h-32">
                        <span class="material-symbols-outlined text-[3rem] mb-2 text-on-surface-variant peer-checked:text-primary" style="font-variation-settings: 'FILL' 1;">pets</span>
                        <span class="font-label-sm text-label-sm text-on-surface-variant peer-checked:text-on-primary-fixed-variant text-center">Medium</span>
                    </div>
                </label>
                <!-- Large -->
                <label class="cursor-pointer group">
                    <input class="peer sr-only" name="dog_size" type="radio" value="large"/>
                    <div class="flex flex-col items-center justify-center bg-surface-container rounded-[24px] p-4 border border-surface-variant shadow-[0_4px_20px_rgba(13,27,54,0.05)] transition-all peer-checked:bg-primary-fixed peer-checked:border-primary peer-checked:shadow-none group-active:scale-95 h-32">
                        <span class="material-symbols-outlined text-[3.5rem] mb-2 text-on-surface-variant peer-checked:text-primary" style="font-variation-settings: 'FILL' 1;">sound_detection_dog_barking</span>
                        <span class="font-label-sm text-label-sm text-on-surface-variant peer-checked:text-on-primary-fixed-variant text-center">Large</span>
                    </div>
                </label>
            </div>
        </section>
        
        <!-- Nível de Energia (Slider) -->
        <section class="mb-10 bg-surface-container-low p-6 rounded-[24px] shadow-[0_4px_20px_rgba(13,27,54,0.05)] border border-surface-variant">
            <div class="flex justify-between items-end mb-6">
                <h2 class="font-button-text text-button-text text-primary">Energy Level</h2>
                <span class="font-label-sm text-label-sm text-secondary bg-secondary-fixed px-3 py-1 rounded-full" id="energyLabel">Active</span>
            </div>
            <div class="relative w-full px-2">
                <input class="w-full appearance-none bg-transparent" id="energySlider" max="3" min="1" type="range" value="2"/>
                <div class="flex justify-between text-on-surface-variant mt-4 font-label-sm text-label-sm px-1">
                    <span class="flex flex-col items-center gap-1"><span class="material-symbols-outlined text-lg">snooze</span>Lazy</span>
                    <span class="flex flex-col items-center gap-1"><span class="material-symbols-outlined text-lg">directions_walk</span>Active</span>
                    <span class="flex flex-col items-center gap-1"><span class="material-symbols-outlined text-lg">bolt</span>Hyperactive</span>
                </div>
            </div>
        </section>
        
        <!-- Amenidades (Visual Tags) -->
        <section class="mb-8">
            <h2 class="font-button-text text-button-text text-primary mb-4">Essential Amenities</h2>
            <div class="flex flex-wrap gap-3">
                <label class="cursor-pointer group">
                    <input checked="" class="peer sr-only" type="checkbox"/>
                    <div class="flex items-center gap-2 px-4 py-3 bg-surface-container rounded-full border border-surface-variant shadow-sm transition-all peer-checked:bg-secondary-fixed peer-checked:text-on-secondary-fixed peer-checked:border-secondary-container group-active:scale-95 text-on-surface-variant font-button-text text-button-text">
                        <span class="material-symbols-outlined text-xl">park</span>
                        Outdoor Space
                    </div>
                </label>
                <label class="cursor-pointer group">
                    <input class="peer sr-only" type="checkbox"/>
                    <div class="flex items-center gap-2 px-4 py-3 bg-surface-container rounded-full border border-surface-variant shadow-sm transition-all peer-checked:bg-secondary-fixed peer-checked:text-on-secondary-fixed peer-checked:border-secondary-container group-active:scale-95 text-on-surface-variant font-button-text text-button-text">
                        <span class="material-symbols-outlined text-xl">nature</span>
                        Shaded Area
                    </div>
                </label>
                <label class="cursor-pointer group">
                    <input class="peer sr-only" type="checkbox"/>
                    <div class="flex items-center gap-2 px-4 py-3 bg-surface-container rounded-full border border-surface-variant shadow-sm transition-all peer-checked:bg-secondary-fixed peer-checked:text-on-secondary-fixed peer-checked:border-secondary-container group-active:scale-95 text-on-surface-variant font-button-text text-button-text">
                        <span class="material-symbols-outlined text-xl">ac_unit</span>
                        Cool Floor
                    </div>
                </label>
                <label class="cursor-pointer group">
                    <input class="peer sr-only" type="checkbox"/>
                    <div class="flex items-center gap-2 px-4 py-3 bg-surface-container rounded-full border border-surface-variant shadow-sm transition-all peer-checked:bg-secondary-fixed peer-checked:text-on-secondary-fixed peer-checked:border-secondary-container group-active:scale-95 text-on-surface-variant font-button-text text-button-text">
                        <span class="material-symbols-outlined text-xl">water_drop</span>
                        Water Available
                    </div>
                </label>
            </div>
        </section>
    </main>
    
    <!-- Bottom Action Area -->
    <div class="bg-surface p-gutter pb-safe-area-bottom shadow-[0_-8px_30px_rgba(13,27,54,0.05)] border-t border-surface-variant mt-auto shrink-0">
        <button onclick="closeOverlay('filtro-overlay')" class="w-full h-[64px] bg-secondary text-on-secondary rounded-[24px] font-button-text text-button-text flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(150,72,36,0.3)] active:scale-98 active:shadow-none transition-all">
            <span class="material-symbols-outlined">search</span>
            Find Perfect Match
        </button>
    </div>
    `;
}
