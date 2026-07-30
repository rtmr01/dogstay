export function renderConquistas() {
    return `
    <div class="h-full overflow-y-auto pb-safe-area-bottom pt-safe-area-top md:pt-24">
        <header class="bg-surface dark:bg-surface-dim md:hidden flex justify-between items-center px-gutter py-4 w-full sticky top-0 z-40">
            <h1 class="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary dark:text-primary-fixed tracking-tight">Dog Stay</h1>
            <div class="flex gap-4">
                <button class="text-on-surface-variant hover:bg-surface-container-low transition-colors rounded-full p-2 scale-95 active:opacity-80 transition-all">
                    <span class="material-symbols-outlined" data-icon="notifications">notifications</span>
                </button>
                <button class="text-on-surface-variant hover:bg-surface-container-low transition-colors rounded-full p-2 scale-95 active:opacity-80 transition-all overflow-hidden h-10 w-10">
                    <img class="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDH_kaiTadUx8wT6P18d4H9FYuO-ADux6-61ZDNokOjiU8HbEypXKWmzPvG58c4AUQt4SjTnDyu476zaFaca0mn8epquUmxongYV-QCk4o-oClB-r-DyUwOKDLPjq4ZJcbpVqk7TW_6ySA4VRJs3kVjhAjADR-Nz44E8LFeVQG8HU1Htil-B1NQliDzadUfUATysJQWATPPr5WdnjqPV8rzN7h3XYYcuRrcoAVqQzATc60JM1Kgubju"/>
                </button>
            </div>
        </header>

        <main class="px-gutter py-6 max-w-2xl mx-auto space-y-12">
            <!-- Dashboard Header -->
            <section class="text-center space-y-2">
                <h2 class="font-headline-xl-mobile text-headline-xl-mobile text-primary">Dog Stay System</h2>
                <p class="text-on-surface-variant font-body-md">Your pet is becoming an urban legend.</p>
            </section>
            
            <!-- Circular XP Progress -->
            <section class="flex flex-col items-center justify-center py-6">
                <div class="relative w-48 h-48 flex items-center justify-center">
                    <svg class="w-full h-full transform -rotate-90" viewbox="0 0 36 36">
                        <path class="text-surface-container-highest stroke-current" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke-width="3"></path>
                        <path class="text-primary-container stroke-current circular-progress" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke-dasharray="75, 100" stroke-linecap="round" stroke-width="3"></path>
                    </svg>
                    <div class="absolute flex flex-col items-center justify-center">
                        <span class="font-headline-xl-mobile text-headline-xl-mobile text-primary">Lvl 12</span>
                        <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">750 / 1000 XP</span>
                    </div>
                </div>
                <p class="mt-6 font-body-md text-on-surface-variant text-center max-w-xs">250 XP more for Level 13! Keep exploring.</p>
            </section>
            
            <!-- Bento Grid: Badges & Leaderboard -->
            <section class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- Badges -->
                <div class="bg-surface-container-lowest rounded-DEFAULT border border-surface-variant soft-shadow p-6 card-press">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="font-button-text text-button-text text-primary">Recent Badges</h3>
                        <span class="material-symbols-outlined text-secondary" data-icon="military_tech">military_tech</span>
                    </div>
                    <div class="flex gap-4 overflow-x-auto pb-2 hide-scrollbar">
                        <div class="flex flex-col items-center gap-2 min-w-[80px]">
                            <div class="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center">
                                <span class="material-symbols-outlined icon-fill text-on-primary-fixed" data-icon="explore">explore</span>
                            </div>
                            <span class="font-label-sm text-label-sm text-center">Explorer Dog</span>
                        </div>
                        <div class="flex flex-col items-center gap-2 min-w-[80px]">
                            <div class="w-16 h-16 rounded-full bg-secondary-fixed flex items-center justify-center">
                                <span class="material-symbols-outlined icon-fill text-on-secondary-fixed" data-icon="local_cafe">local_cafe</span>
                            </div>
                            <span class="font-label-sm text-label-sm text-center">Specialist</span>
                        </div>
                        <div class="flex flex-col items-center gap-2 min-w-[80px]">
                            <div class="w-16 h-16 rounded-full bg-tertiary-fixed flex items-center justify-center opacity-50 grayscale">
                                <span class="material-symbols-outlined text-on-tertiary-fixed" data-icon="pets">pets</span>
                            </div>
                            <span class="font-label-sm text-label-sm text-center text-on-surface-variant">Coming soon</span>
                        </div>
                    </div>
                </div>
                
                <!-- Leaderboard -->
                <div class="bg-surface-container-lowest rounded-DEFAULT border border-surface-variant soft-shadow p-6 card-press">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="font-button-text text-button-text text-primary">Pack Leaders</h3>
                        <span class="material-symbols-outlined text-primary-container" data-icon="group">group</span>
                    </div>
                    <ul class="space-y-4">
                        <li class="flex items-center gap-3">
                            <span class="font-button-text text-button-text text-on-surface-variant w-4 text-center">1</span>
                            <div class="w-10 h-10 rounded-full bg-surface-container overflow-hidden">
                                <img class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCt4o-_mLHoRaztKAdR5Sf57B7FRD4yxNgMlw0YHviSNxLl0RI2Ro_XmWXyG7tGJu3SRyhcvfiu1AnmNnTANLLoI551ReNuXe2a8EdVtYAwqG4O2lB_Sma0wbFyY2A25_bev6BfCPcJNPwuOt-kroV7Nixl1GSVf7pfkwbLZCm41cjzSIT2JUcMqMD1DqeesgZIL_L33aOhw_CQEUBySrkSpKWsNEeUZGZA4UUfMiNpUsjyPPcxwzQQ"/>
                            </div>
                            <div class="flex-1">
                                <p class="font-button-text text-button-text text-on-surface">Thor (Husky)</p>
                            </div>
                            <span class="font-label-sm text-label-sm text-secondary">2.4k XP</span>
                        </li>
                        <li class="flex items-center gap-3 bg-primary-fixed/20 p-2 -mx-2 rounded-lg">
                            <span class="font-button-text text-button-text text-primary w-4 text-center">2</span>
                            <div class="w-10 h-10 rounded-full bg-surface-container overflow-hidden">
                                <img class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzayM4AgD_Q2L68ieelNm_HjQeUtAO3s42Cu5TqQhVbDJ6AnCLNlSRgIi4tRe6krxRzmsGe8i-f7YBNHNmbTB8dwt0OnlbkydrBculJTS3eYCkPdSvnvNByeRhkf8Y51D19g3pg8FU3yr1s5WxDMnjeurHVgCNmHxLmI7UsDSztTCHXfGOw9YE4pH9uCXTaFk4c3vfI3bovSUFl8_xtE9MPGoaX0ZPZSIdGY5ksK-DkZktUHoYAfOS"/>
                            </div>
                            <div class="flex-1">
                                <p class="font-button-text text-button-text text-primary">Bento (You)</p>
                            </div>
                            <span class="font-label-sm text-label-sm text-primary">1.7k XP</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <span class="font-button-text text-button-text text-on-surface-variant w-4 text-center">3</span>
                            <div class="w-10 h-10 rounded-full bg-surface-container overflow-hidden">
                                <img class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuXishE0um-xiWuw35aL3Vg6IqGIc_MYmtzEDIJGxvarHlC-6YuM2aWe6qKIM-Qe7MU7zpY-EpiqUlaWJiaW95b8Zda8jOrLLLP1WzOjXyOGwUa6A2UZIKZYIuPNQzGcLkF8ocDsrQcLNTtIWjvcuTEUWx7MYFJf_EdrRCnmEf6E4EfGDuDPOVAe5R47D2Gw2TgunjJe12MhJIhob5N3ny20kDqW8gH31oMQsUAQ8pmzfTIYoRm_WB"/>
                            </div>
                            <div class="flex-1">
                                <p class="font-button-text text-button-text text-on-surface">Luna (Bulldog)</p>
                            </div>
                            <span class="font-label-sm text-label-sm text-on-surface-variant">1.5k XP</span>
                        </li>
                    </ul>
                </div>
            </section>
            
            <!-- Recent Activity List -->
            <section class="pb-12">
                <h3 class="font-button-text text-button-text text-primary mb-4">Recent Activities</h3>
                <div class="space-y-4">
                    <div class="flex items-center justify-between p-4 bg-surface-container-lowest rounded-lg border border-surface-variant soft-shadow">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center">
                                <span class="material-symbols-outlined text-primary" data-icon="location_on">location_on</span>
                            </div>
                            <div>
                                <p class="font-button-text text-button-text text-on-surface">Ibirapuera Park</p>
                                <p class="font-body-md text-on-surface-variant text-sm">Check-in at Pet Area</p>
                            </div>
                        </div>
                        <span class="font-button-text text-button-text text-primary-container">+50 XP</span>
                    </div>
                    <div class="flex items-center justify-between p-4 bg-surface-container-lowest rounded-lg border border-surface-variant soft-shadow">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center">
                                <span class="material-symbols-outlined text-primary" data-icon="review">rate_review</span>
                            </div>
                            <div>
                                <p class="font-button-text text-button-text text-on-surface">Cafe do Ponto</p>
                                <p class="font-body-md text-on-surface-variant text-sm">Pet-Friendly Review</p>
                            </div>
                        </div>
                        <span class="font-button-text text-button-text text-primary-container">+20 XP</span>
                    </div>
                </div>
            </section>
        </main>
        
        <!-- FAB for Check-in -->
        <button class="fixed bottom-28 right-6 md:right-8 w-16 h-16 rounded-full bg-secondary flex items-center justify-center fab-shadow text-on-secondary card-press z-40 transition-transform hover:scale-105 active:scale-95">
            <span class="material-symbols-outlined icon-fill" data-icon="add_location">add_location</span>
        </button>
    </div>
    `;
}
