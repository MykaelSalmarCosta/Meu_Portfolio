document.addEventListener("DOMContentLoaded", function () {
  const galleryImages = document.querySelectorAll(".gallery img");

  let lightbox = document.createElement("div");
  lightbox.classList.add("lightbox");
  lightbox.innerHTML = `
      <div class="lightbox-content">
          <img src="" alt="Imagem em destaque">
          <button class="close-btn" aria-label="Fechar imagem">&times;</button>
      </div>
  `;
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector("img");
  const closeButton = lightbox.querySelector(".close-btn");

  galleryImages.forEach(img => {
      img.addEventListener("click", function (event) {
          event.preventDefault();
          const imageSrc = this.src;
          lightboxImg.src = imageSrc;
          lightbox.style.display = "flex";
      });
  });

  closeButton.addEventListener("click", () => {
      lightbox.style.display = "none";
      lightbox.src = "";
  });

  lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
          lightbox.style.display = "none";
      }
  });

  document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
          lightbox.style.display = "none";
      }
  });
});

