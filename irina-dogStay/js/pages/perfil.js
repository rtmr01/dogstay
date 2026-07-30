export function renderPerfil() {
    return `
    <div class="h-full overflow-y-auto pb-safe-area-bottom pt-safe-area-top md:pt-24">
        <header class="bg-surface dark:bg-surface-dim md:hidden flex justify-between items-center px-gutter py-4 w-full sticky top-0 z-40">
            <h1 class="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary dark:text-primary-fixed tracking-tight">Dog Stay</h1>
            <div class="flex gap-4">
                <button class="text-on-surface-variant hover:bg-surface-container-low transition-colors rounded-full p-2 scale-95 active:opacity-80 transition-all">
                    <span class="material-symbols-outlined" data-icon="settings">settings</span>
                </button>
            </div>
        </header>

        <main class="px-gutter py-6 max-w-2xl mx-auto space-y-8">
            <!-- Hero Profile Section -->
            <section class="flex flex-col items-center text-center">
                <div class="relative w-32 h-32 rounded-full overflow-hidden border-4 border-surface shadow-xl mb-4">
                    <img alt="Dog Avatar" class="w-full h-full object-cover object-center" src="assets/charlie.jpg" />
                    <button class="absolute bottom-0 right-0 bg-primary text-on-primary rounded-full p-2 shadow-lg hover:scale-105 active:scale-95 transition-transform">
                        <span class="material-symbols-outlined text-sm">edit</span>
                    </button>
                </div>
                <h2 class="font-headline-xl-mobile text-headline-xl-mobile text-primary font-bold">Charlie</h2>
                <p class="text-on-surface-variant font-body-md mt-1">English Cocker Spaniel • 3 Years Old</p>
            </section>

            <!-- Basic Stats Grid -->
            <section class="grid grid-cols-3 gap-3">
                <div class="bg-surface-container-lowest p-4 rounded-[20px] text-center shadow-sm border border-surface-variant">
                    <span class="material-symbols-outlined text-primary mb-2 text-[28px]" style="font-variation-settings: 'FILL' 1;">monitor_weight</span>
                    <h4 class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wide">Weight</h4>
                    <p class="font-button-text text-button-text text-primary mt-1">32 kg</p>
                </div>
                <div class="bg-surface-container-lowest p-4 rounded-[20px] text-center shadow-sm border border-surface-variant">
                    <span class="material-symbols-outlined text-primary mb-2 text-[28px]" style="font-variation-settings: 'FILL' 1;">straighten</span>
                    <h4 class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wide">Size</h4>
                    <p class="font-button-text text-button-text text-primary mt-1">Large</p>
                </div>
                <div class="bg-surface-container-lowest p-4 rounded-[20px] text-center shadow-sm border border-surface-variant">
                    <span class="material-symbols-outlined text-primary mb-2 text-[28px]" style="font-variation-settings: 'FILL' 1;">male</span>
                    <h4 class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wide">Sex</h4>
                    <p class="font-button-text text-button-text text-primary mt-1">Male</p>
                </div>
            </section>

            <!-- Vaccination Card -->
            <section class="bg-surface-container-lowest rounded-[24px] p-6 border border-surface-variant shadow-[0_4px_20px_rgba(13,27,54,0.05)]">
                <div class="flex justify-between items-center mb-6">
                    <h3 class="font-headline-lg-mobile text-headline-lg-mobile text-primary font-bold">Vaccination Card</h3>
                    <button class="text-secondary font-button-text text-button-text hover:underline">View All</button>
                </div>
                
                <div class="space-y-4">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center shrink-0">
                                <span class="material-symbols-outlined text-on-primary-fixed" data-icon="vaccines">vaccines</span>
                            </div>
                            <div>
                                <h4 class="font-button-text text-button-text text-on-surface">Rabies</h4>
                                <p class="font-body-md text-sm text-on-surface-variant">Given: 12 May 2025</p>
                            </div>
                        </div>
                        <span class="bg-primary-container text-on-primary-container px-3 py-1 rounded-full font-label-sm text-xs">Up to date</span>
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center shrink-0">
                                <span class="material-symbols-outlined text-on-primary-fixed" data-icon="vaccines">vaccines</span>
                            </div>
                            <div>
                                <h4 class="font-button-text text-button-text text-on-surface">V10 (Multiple)</h4>
                                <p class="font-body-md text-sm text-on-surface-variant">Given: 05 Aug 2025</p>
                            </div>
                        </div>
                        <span class="bg-primary-container text-on-primary-container px-3 py-1 rounded-full font-label-sm text-xs">Up to date</span>
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 rounded-full bg-error-container flex items-center justify-center shrink-0">
                                <span class="material-symbols-outlined text-on-error-container" data-icon="warning">warning</span>
                            </div>
                            <div>
                                <h4 class="font-button-text text-button-text text-on-surface">Deworming</h4>
                                <p class="font-body-md text-sm text-on-surface-variant">Due: 10 Dec 2025</p>
                            </div>
                        </div>
                        <span class="bg-error text-on-error px-3 py-1 rounded-full font-label-sm text-xs">Due Soon</span>
                    </div>
                </div>
            </section>

            <!-- Preferences & Behaviors -->
            <section class="bg-surface-container-lowest rounded-[24px] p-6 border border-surface-variant shadow-[0_4px_20px_rgba(13,27,54,0.05)] mb-12">
                <h3 class="font-headline-lg-mobile text-headline-lg-mobile text-primary font-bold mb-6">Preferences & Behaviors</h3>
                
                <div class="space-y-4">
                    <div class="flex items-start gap-4">
                        <span class="material-symbols-outlined text-secondary mt-0.5">sentiment_satisfied</span>
                        <div>
                            <h4 class="font-button-text text-button-text text-on-surface">Super Friendly</h4>
                            <p class="font-body-md text-sm text-on-surface-variant">Loves people, kids, and other dogs. Very playful and gentle.</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start gap-4">
                        <span class="material-symbols-outlined text-secondary mt-0.5">thunderstorm</span>
                        <div>
                            <h4 class="font-button-text text-button-text text-on-surface">Afraid of Thunder</h4>
                            <p class="font-body-md text-sm text-on-surface-variant">Gets anxious during loud noises like fireworks or thunderstorms.</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start gap-4">
                        <span class="material-symbols-outlined text-secondary mt-0.5">restaurant</span>
                        <div>
                            <h4 class="font-button-text text-button-text text-on-surface">Food Motivated</h4>
                            <p class="font-body-md text-sm text-on-surface-variant">Will do anything for a treat, especially peanut butter.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
    `;
}
