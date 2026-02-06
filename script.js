    document.addEventListener("DOMContentLoaded", () => {
    /* =========================
        MODAL SOBRE MIM
        ========================= */

    const openBtn = document.getElementById("aboutTrigger");
    const overlay = document.getElementById("aboutOverlay");
    const closeBtn = document.querySelector(".close-about-btn");
    const modal = document.querySelector(".about-modal");

    if (!openBtn || !overlay || !closeBtn) return;

    // Abrir
    openBtn.addEventListener("click", (e) => {
        e.preventDefault();
        overlay.classList.add("active");
    });

    // Fechar no X
    closeBtn.addEventListener("click", () => {
        overlay.classList.remove("active");
    });

    // Fechar clicando fora
    overlay.addEventListener("click", () => {
        overlay.classList.remove("active");
    });

    // Impede fechar clicando dentro do modal
    modal.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    // Fechar com ESC
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
        overlay.classList.remove("active");
        }
    });
    });

    /* =========================
        SLIDER ESPECIALIDADES
        ========================= */

    const slider = document.querySelector(".especialidades-track");

    if (slider) {
    let autoPlayInterval;

    const startAutoPlay = () => {
    autoPlayInterval = setInterval(() => {
      const card = slider.querySelector(".especialidade-card");
      if (!card) return;

      const gap = 25;
      const cardWidth = card.offsetWidth + gap;
      const maxScroll = slider.scrollWidth - slider.clientWidth;

      if (slider.scrollLeft >= maxScroll - 10) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, 3000);
  };

  startAutoPlay();

  // Pausar autoplay
  slider.addEventListener("mouseenter", () => clearInterval(autoPlayInterval));
  slider.addEventListener("mouseleave", startAutoPlay);

  // Mobile
  slider.addEventListener("touchstart", () => clearInterval(autoPlayInterval));
  slider.addEventListener("touchend", startAutoPlay);
}

const resultImages = document.querySelectorAll(".result-image img");
const viewer = document.getElementById("image-viewer");
const fullImage = document.getElementById("full-image");
const closeBtn = document.querySelector(".close");

// Adiciona o evento de clique em cada foto
resultImages.forEach((img) => {
  img.style.cursor = "zoom-in"; // Muda o cursor para indicar que é clicável
  img.onclick = function () {
    viewer.style.display = "block";
    fullImage.src = this.src;
  };
});

// Fecha ao clicar no 'X' ou fora da imagem
viewer.onclick = function () {
  viewer.style.display = "none";
};

const contactTrigger = document.getElementById('contact-trigger');
const contactPopover = document.getElementById('contact-popover');

// Abre/Fecha o balão ao clicar em Contato
contactTrigger.addEventListener('click', (e) => {
    e.stopPropagation();
    contactPopover.classList.toggle('active');
});

// Fecha o balão ao clicar em qualquer outro lugar do site
document.addEventListener('click', () => {
    contactPopover.classList.remove('active');
});

// Função para copiar o número
function copyNumber() {
    const number = "83987143928";
    navigator.clipboard.writeText(number).then(() => {
        const btn = document.querySelector('.copy-btn');
        const icon = btn.querySelector('i');
        
        // Feedback visual de sucesso
        icon.classList.replace('far', 'fas');
        icon.classList.replace('fa-copy', 'fa-check');
        btn.style.borderColor = "#25d366";
        btn.style.color = "#25d366";

        setTimeout(() => {
            icon.classList.replace('fas', 'far');
            icon.classList.replace('fa-check', 'fa-copy');
            btn.style.borderColor = "#8b7355";
            btn.style.color = "#8b7355";
        }, 2000);
    });
}