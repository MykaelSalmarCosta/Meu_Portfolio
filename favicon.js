function updateFavicon() {
  const favicon = document.getElementById("favicon");

  if (!favicon) {
    console.error("Elemento favicon não encontrado!");
    return;
  }

  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  favicon.href = isDarkMode ? "assets/favicon-dark.png" : "assets/favicon-light.png";
}

updateFavicon();

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", updateFavicon);