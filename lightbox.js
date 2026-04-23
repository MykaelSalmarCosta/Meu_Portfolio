document.addEventListener("DOMContentLoaded", () => {
  const galleryImages = document.querySelectorAll(".gallery img");

  if (!galleryImages.length) {
    return;
  }

  let currentIndex = 0;

  const lightbox = document.createElement("div");
  lightbox.classList.add("lightbox");
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <button class="close-btn" aria-label="Fechar imagem">&times;</button>
      <img src="" alt="">
      <button class="nav-btn prev-btn" aria-label="Imagem anterior">&#8249;</button>
      <button class="nav-btn next-btn" aria-label="Próxima imagem">&#8250;</button>
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
    lightboxImg.alt = galleryImages[currentIndex].alt;
    lightbox.style.display = "flex";
  }

  function hideImage() {
    lightbox.style.display = "none";
  }

  function showNextImage() {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    showImage(currentIndex);
  }

  function showPrevImage() {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    showImage(currentIndex);
  }

  galleryImages.forEach((img, index) => {
    img.addEventListener("click", (event) => {
      event.preventDefault();
      showImage(index);
    });
  });

  closeButton.addEventListener("click", hideImage);
  nextButton.addEventListener("click", showNextImage);
  prevButton.addEventListener("click", showPrevImage);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      hideImage();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (lightbox.style.display !== "flex") {
      return;
    }

    if (event.key === "Escape") {
      hideImage();
    } else if (event.key === "ArrowRight") {
      showNextImage();
    } else if (event.key === "ArrowLeft") {
      showPrevImage();
    }
  });
});
