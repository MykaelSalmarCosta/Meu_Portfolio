document.addEventListener("DOMContentLoaded", function () {
    const galleryImages = document.querySelectorAll(".gallery img");
    let currentIndex = 0;
  
    let lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="close-btn" aria-label="Fechar imagem">&times;</button>
            <img src="" alt="Imagem em destaque">
            <button class="nav-btn prev-btn" aria-label="Imagem anterior">⟨</button>
            <button class="nav-btn next-btn" aria-label="Próxima imagem">⟩</button>
        </div>
    `;
    document.body.appendChild(lightbox);
  
    const lightboxImg = lightbox.querySelector("img");
    const closeButton = lightbox.querySelector(".close-btn");
    const prevButton = lightbox.querySelector(".prev-btn");
    const nextButton = lightbox.querySelector(".next-btn");
  
    function showImage(index) {
      currentIndex = index;
      lightboxImg.src = galleryImages[currentIndex].src;
      lightbox.style.display = "flex";
    }
  
    galleryImages.forEach((img, index) => {
      img.addEventListener("click", function (event) {
        event.preventDefault();
        showImage(index);
      });
    });
  
    closeButton.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
      }
    });
  
    document.addEventListener("keydown", function (event) {
      if (lightbox.style.display === "flex") {
        if (event.key === "Escape") {
          lightbox.style.display = "none";
        } else if (event.key === "ArrowRight") {
          showNextImage();
        } else if (event.key === "ArrowLeft") {
          showPrevImage();
        }
      }
    });
  
    function showNextImage() {
      currentIndex = (currentIndex + 1) % galleryImages.length;
      showImage(currentIndex);
    }
  
    function showPrevImage() {
      currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      showImage(currentIndex);
    }
  
    nextButton.addEventListener("click", showNextImage);
    prevButton.addEventListener("click", showPrevImage);
  });
  
