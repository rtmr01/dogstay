export function renderExplorar() {
    return `
    <div class="h-full overflow-y-auto pb-safe-area-bottom pt-safe-area-top md:pt-24 bg-surface">
        <header class="bg-surface dark:bg-surface-dim md:hidden flex justify-between items-center px-gutter py-4 w-full sticky top-0 z-40 shadow-sm">
            <h1 class="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary dark:text-primary-fixed tracking-tight">Explore Toronto</h1>
            <div class="flex gap-4">
                <button class="text-on-surface-variant hover:bg-surface-container-low transition-colors rounded-full p-2 scale-95 active:opacity-80 transition-all">
                    <span class="material-symbols-outlined" data-icon="search">search</span>
                </button>
            </div>
        </header>

        <main class="px-gutter py-6 max-w-2xl mx-auto space-y-6">
            <h2 class="font-headline-lg text-primary font-bold mb-4">Nearby Places</h2>

            <!-- Place Card 1 -->
            <div data-action="open-detalhe" class="bg-surface-container-lowest rounded-[20px] shadow-[0_8px_24px_rgba(22,52,46,0.08)] p-4 cursor-pointer card-press border border-surface-variant flex gap-4">
                <div class="w-24 h-24 rounded-xl overflow-hidden shrink-0">
                    <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1548779951-692797682f9d?w=300&q=80" alt="High Park"/>
                </div>
                <div class="flex flex-col justify-center">
                    <div class="flex items-center gap-1 mb-1">
                        <span class="material-symbols-outlined text-[14px] text-secondary" style="font-variation-settings: 'FILL' 1;">star</span>
                        <span class="font-label-sm text-label-sm font-bold text-on-surface">4.9</span>
                        <span class="font-body-md text-[12px] text-on-surface-variant ml-1">• Park • 0.8km</span>
                    </div>
                    <h3 class="font-headline-lg-mobile text-lg font-bold text-primary">High Park Off-Leash</h3>
                    <p class="font-body-md text-sm text-on-surface-variant mt-1 line-clamp-2">A massive fenced area with trails and a dog fountain.</p>
                </div>
            </div>

            <!-- Place Card 2 -->
            <div data-action="open-detalhe" class="bg-surface-container-lowest rounded-[20px] shadow-[0_8px_24px_rgba(22,52,46,0.08)] p-4 cursor-pointer card-press border border-surface-variant flex gap-4">
                <div class="w-24 h-24 rounded-xl overflow-hidden shrink-0">
                    <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=300&q=80" alt="Cafe"/>
                </div>
                <div class="flex flex-col justify-center">
                    <div class="flex items-center gap-1 mb-1">
                        <span class="material-symbols-outlined text-[14px] text-secondary" style="font-variation-settings: 'FILL' 1;">star</span>
                        <span class="font-label-sm text-label-sm font-bold text-on-surface">4.7</span>
                        <span class="font-body-md text-[12px] text-on-surface-variant ml-1">• Cafe • 1.2km</span>
                    </div>
                    <h3 class="font-headline-lg-mobile text-lg font-bold text-primary">Pawfect Brew</h3>
                    <p class="font-body-md text-sm text-on-surface-variant mt-1 line-clamp-2">Cozy indoor seating for you and your furry friend. Free treats!</p>
                </div>
            </div>

            <!-- Place Card 3 -->
            <div data-action="open-detalhe" class="bg-surface-container-lowest rounded-[20px] shadow-[0_8px_24px_rgba(22,52,46,0.08)] p-4 cursor-pointer card-press border border-surface-variant flex gap-4">
                <div class="w-24 h-24 rounded-xl overflow-hidden shrink-0">
                    <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&q=80" alt="Vet"/>
                </div>
                <div class="flex flex-col justify-center">
                    <div class="flex items-center gap-1 mb-1">
                        <span class="material-symbols-outlined text-[14px] text-secondary" style="font-variation-settings: 'FILL' 1;">star</span>
                        <span class="font-label-sm text-label-sm font-bold text-on-surface">5.0</span>
                        <span class="font-body-md text-[12px] text-on-surface-variant ml-1">• Vet • 2.5km</span>
                    </div>
                    <h3 class="font-headline-lg-mobile text-lg font-bold text-primary">Downtown Animal Clinic</h3>
                    <p class="font-body-md text-sm text-on-surface-variant mt-1 line-clamp-2">24/7 emergency care and routine checkups with specialists.</p>
                </div>
            </div>
            
            <!-- Place Card 4 -->
            <div data-action="open-detalhe" class="bg-surface-container-lowest rounded-[20px] shadow-[0_8px_24px_rgba(22,52,46,0.08)] p-4 cursor-pointer card-press border border-surface-variant flex gap-4">
                <div class="w-24 h-24 rounded-xl overflow-hidden shrink-0">
                    <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&q=80" alt="Park"/>
                </div>
                <div class="flex flex-col justify-center">
                    <div class="flex items-center gap-1 mb-1">
                        <span class="material-symbols-outlined text-[14px] text-secondary" style="font-variation-settings: 'FILL' 1;">star</span>
                        <span class="font-label-sm text-label-sm font-bold text-on-surface">4.5</span>
                        <span class="font-body-md text-[12px] text-on-surface-variant ml-1">• Park • 3.1km</span>
                    </div>
                    <h3 class="font-headline-lg-mobile text-lg font-bold text-primary">Cherry Beach Dog Park</h3>
                    <p class="font-body-md text-sm text-on-surface-variant mt-1 line-clamp-2">Fenced dog beach where your pet can swim safely.</p>
                </div>
            </div>
        </main>
    </div>
    `;
}
