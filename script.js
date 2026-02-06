document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       1. DUPLICAÇÃO PARA SCROLL INFINITO (TRATAMENTOS)
       ========================= */
    const track = document.getElementById("track-tratamentos");
    if (track) {
        const cards = Array.from(track.children);
        // Clona 2x para garantir preenchimento em telas 4k
        for (let i = 0; i < 2; i++) {
            cards.forEach(card => {
                const clone = card.cloneNode(true);
                clone.setAttribute('aria-hidden', 'true');
                track.appendChild(clone);
            });
        }
    }

    /* =========================
       2. CARROSSEL DE RESULTADOS (SETAS)
       ========================= */
    const resultsSlider = document.getElementById('results-slider');
    const btnNext = document.getElementById('next-results');
    const btnPrev = document.getElementById('prev-results');

    if (resultsSlider && btnNext && btnPrev) {
        const getScrollAmount = () => {
            const card = resultsSlider.querySelector('.result-card');
            return card ? card.offsetWidth + 20 : 320;
        };

        btnNext.addEventListener('click', () => {
            resultsSlider.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
        });

        btnPrev.addEventListener('click', () => {
            resultsSlider.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
        });
    }

    /* =========================
       3. MODAL SOBRE MIM
       ========================= */
    const aboutTrigger = document.getElementById("aboutTrigger");
    const aboutOverlay = document.getElementById("aboutOverlay");
    const closeAboutBtn = document.querySelector(".close-about-btn");

    if (aboutTrigger && aboutOverlay) {
        const toggleModal = (show) => {
            aboutOverlay.classList.toggle("active", show);
            document.body.style.overflow = show ? "hidden" : "auto";
        };

        aboutTrigger.addEventListener("click", (e) => {
            e.preventDefault();
            toggleModal(true);
        });

        if (closeAboutBtn) closeAboutBtn.addEventListener("click", () => toggleModal(false));

        aboutOverlay.addEventListener("click", (e) => {
            if (e.target === aboutOverlay) toggleModal(false);
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && aboutOverlay.classList.contains("active")) toggleModal(false);
        });
    }

    /* =========================
       4. POPOVER DE CONTATO & COPIAR
       ========================= */
    const contactTrigger = document.getElementById('contact-trigger');
    const contactPopover = document.getElementById('contact-popover');
    const btnCopy = document.getElementById('btn-copy-number');

    if (contactTrigger && contactPopover) {
        contactTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            contactPopover.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!contactTrigger.contains(e.target) && !contactPopover.contains(e.target)) {
                contactPopover.classList.remove('active');
            }
        });
    }

    if (btnCopy) {
        btnCopy.addEventListener('click', () => {
            const numberToCopy = "83987143928";
            navigator.clipboard.writeText(numberToCopy).then(() => {
                const icon = btnCopy.querySelector('i');
                btnCopy.style.color = "#25d366";
                if (icon) icon.className = "fas fa-check";

                setTimeout(() => {
                    btnCopy.style.color = "";
                    if (icon) icon.className = "far fa-copy";
                }, 2000);
            });
        });
    }

    /* =========================
       5. VISUALIZADOR DE IMAGEM (LIGHTBOX)
       ========================= */
    const resultImages = document.querySelectorAll(".result-image img");
    const viewer = document.getElementById("image-viewer");
    const fullImage = document.getElementById("full-image");
    const closeViewer = document.querySelector("#image-viewer .close");

    if (viewer && fullImage) {
        resultImages.forEach((img) => {
            img.style.cursor = "zoom-in";
            img.addEventListener('click', () => {
                fullImage.src = img.src;
                viewer.style.display = "flex";
                setTimeout(() => { fullImage.style.transform = "scale(1)"; }, 10);
            });
        });

        const closeGallery = () => {
            fullImage.style.transform = "scale(0)";
            setTimeout(() => {
                viewer.style.display = "none";
                fullImage.src = "";
            }, 300);
        };

        if (closeViewer) closeViewer.addEventListener('click', closeGallery);
        viewer.addEventListener('click', (e) => {
            if (e.target === viewer) closeGallery();
        });
    }
});

/* =========================
   LÓGICA DOS PONTINHOS (DOTS)
   ========================= */
const sliderEl = document.getElementById('results-slider');
const dots = document.querySelectorAll('.dot');

if (sliderEl && dots.length > 0) {
    sliderEl.addEventListener('scroll', () => {
        // 1. Pega a largura de um card individual
        const card = sliderEl.querySelector('.result-card');
        const cardWidth = card.offsetWidth + 20; // largura + gap

        // 2. Calcula qual índice está mais visível no momento
        // Dividimos o scroll atual pela largura do card e arredondamos
        const scrollIndex = Math.round(sliderEl.scrollLeft / cardWidth);
        
        // 3. Atualiza as classes
        dots.forEach((dot, index) => {
            if (index === scrollIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    });
}
