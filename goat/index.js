const magic_dialog = document.querySelector("#magic-goat-modal");
const magic_open = document.querySelector("#magic-open-modal");
const magic_close = document.querySelector("#magic-close-modal");
const goat_slider = document.querySelector("#goat-slider");
const magic_goat = document.querySelector("#magic-goat");
const surprise_dialog = document.querySelector("#surprise-goat-modal");
const surprise_open = document.querySelector("#surprise-open-modal");
const surprise_close = document.querySelector("#surprise-close-modal");

magic_open.addEventListener("click", () => {
    magic_dialog.showModal();
  });

goat_slider.addEventListener('input', function() {
  magic_goat.style.opacity = (goat_slider.value)/100;
})

magic_close.addEventListener("click", () => {
    magic_dialog.close();
  });

  surprise_open.addEventListener("focus", () => {
    surprise_dialog.showModal();
  });

surprise_close.addEventListener("click", () => {
    surprise_dialog.close();
  });