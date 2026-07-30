export function renderDetalheLocal() {
    return `
    <!-- Header / Nav Shell -->
    <header class="absolute top-0 left-0 w-full z-40 bg-transparent transition-colors">
        <div class="flex justify-between items-center px-gutter py-4 w-full">
            <!-- Back Button -->
            <button onclick="closeOverlay('detalhe-overlay')" class="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container-lowest/80 backdrop-blur shadow hover:bg-surface transition-colors scale-95 active:opacity-80">
                <span class="material-symbols-outlined text-primary" data-icon="arrow_back">arrow_back</span>
            </button>
            <div class="flex gap-2">
                <button class="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-lowest/80 backdrop-blur shadow hover:bg-surface transition-colors scale-95 active:opacity-80">
                    <span class="material-symbols-outlined text-primary" data-icon="favorite_border">favorite_border</span>
                </button>
                <button class="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-lowest/80 backdrop-blur shadow hover:bg-surface transition-colors scale-95 active:opacity-80">
                    <span class="material-symbols-outlined text-primary" data-icon="share">share</span>
                </button>
            </div>
        </div>
    </header>
    
    <main class="flex-1 overflow-y-auto">
        <!-- Hero Image -->
        <section class="relative w-full h-[300px] bg-surface-container-highest">
            <div class="absolute inset-0 bg-cover bg-center w-full h-full" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBwIVUInz7XYRJn0wp4aUdUzYpMEr26bYGLZXowWX9-voHypOxW_lNNbwvxtSqXAjD64oec4tLhX7EYbMuAGLjgdiu5Ra_k0XoTvlHloRhq3gytWC9-6x3ATBCHmTkjNtBA6gDX_N1I7jxRubh0rEBHAokJvBJkPwomz2gpefxUZGgHg_GY1apyADyGupafPNU1-FzVIUs0cVN0O7JmnlIYXeBfcHiY5h_nF0IpLH8zg_h6tcVB1_1o')"></div>
            <!-- Gradient Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <!-- Title Content Overlay -->
            <div class="absolute bottom-0 left-0 w-full px-gutter pb-6">
                <div class="flex justify-between items-end">
                    <div>
                        <h1 class="font-headline-xl-mobile text-headline-xl-mobile text-primary drop-shadow-sm">Botanical Cafe</h1>
                        <p class="text-on-surface-variant flex items-center mt-1">
                            <span class="material-symbols-outlined text-[18px] mr-1" data-weight="fill">star</span>
                            <span class="font-bold text-primary mr-2">4.9</span>
                            (128 reviews) • Cafe
                        </p>
                    </div>
                </div>
            </div>
        </section>
        
        <div class="px-gutter py-6 space-y-8">
            <!-- Avaliações por Tags (Bento-style layout) -->
            <section>
                <h2 class="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-4">Why pets love it</h2>
                <div class="grid grid-cols-2 gap-3">
                    <!-- Highlight Tag -->
                    <div class="col-span-2 bg-primary-fixed-dim/30 rounded-[24px] p-5 flex items-center border border-primary-fixed chip-interactive cursor-pointer shadow-sm">
                        <div class="w-12 h-12 rounded-full bg-primary flex items-center justify-center mr-4 shrink-0">
                            <span class="material-symbols-outlined text-on-primary" data-icon="cookie">cookie</span>
                        </div>
                        <div>
                            <h3 class="font-button-text text-button-text text-primary">Give Treats</h3>
                            <p class="text-label-sm font-label-sm text-on-surface-variant mt-1">98% of users confirm</p>
                        </div>
                    </div>
                    <!-- Secondary Tags -->
                    <div class="bg-secondary-fixed/50 rounded-[20px] p-4 border border-secondary-fixed-dim/30 chip-interactive cursor-pointer flex flex-col justify-between h-full shadow-[0_4px_20px_rgba(34,47,75,0.03)]">
                        <span class="material-symbols-outlined text-secondary mb-2" data-icon="water_drop">water_drop</span>
                        <span class="font-button-text text-button-text text-on-secondary-container leading-tight">Water Bowl</span>
                    </div>
                    <div class="bg-tertiary-fixed/50 rounded-[20px] p-4 border border-tertiary-fixed-dim/30 chip-interactive cursor-pointer flex flex-col justify-between h-full shadow-[0_4px_20px_rgba(34,47,75,0.03)]">
                        <span class="material-symbols-outlined text-tertiary mb-2" data-icon="favorite">favorite</span>
                        <span class="font-button-text text-button-text text-on-tertiary-container leading-tight">Waiters Love Pets</span>
                    </div>
                </div>
            </section>
            
            <!-- Comentários Rápidos -->
            <section>
                <h2 class="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-4">Latest Barks</h2>
                <div class="space-y-4">
                    <!-- Comment 1 -->
                    <div class="bg-surface-container-low rounded-[20px] p-4 flex gap-4">
                        <div class="w-10 h-10 rounded-full overflow-hidden shrink-0 bg-surface-variant">
                            <img class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5XWjW1rJUR7FpN_BTLhtIVQ7e8d0bQXeJFRxhGhxkrXZfeAXrdbV887jbWL3f_z74WrBU7J5hJft4jAd9Z4xOWYs95Vr16BwRknbXWa4QIPnsqEISVNQvk1USog2l2RoA00JAdDc2GqoqNBxxuKz7d7W_sZh1Khy4SiVeipWxPpRSZYtqeyO_onR1Qcpc9ulg1fIHd_YvNYpZ02xbQvtXTIwsCRBPr4gs8lVGrOeRFrAQrxkapmOZ"/>
                        </div>
                        <div class="flex-1">
                            <div class="flex justify-between items-baseline mb-1">
                                <span class="font-button-text text-button-text text-primary">Thor &amp; Ana</span>
                                <span class="text-label-sm font-label-sm text-outline">2h ago</span>
                            </div>
                            <p class="text-on-surface-variant text-sm">The waiter brought cold water without us even asking! Thor loved the complimentary biscuit. 🐾</p>
                        </div>
                    </div>
                    <!-- Comment 2 -->
                    <div class="bg-surface-container-low rounded-[20px] p-4 flex gap-4">
                        <div class="w-10 h-10 rounded-full overflow-hidden shrink-0 bg-surface-variant">
                            <img class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeSMNIuRCSZo5l7CxWcNAeM4kvIuzsPweX00AZtsMGosh_9jOFmJa8Esy4eydrTqlKYYx3VK_-vQGevKfU5xUvei2d_2k9z5gYIF1C85GVL-0uljcSevX-2Mr_hXvrxqwnMOEo5F1DZwXXCuJaKEp85k2oiCHX6xyA7SZba4ndOQdiUh77k0aH4cowfib32SDKmVRous4xUHd4Y2Lb7t8XB10H5Y5A0Z1Hawaic2guHwVS_HCw5raX"/>
                        </div>
                        <div class="flex-1">
                            <div class="flex justify-between items-baseline mb-1">
                                <span class="font-button-text text-button-text text-primary">Luna &amp; Carlos</span>
                                <span class="text-label-sm font-label-sm text-outline">Yesterday</span>
                            </div>
                            <p class="text-on-surface-variant text-sm">Very large outdoor space. I recommend arriving early on weekends because it gets crowded.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Spacer for bottom floating actions -->
            <div class="h-24"></div>
        </div>
    </main>
    
    <!-- Bottom Action Zone (Thumb Zone) -->
    <div class="absolute bottom-0 left-0 w-full p-gutter pb-safe-area-bottom bg-gradient-to-t from-background via-background to-transparent z-50">
        <div class="flex gap-4">
            <button class="w-14 h-14 rounded-[20px] bg-surface-container-highest flex items-center justify-center text-primary shadow-[0_4px_20px_rgba(22,52,46,0.1)] active:scale-95 transition-transform">
                <span class="material-symbols-outlined" data-icon="bookmark">bookmark</span>
            </button>
            <button class="flex-1 rounded-[20px] bg-secondary text-on-secondary font-button-text text-button-text flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(150,72,36,0.25)] hover:shadow-[0_4px_12px_rgba(150,72,36,0.15)] active:scale-95 transition-all">
                <span class="material-symbols-outlined" data-icon="directions">directions</span>
                Get Directions
            </button>
        </div>
    </div>
    `;
}
